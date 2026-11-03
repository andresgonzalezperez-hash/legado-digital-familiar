function escapeHtml(text) {
    if (text === null || text === undefined) return '';
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function escapeJsAttr(text) {
    if (text === null || text === undefined) return '';
    return String(text)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/"/g, '&quot;');
}

function showToast(message, type = 'info') {
    let container = document.getElementById('legado-toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'legado-toast-container';
        container.setAttribute('role', 'status');
        container.setAttribute('aria-live', 'polite');
        container.style.cssText = 'position:fixed; bottom:1.5rem; right:1.5rem; z-index:9999; display:flex; flex-direction:column; gap:0.6rem; max-width:380px;';
        document.body.appendChild(container);
    }

    const colors = {
        success: { border: '#10b981', bg: 'rgba(15, 23, 42, 0.96)', icon: '✅' },
        error:   { border: '#ef4444', bg: 'rgba(15, 23, 42, 0.96)', icon: '❌' },
        warning: { border: '#f59e0b', bg: 'rgba(15, 23, 42, 0.96)', icon: '⚠️' },
        info:    { border: '#3b82f6', bg: 'rgba(15, 23, 42, 0.96)', icon: 'ℹ️' }
    };
    const theme = colors[type] || colors.info;

    const toast = document.createElement('div');
    toast.style.cssText = `background:${theme.bg}; color:#f8fafc; border:1px solid rgba(255,255,255,0.12); border-left:4px solid ${theme.border}; border-radius:10px; padding:0.85rem 1rem; box-shadow:0 10px 25px rgba(0,0,0,0.45); font-size:0.88rem; line-height:1.45; display:flex; align-items:flex-start; gap:0.65rem; backdrop-filter:blur(12px); transition:opacity 0.25s ease, transform 0.25s ease;`;
    toast.innerHTML = `<span style="font-size:1.05rem; line-height:1;">${theme.icon}</span><div style="word-break:break-word;">${escapeHtml(message)}</div>`;

    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(8px)';
        setTimeout(() => toast.remove(), 260);
    }, 4200);
}

function showStatusDialog(options) {
    let dialog = document.getElementById('legado-native-dialog');
    if (!dialog) {
        dialog = document.createElement('dialog');
        dialog.id = 'legado-native-dialog';
        dialog.style.cssText = 'background:#1e293b; color:#f8fafc; border:1px solid rgba(255,255,255,0.15); border-radius:14px; padding:1.5rem; max-width:520px; width:92%; box-shadow:0 25px 50px -12px rgba(0,0,0,0.7); margin:auto;';
        dialog.addEventListener('click', (e) => {
            const rect = dialog.getBoundingClientRect();
            const clickedInDialog = (
                rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                rect.left <= e.clientX && e.clientX <= rect.left + rect.width
            );
            if (!clickedInDialog) dialog.close();
        });
        document.body.appendChild(dialog);
    }

    const isSuccess = options.type === 'success';
    const isError = options.type === 'error';
    const accentColor = isSuccess ? '#10b981' : (isError ? '#ef4444' : '#3b82f6');
    const badgeBg = isSuccess ? 'rgba(16, 185, 129, 0.15)' : (isError ? 'rgba(239, 68, 68, 0.15)' : 'rgba(59, 130, 246, 0.15)');

    dialog.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; margin-bottom:1rem;">
            <div>
                <span style="display:inline-block; font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; padding:0.25rem 0.65rem; border-radius:999px; background:${badgeBg}; color:${accentColor}; margin-bottom:0.5rem;">
                    ${escapeHtml(options.badge || 'Verificación del Sistema')}
                </span>
                <h3 style="margin:0; font-size:1.15rem; color:#ffffff;">${escapeHtml(options.title || '')}</h3>
            </div>
            <button type="button" onclick="document.getElementById('legado-native-dialog').close()" aria-label="Cerrar diálogo" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); color:#cbd5e1; border-radius:8px; width:32px; height:32px; cursor:pointer; font-size:1rem;">✕</button>
        </div>
        <div style="font-size:0.92rem; color:#cbd5e1; line-height:1.6;">
            ${options.bodyHtml || `<p style="margin:0;">${escapeHtml(options.message || '')}</p>`}
        </div>
        <div style="display:flex; justify-content:flex-end; margin-top:1.25rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.08);">
            <button type="button" class="btn btn-primary" onclick="document.getElementById('legado-native-dialog').close()">Entendido</button>
        </div>
    `;

    if (typeof dialog.showModal === 'function') {
        dialog.showModal();
    } else {
        dialog.setAttribute('open', '');
    }
}

function toggleMobileMenu() {
    const sidebar = document.getElementById('main-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    }
}

function closeMobileMenu() {
    const sidebar = document.getElementById('main-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }
}

function copyToolPath(relativePath) {
    let drive = "";
    if (window.location.protocol === 'file:') {
        const match = window.location.pathname.match(/^\/?([a-zA-Z]:)/);
        if (match) {
            drive = match[1] + "\\";
        }
    }
    const fullPath = drive + relativePath.replace(/\//g, '\\');
    
    navigator.clipboard.writeText(fullPath).then(() => {
        showToast("Ruta copiada al portapapeles: " + fullPath, "success");
    }).catch(err => {
        const textarea = document.createElement('textarea');
        textarea.value = fullPath;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showToast("Ruta copiada al portapapeles: " + fullPath, "success");
        } catch (e) {
            console.error("No se pudo copiar la ruta", e);
        }
        document.body.removeChild(textarea);
    });
}

async function hashSHA256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
        input.type = input.type === 'password' ? 'text' : 'password';
    }
}
