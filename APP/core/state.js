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
    defaultInventory: [
        {
            id: "sample-1",
            name: "Gmail Principal",
            category: "Principales",
            holder: "Compartido",
            user: "correo.familiar@gmail.com",
            twoFactor: "Sí",
            secretLoc: "Passbolt: Compartido",
            action: "Cuenta crítica de recuperación. 2FA en móvil de Andrés y respaldo en papel en el sobre."
        },
        {
            id: "sample-2",
            name: "Banco Santander",
            category: "Bancos",
            holder: "Andrés",
            user: "andres.cuenta@santander.es",
            twoFactor: "Sí",
            secretLoc: "Passbolt: Personal (Andrés)",
            action: "Cuenta personal. Notificar defunción y solicitar transferencia a cuenta hereditaria."
        },
        {
            id: "sample-3",
            name: "Cuenta Inversión (MyInvestor)",
            category: "Bancos",
            holder: "Maeva",
            user: "maeva.inversion@myinvestor.es",
            twoFactor: "Sí",
            secretLoc: "Passbolt: Personal (Maeva)",
            action: "Cuenta personal. Gestionar herencia de fondos de inversión."
        },
        {
            id: "sample-4",
            name: "Seguro de Hogar Mapfre",
            category: "Seguros",
            holder: "Compartido",
            user: "Póliza Nº 12345-H",
            twoFactor: "No",
            secretLoc: "MiniPC: BÓVEDA/03_Seguros",
            action: "Llamar a Mapfre para cambio de titularidad de la póliza o baja en caso de venta."
        },
        {
            id: "sample-5",
            name: "Netflix Familiar",
            category: "Suscripciones",
            holder: "Compartido",
            user: "correo.familiar@gmail.com",
            twoFactor: "No",
            secretLoc: "Passbolt: Carpeta Ocio Familiar",
            action: "Suscripción compartida con la familia. Administrar en Passbolt para cambios de contraseña."
        },
        {
            id: "sample-6",
            name: "Hardware Wallet (Ledger/Trezor)",
            category: "Bancos",
            holder: "Andrés",
            user: "Dirección BTC: bc1q...",
            twoFactor: "No",
            secretLoc: "KeePassXC: Cripto / Semilla física en caja fuerte",
            action: "La semilla de recuperación (24 palabras) está guardada en la caja fuerte física. Usar dispositivo de respaldo para recuperar fondos."
        }
    ]
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
