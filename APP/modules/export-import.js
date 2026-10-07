function exportData() {
    const exportObject = {
        version: "1.0",
        timestamp: new Date().toISOString(),
        inventory: state.inventory,
        checklist: state.checklistState
    };

    const jsonBlob = new Blob([JSON.stringify(exportObject, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(jsonBlob);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", url);
    downloadAnchorNode.setAttribute("download", "legado_export_" + Date.now() + ".json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
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
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            
            // Validate data integrity
            validateImportedData(importedData);
            
            if (importedData.inventory) {
                state.inventory = importedData.inventory;
            }
            if (importedData.checklist) {
                state.checklistState = importedData.checklist;
            }
            
            saveVaultToStorage();
            
            loadInventory();
            loadChecklist();
            updateDashboardMetrics();
            updatePrintView();
            
            alert('¡Datos importados con éxito! Se han validado y guardado en tu bóveda local.');
        } catch (error) {
            console.error("Import error:", error);
            alert('Error al importar datos: ' + (error.message || 'Archivo JSON no válido.'));
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}
