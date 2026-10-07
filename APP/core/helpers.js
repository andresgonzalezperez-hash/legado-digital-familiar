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
        alert("Ruta copiada al portapapeles:\n" + fullPath);
    }).catch(err => {
        const textarea = document.createElement('textarea');
        textarea.value = fullPath;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            alert("Ruta copiada al portapapeles:\n" + fullPath);
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
