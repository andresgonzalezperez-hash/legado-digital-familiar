function updateDashboardMetrics() {
    const counts = { Bancos: 0, Seguros: 0, Suministros: 0, Principales: 0, Apps: 0 };
    const holderCounts = { Andres: 0, Maeva: 0, Shared: 0 };

    state.inventory.forEach(item => {
        if (counts[item.category] !== undefined) {
            counts[item.category]++;
        } else if (item.category === 'Otros' || item.category === 'Suscripciones') {
            counts.Apps++; // Map 'Otros' and 'Suscripciones' to 'Apps' for summary
        }

        if (item.holder === 'Andrés') holderCounts.Andres++;
        if (item.holder === 'Maeva') holderCounts.Maeva++;
        if (item.holder === 'Compartido') holderCounts.Shared++;
    });

    // Update summaries
    const elBancos = document.getElementById('summary-bancos');
    if (elBancos) elBancos.innerText = counts.Bancos;
    
    const elSeguros = document.getElementById('summary-seguros');
    if (elSeguros) elSeguros.innerText = counts.Seguros;
    
    const elSuministros = document.getElementById('summary-proveedores');
    if (elSuministros) elSuministros.innerText = counts.Suministros;
    
    const elApps = document.getElementById('summary-apps');
    if (elApps) elApps.innerText = counts.Apps;
    
    const elCorreos = document.getElementById('summary-principales');
    if (elCorreos) elCorreos.innerText = counts.Principales;

    const elAndres = document.getElementById('summary-andres');
    if (elAndres) elAndres.innerText = holderCounts.Andres;

    const elMaeva = document.getElementById('summary-maeva');
    if (elMaeva) elMaeva.innerText = holderCounts.Maeva;

    const elShared = document.getElementById('summary-shared');
    if (elShared) elShared.innerText = holderCounts.Shared;

    // Check completion
    let completedTasks = 0;
    state.checklistKeys.forEach(key => {
        if (state.checklistState[key] === true) completedTasks++;
    });

    // Global progress
    const totalTasks = state.checklistKeys.length;
    const pct = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
    const elPct = document.getElementById('global-progress-pct');
    if (elPct) elPct.innerText = `${pct}%`;
    const elBar = document.getElementById('global-progress-bar');
    if (elBar) {
        elBar.style.width = `${pct}%`;
        elBar.setAttribute('aria-valuenow', pct);
        elBar.setAttribute('aria-valuemin', 0);
        elBar.setAttribute('aria-valuemax', 100);
    }

    // Capa 1: KeePass
    const capa1Keys = ['chk-s1-2', 'chk-s1-3', 'chk-s1-4', 'chk-s1-5', 'chk-s1-6'];
    const s1Complete = capa1Keys.every(k => state.checklistState[k] === true);
    const elCapa1 = document.getElementById('capa1-status');
    if (elCapa1) {
        elCapa1.innerText = s1Complete ? 'Completado' : 'Configurando...';
        elCapa1.style.color = s1Complete ? 'var(--accent-emerald)' : 'white';
    }

    // Capa 2: Picocrypt
    const capa2Keys = ['chk-s2-2', 'chk-s2-3', 'chk-s2-4', 'chk-s2-5'];
    const s2Complete = capa2Keys.every(k => state.checklistState[k] === true);
    const elCapa2 = document.getElementById('capa2-status');
    if (elCapa2) {
        elCapa2.innerText = s2Complete ? 'Completado' : 'Configurando...';
        elCapa2.style.color = s2Complete ? 'var(--accent-emerald)' : 'white';
    }

    // Capa 3: Fisico
    const capa3Keys = ['chk-s3-3', 'chk-s3-4', 'chk-s3-5', 'chk-s3-6'];
    const s3Complete = capa3Keys.every(k => state.checklistState[k] === true);
    const elCapa3 = document.getElementById('capa3-status');
    if (elCapa3) {
        elCapa3.innerText = s3Complete ? 'Completado' : 'Configurando...';
        elCapa3.style.color = s3Complete ? 'var(--accent-emerald)' : 'white';
    }

    // Timeline Badges
    const updateBadge = (id, isComplete, timelineId) => {
        const badge = document.getElementById(id);
        const item = document.getElementById(timelineId);
        if (badge && item) {
            if (isComplete) {
                badge.innerText = 'Completado';
                badge.style.backgroundColor = 'rgba(16, 185, 129, 0.15)';
                badge.style.color = 'var(--accent-emerald)';
                item.classList.add('completed');
                item.classList.remove('active');
            } else {
                badge.innerText = 'Pendiente';
                badge.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                badge.style.color = 'var(--text-muted)';
                item.classList.remove('completed');
                // Optional: set active if it's the first incomplete
            }
        }
    };

    updateBadge('badge-fase1', state.checklistState['chk-s1-1'] === true, 'timeline-fase1');
    updateBadge('badge-keepass', s1Complete, 'timeline-keepass');
    updateBadge('badge-cryptomator', s2Complete, 'timeline-cryptomator');
    
    const antigravityKeys = ['chk-s3-1', 'chk-s3-2'];
    updateBadge('badge-antigravity', antigravityKeys.every(k => state.checklistState[k] === true), 'timeline-google-antigravity');
    
    const protocoloKeys = ['chk-s3-3', 'chk-s3-4', 'chk-s3-5', 'chk-s3-6', 'chk-s4-1', 'chk-s4-2', 'chk-s4-3', 'chk-s4-4'];
    updateBadge('badge-protocolo', protocoloKeys.every(k => state.checklistState[k] === true), 'timeline-protocolo');

    // Highlight the active timeline item
    const timelines = ['timeline-fase1', 'timeline-keepass', 'timeline-cryptomator', 'timeline-google-antigravity', 'timeline-protocolo'];
    let foundActive = false;
    for (const t of timelines) {
        const item = document.getElementById(t);
        if (item && !item.classList.contains('completed')) {
            if (!foundActive) {
                item.classList.add('active');
                foundActive = true;
            } else {
                item.classList.remove('active');
            }
        }
    }
}
