function loadInventory() {
    if (!state.inventory || state.inventory.length === 0) {
        state.inventory = [...state.defaultInventory];
        saveVaultToStorage();
    }
    renderInventory();
}

function saveInventoryToStorage() {
    saveVaultToStorage();
}

let currentSearchTerm = '';

function renderInventory(searchTerm = currentSearchTerm) {
    if (typeof searchTerm === 'string') {
        currentSearchTerm = searchTerm.toLowerCase().trim();
    }
    
    const tbody = document.getElementById('inventory-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    const filtered = state.inventory.filter(item => {
        const matchCategory = state.currentCategoryFilter === 'all' || item.category === state.currentCategoryFilter;
        const matchHolder = state.currentHolderFilter === 'all' || item.holder === state.currentHolderFilter;
        
        let matchSearch = true;
        if (currentSearchTerm) {
            const searchableText = `
                ${item.name || ''} 
                ${item.category || ''} 
                ${item.holder || ''} 
                ${item.user || ''} 
                ${item.action || ''}
            `.toLowerCase();
            matchSearch = searchableText.includes(currentSearchTerm);
        }

        return matchCategory && matchHolder && matchSearch;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--text-muted); padding: 2rem;">No se han encontrado registros.</td></tr>`;
        return;
    }

    filtered.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 600; color: white;">${escapeHtml(item.name)}</td>
            <td><span class="badge-2fa" style="background-color:rgba(255,255,255,0.05); color:var(--text-muted);">${escapeHtml(item.category)}</span></td>
            <td>${escapeHtml(item.holder)}</td>
            <td>${escapeHtml(item.user || '-')}</td>
            <td><span class="badge-2fa ${item.twoFactor === 'Sí' ? 'yes' : 'no'}">${escapeHtml(item.twoFactor || 'No')}</span></td>
            <td style="font-family:monospace; font-size:0.8rem; color:var(--primary-hover);">${escapeHtml(item.secretLoc || '-')}</td>
            <td style="font-size:0.85rem; color:var(--text-muted); max-width:180px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${escapeHtml(item.filePath || '')}">
                ${item.filePath ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px; height:14px; vertical-align:middle; margin-right:4px; color:var(--accent-emerald)"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>${escapeHtml(item.filePath)}` : '-'}${item.fileHash ? `<br><small style="color:#f59e0b" title="Firma SHA-256: ${item.fileHash}">&#128274; Firmado</small>` : ''}
            </td>
            <td style="font-size:0.85rem; color:var(--text-muted); max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${escapeHtml(item.action || '')}">${escapeHtml(item.action || '-')}</td>
            <td class="actions-cell">
                <button class="btn-icon" onclick="editEntry('${escapeJsAttr(item.id)}')" title="Editar">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"/></svg>
                </button>
                <button class="btn-icon delete" onclick="deleteEntry('${escapeJsAttr(item.id)}')" title="Eliminar">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function filterCategory(category) {
    state.currentCategoryFilter = category;
    
    document.querySelectorAll('#inventario .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const catBtn = {
        'all': 'btn-cat-all',
        'Principales': 'btn-cat-principales',
        'Bancos': 'btn-cat-bancos',
        'Seguros': 'btn-cat-seguros',
        'Suministros': 'btn-cat-suministros',
        'Suscripciones': 'btn-cat-suscripciones',
        'Apps': 'btn-cat-apps',
        'Otros': 'btn-cat-otros'
    };

    document.getElementById(catBtn[category]).classList.add('active');
    renderInventory();
}

function filterHolder(holder) {
    state.currentHolderFilter = holder;
    
    document.querySelectorAll('[id^="btn-holder-"]').forEach(btn => {
        btn.classList.remove('active');
    });

    const holderBtn = {
        'all': 'btn-holder-all',
        'Andrés': 'btn-holder-andres',
        'Maeva': 'btn-holder-maeva',
        'Compartido': 'btn-holder-shared'
    };

    document.getElementById(holderBtn[holder]).classList.add('active');
    renderInventory();
}

function openAddModal() {
    document.getElementById('inventory-form').reset();
    document.getElementById('entry-id').value = '';
    document.getElementById('modal-action-title').innerText = 'Añadir Cuenta al Inventario';
    document.getElementById('modal-submit-btn').innerText = 'Guardar Cuenta';
    document.getElementById('add-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('add-modal').classList.remove('active');
}

function editEntry(id) {
    const item = state.inventory.find(x => x.id === id);
    if (!item) return;

    document.getElementById('entry-id').value = item.id;
    document.getElementById('f-name').value = item.name;
    document.getElementById('f-category').value = item.category;
    document.getElementById('f-holder').value = item.holder;
    document.getElementById('f-user').value = item.user || '';
    document.getElementById('f-2fa').value = item.twoFactor || 'No';
    document.getElementById('f-secret-loc').value = item.secretLoc || '';
    
    const filePathInput = document.getElementById('f-file-path');
    if (filePathInput) filePathInput.value = item.filePath || '';
    
    document.getElementById('f-action').value = item.action || '';
    const hashInput = document.getElementById('f-file-hash');
    if(hashInput) hashInput.value = item.fileHash || '';
    const hashUpload = document.getElementById('f-file-hash-upload');
    if(hashUpload) hashUpload.value = '';

    document.getElementById('modal-action-title').innerText = 'Editar Cuenta';
    document.getElementById('modal-submit-btn').innerText = 'Actualizar Cuenta';
    document.getElementById('add-modal').classList.add('active');
}

function deleteEntry(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este registro del inventario?')) {
        state.inventory = state.inventory.filter(x => x.id !== id);
        saveVaultToStorage();
        renderInventory();
        updateDashboardMetrics();
        updatePrintView();
    }
}

function saveInventoryEntry(event) {
    event.preventDefault();

    const id = document.getElementById('entry-id').value;
    const name = document.getElementById('f-name').value.trim();
    const category = document.getElementById('f-category').value;
    const holder = document.getElementById('f-holder').value.trim();
    const user = document.getElementById('f-user').value.trim();
    const twoFactor = document.getElementById('f-2fa').value;
    const secretLoc = document.getElementById('f-secret-loc').value.trim();
    
    const filePathInput = document.getElementById('f-file-path');
    const filePath = filePathInput ? filePathInput.value.trim() : '';
    
    const action = document.getElementById('f-action').value.trim();
    const fileHashInput = document.getElementById('f-file-hash');
    const fileHash = fileHashInput ? fileHashInput.value.trim() : '';

    if (id) {
        const index = state.inventory.findIndex(x => x.id === id);
        if (index !== -1) {
            state.inventory[index] = { id, name, category, holder, user, twoFactor, secretLoc, filePath, action, fileHash };
        }
    } else {
        const newId = 'entry_' + Date.now();
        state.inventory.push({ id: newId, name, category, holder, user, twoFactor, secretLoc, filePath, action, fileHash });
    }

    saveVaultToStorage();
    closeModal();
    renderInventory();
    updateDashboardMetrics();
    updatePrintView();
}


async function generateHash(event) {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const hash = await Crypto.hashFile(file);
    document.getElementById('f-file-hash').value = hash;
    alert('Firma SHA-256 generada exitosamente: ' + hash);
  } catch (e) {
    alert('Error al generar la firma: ' + e.message);
  }
}
