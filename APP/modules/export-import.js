async function exportData() {
    if (!sessionVMK) {
        alert("Debes desbloquear la bóveda antes de exportar una copia de seguridad.");
        return;
    }

    const payload = {
        inventory: state.inventory,
        checklist: state.checklistState
    };

    try {
        const encPayload = await Crypto.encrypt(payload, sessionVMK);
        const exportObject = {
            version: "1.2",
            encrypted: true,
            timestamp: new Date().toISOString(),
            ciphertext: encPayload.ciphertext,
            iv: encPayload.iv
        };

        const jsonBlob = new Blob([JSON.stringify(exportObject, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(jsonBlob);
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", url);
        downloadAnchorNode.setAttribute("download", "legado_backup_cifrado_" + Date.now() + ".json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (e) {
        console.error("Error al cifrar la exportación:", e);
        alert("No se pudo generar la copia de seguridad cifrada.");
    }
}

function triggerImport() {
    const fileInput = document.getElementById('import-file-input');
    if (fileInput) fileInput.click();
}

function validateImportedData(data) {
    if (!data || typeof data !== 'object') {
        throw new Error("El archivo importado no contiene un objeto JSON válido.");
    }
    
    if (data.inventory !== undefined && !Array.isArray(data.inventory)) {
        throw new Error("Formato inválido: el campo 'inventory' debe ser una lista.");
    }
    
    if (data.checklist !== undefined && (typeof data.checklist !== 'object' || Array.isArray(data.checklist))) {
        throw new Error("Formato inválido: el campo 'checklist' debe ser un objeto.");
    }

    // Sanitize and validate inventory items if present
    if (Array.isArray(data.inventory)) {
        const validCategories = ['Principales', 'Bancos', 'Seguros', 'Suministros', 'Suscripciones', 'Apps', 'Otros'];
        const validHolders = ['Andrés', 'Maeva', 'Compartido'];
        
        data.inventory = data.inventory.map((item, index) => {
            if (!item || typeof item !== 'object') {
                throw new Error(`El elemento #${index + 1} del inventario no es un registro válido.`);
            }
            return {
                id: String(item.id || 'imp-' + Date.now() + '-' + index),
                name: String(item.name || 'Sin nombre'),
                category: validCategories.includes(item.category) ? item.category : 'Otros',
                holder: validHolders.includes(item.holder) ? item.holder : 'Compartido',
                user: String(item.user || ''),
                twoFactor: item.twoFactor === 'Sí' ? 'Sí' : 'No',
                secretLoc: String(item.secretLoc || ''),
                filePath: String(item.filePath || ''),
                fileHash: String(item.fileHash || ''),
                action: String(item.action || '')
            };
        });
    }

    return true;
}

function handleImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async function(e) {
        try {
            const rawJson = JSON.parse(e.target.result);
            let importedData = rawJson;

            // Soportar tanto backups cifrados (v1.2+) como backups legados en claro (v1.0)
            if (rawJson && rawJson.encrypted === true && rawJson.ciphertext && rawJson.iv) {
                if (!sessionVMK) {
                    throw new Error("La bóveda no tiene una sesión activa para descifrar el backup.");
                }
                try {
                    importedData = await Crypto.decrypt(rawJson.ciphertext, rawJson.iv, sessionVMK);
                } catch (decErr) {
                    throw new Error("No se pudo descifrar el backup. Asegúrate de que fue generado con la misma clave maestra.");
                }
            }
            
            // Validate data integrity (including fileHash)
            validateImportedData(importedData);
            
            if (importedData.inventory) {
                state.inventory = importedData.inventory;
            }
            if (importedData.checklist) {
                state.checklistState = importedData.checklist;
            }
            
            await saveVaultToStorage();
            
            loadInventory();
            loadChecklist();
            updateDashboardMetrics();
            updatePrintView();
            
            alert('¡Datos importados con éxito! Se han validado (incluyendo firmas SHA-256) y guardado en tu bóveda cifrada.');
        } catch (error) {
            console.error("Import error:", error);
            alert('Error al importar datos: ' + (error.message || 'Archivo JSON no válido.'));
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}
