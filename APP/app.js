let selectedMode = null;
let sessionVMK = null; // Decrypted VMK key in memory

document.addEventListener("DOMContentLoaded", async () => {
    // Check if session is already authenticated and key is in session storage
    const savedMode = sessionStorage.getItem('legado_authenticated');
    const savedVmkBase64 = sessionStorage.getItem('legado_session_vmk');
    
    if (savedMode && savedVmkBase64) {
        try {
            sessionVMK = await Crypto.decryptVMK(
                JSON.parse(savedVmkBase64), 
                await Crypto.deriveKey("session-temp-key", Crypto.base64ToBuffer(sessionStorage.getItem('legado_session_salt')))
            );
            loginSuccess(savedMode);
        } catch (e) {
            console.error("Session key restoration failed", e);
            backToMainMenu();
        }
    } else {
        document.body.classList.add('not-logged-in');
        document.getElementById('landing-overlay').style.display = 'flex';
        checkInitializationState();
    }
});

function resetCredentialsAndSetup() {
    if (confirm("¿Estás seguro de que deseas restablecer las contraseñas del sistema? Deberás configurar la Contraseña Maestra y la Contraseña Familiar nuevamente.")) {
        localStorage.removeItem('legado_vmk_maestra');
        localStorage.removeItem('legado_vmk_familiar');
        localStorage.removeItem('legado_salt');
        localStorage.removeItem('legado_vault_pre');
        sessionStorage.clear();
        sessionVMK = null;
        checkInitializationState();
    }
}

function checkInitializationState() {
    const vmkMaestra = localStorage.getItem('legado_vmk_maestra');
    const vmkFamiliar = localStorage.getItem('legado_vmk_familiar');
    const salt = localStorage.getItem('legado_salt');
    
    if (!vmkMaestra || !vmkFamiliar || !salt) {
        document.getElementById('landing-options-step').style.display = 'none';
        document.getElementById('landing-password-step').style.display = 'none';
        document.getElementById('landing-setup-step').style.display = 'block';
    } else {
        document.getElementById('landing-options-step').style.display = 'flex';
        document.getElementById('landing-password-step').style.display = 'none';
        document.getElementById('landing-setup-step').style.display = 'none';
    }
}

async function setupMasterPasswords(event) {
    event.preventDefault();
    const passFamiliar = document.getElementById('setup-pass-recuperar').value;
    const passMaestra = document.getElementById('setup-pass-actualizar').value;
    const errorEl = document.getElementById('setup-error-msg');
    
    if (passFamiliar.length < 8 || passMaestra.length < 8) {
        errorEl.innerText = "Las contraseñas deben tener al menos 8 caracteres.";
        errorEl.style.display = 'block';
        return;
    }
    
    try {
        // 1. Generate salt and derive keys
        const salt = window.crypto.getRandomValues(new Uint8Array(16));
        const derivedKeyMaestra = await Crypto.deriveKey(passMaestra, salt);
        const derivedKeyFamiliar = await Crypto.deriveKey(passFamiliar, salt);
        
        // 2. Generate Vault Master Key (VMK)
        const vmk = await Crypto.generateVMK();
        sessionVMK = vmk;
        
        // 3. Encrypt VMK with both passwords
        const encVmkMaestra = await Crypto.encryptVMK(vmk, derivedKeyMaestra);
        const encVmkFamiliar = await Crypto.encryptVMK(vmk, derivedKeyFamiliar);
        
        // 4. Save metadata to localStorage
        localStorage.setItem('legado_salt', Crypto.bufferToBase64(salt));
        localStorage.setItem('legado_vmk_maestra', JSON.stringify(encVmkMaestra));
        localStorage.setItem('legado_vmk_familiar', JSON.stringify(encVmkFamiliar));
        
        // 5. Encrypt and save initial vault data
        const initialVault = {
            inventory: [...state.defaultInventory],
            checklist: {}
        };
        state.checklistKeys.forEach(k => initialVault.checklist[k] = false);
        
        const encVault = await Crypto.encrypt(initialVault, vmk);
        localStorage.setItem('legado_vault_pre', JSON.stringify(encVault));
        
        // 6. Cache VMK in sessionStorage for current browser session (survives refreshes)
        const sessionSalt = window.crypto.getRandomValues(new Uint8Array(16));
        const tempKey = await Crypto.deriveKey("session-temp-key", sessionSalt);
        const encSessionVmk = await Crypto.encryptVMK(vmk, tempKey);
        
        sessionStorage.setItem('legado_session_vmk', JSON.stringify(encSessionVmk));
        sessionStorage.setItem('legado_session_salt', Crypto.bufferToBase64(sessionSalt));
        sessionStorage.setItem('legado_authenticated', 'actualizar');
        
        loginSuccess('actualizar');
    } catch (e) {
        console.error("Initialization failed", e);
        errorEl.innerText = "Error criptográfico de inicialización.";
        errorEl.style.display = 'block';
    }
}

