const state = {
    cryptoKey: null,
    inventory: [],
    currentCategoryFilter: 'all',
    currentHolderFilter: 'all',
    checklistKeys: [
        'chk-s1-1', 'chk-s1-2', 'chk-s1-3', 'chk-s1-4', 'chk-s1-5', 'chk-s1-6',
        'chk-s2-1', 'chk-s2-2', 'chk-s2-3', 'chk-s2-4', 'chk-s2-5', 'chk-s2-6',
        'chk-s3-1', 'chk-s3-2', 'chk-s3-3', 'chk-s3-4', 'chk-s3-5', 'chk-s3-6', 'chk-s3-7',
        'chk-s4-1', 'chk-s4-2', 'chk-s4-3', 'chk-s4-4'
    ],
    checklistState: {},
        defaultInventory: []
};

async function saveVaultToStorage() {
    if (!sessionVMK) {
        console.warn("Operación bloqueada: no hay llave de sesión activa (sessionVMK) en memoria.");
        return;
    }

    const vaultData = {
        inventory: state.inventory,
        checklist: state.checklistState
    };
    
    try {
        const encVault = await Crypto.encrypt(vaultData, sessionVMK);
        localStorage.setItem('legado_vault_pre', JSON.stringify(encVault));
    } catch (e) {
        console.error("Failed to encrypt vault data on save", e);
    }
}
