function loadChecklist() {
    state.checklistKeys.forEach(key => {
        const el = document.getElementById(key);
        if (el) {
            const checked = state.checklistState[key] === true;
            el.checked = checked;
            if (checked) {
                el.closest('.checklist-item').classList.add('checked');
            } else {
                el.closest('.checklist-item').classList.remove('checked');
            }
        }
    });
}

function updateChecklist() {
    state.checklistKeys.forEach(key => {
        const el = document.getElementById(key);
        if (el) {
            state.checklistState[key] = el.checked;
            if (el.checked) {
                el.closest('.checklist-item').classList.add('checked');
            } else {
                el.closest('.checklist-item').classList.remove('checked');
            }
        }
    });
    saveVaultToStorage();
    updateDashboardMetrics();
}