function selectLandingMode(mode) {
    selectedMode = mode;
    
    // Update labels
    const titleEl = document.getElementById('password-step-title');
    const subtitleEl = document.getElementById('password-step-subtitle');
    const inputEl = document.getElementById('master-password-input');
    const errorEl = document.getElementById('password-error-msg');
    
    inputEl.value = "";
    errorEl.style.display = 'none';
    
    if (mode === 'recuperar') {
        titleEl.innerText = "Acceso Familiar (Solo Lectura)";
        subtitleEl.innerText = "Introduce la Contraseña Familiar para ver la guía y los activos.";
    } else {
        titleEl.innerText = "Acceso Maestro (Edición y Control)";
        subtitleEl.innerText = "Introduce la Contraseña Maestra para gestionar el legado.";
    }
    
    // Switch panels
    document.getElementById('landing-options-step').style.display = 'none';
    document.getElementById('landing-password-step').style.display = 'block';
    
    setTimeout(() => {
        inputEl.focus();
    }, 100);
}

function goBackToLandingOptions() {
    selectedMode = null;
    document.getElementById('landing-options-step').style.display = 'flex';
    document.getElementById('landing-password-step').style.display = 'none';
}

async function submitMasterPassword(event) {
    event.preventDefault();
    const inputVal = document.getElementById('master-password-input').value;
    const errorEl = document.getElementById('password-error-msg');
    const cardEl = document.querySelector('.landing-card');
    
    try {
        const salt = Crypto.base64ToBuffer(localStorage.getItem('legado_salt'));
        const derivedKey = await Crypto.deriveKey(inputVal, salt);
        
        let encryptedVmkStr = "";
        if (selectedMode === 'recuperar') {
            encryptedVmkStr = localStorage.getItem('legado_vmk_familiar');
        } else if (selectedMode === 'actualizar') {
            encryptedVmkStr = localStorage.getItem('legado_vmk_maestra');
        }
        
        if (!encryptedVmkStr) throw new Error("No VMK found");
        
        const encryptedVmkObj = JSON.parse(encryptedVmkStr);
        const decryptedVmk = await Crypto.decryptVMK(encryptedVmkObj, derivedKey);
        
        // Decryption succeeded = Password is correct!
        sessionVMK = decryptedVmk;
        
        // Save VMK securely in session storage
        const sessionSalt = window.crypto.getRandomValues(new Uint8Array(16));
        const tempKey = await Crypto.deriveKey("session-temp-key", sessionSalt);
        const encSessionVmk = await Crypto.encryptVMK(decryptedVmk, tempKey);
        
        sessionStorage.setItem('legado_session_vmk', JSON.stringify(encSessionVmk));
        sessionStorage.setItem('legado_session_salt', Crypto.bufferToBase64(sessionSalt));
        sessionStorage.setItem('legado_authenticated', selectedMode);
        
        loginSuccess(selectedMode);
    } catch (e) {
        console.error("Authentication failed", e);
        errorEl.style.display = 'block';
        cardEl.classList.add('shake');
        setTimeout(() => {
            cardEl.classList.remove('shake');
        }, 500);
    }
}

async function loginSuccess(mode) {
    document.body.classList.remove('not-logged-in');
    document.body.classList.remove('mode-recuperar', 'mode-actualizar');
    document.body.classList.add(`mode-${mode}`);
    
    document.getElementById('landing-overlay').style.display = 'none';
    
    try {
        // Load and decrypt local storage vault
        const existingStr = localStorage.getItem('legado_vault_pre');
        if (existingStr && sessionVMK) {
            const encObj = JSON.parse(existingStr);
            const decryptedVault = await Crypto.decrypt(encObj.ciphertext, encObj.iv, sessionVMK);
            
            state.inventory = decryptedVault.inventory || [];
            state.checklistState = decryptedVault.checklist || {};
        } else {
            state.inventory = [...state.defaultInventory];
            state.checklistState = {};
            state.checklistKeys.forEach(k => state.checklistState[k] = false);
        }
    } catch (e) {
        console.error("Failed to decrypt inventory storage", e);
        alert("Error crítico: No se pudo descifrar la base de datos local con la clave maestra.");
        backToMainMenu();
        return;
    }
    
    // Boot app modules
    loadInventory();
    loadChecklist();
    updateDashboardMetrics();
    updatePrintView();
    
    // Set initial tab
    if (mode === 'recuperar') {
        switchTab('recuperar-guia');
    } else {
        switchTab('dashboard');
    }
}

function backToMainMenu() {
    sessionStorage.removeItem('legado_authenticated');
    sessionStorage.removeItem('legado_session_vmk');
    sessionStorage.removeItem('legado_session_salt');
    sessionVMK = null;
    
    // Clear sensitive state in memory
    state.inventory = [];
    state.checklistState = {};
    
    document.body.classList.add('not-logged-in');
    document.body.classList.remove('mode-recuperar', 'mode-actualizar');
    document.getElementById('landing-overlay').style.display = 'flex';
    goBackToLandingOptions();
}
