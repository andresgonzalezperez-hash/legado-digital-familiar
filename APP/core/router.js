function applyTabSwitch(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelectorAll('.bottom-nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const onclickAttr = item.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes(tabId)) {
            item.classList.add('active');
        }
    });

    const bottomNavBtns = document.querySelectorAll('.bottom-nav-btn');
    bottomNavBtns.forEach(btn => {
        const dataTab = btn.getAttribute('data-tab');
        const onclickAttr = btn.getAttribute('onclick');
        if (dataTab === tabId || (onclickAttr && onclickAttr.includes(tabId))) {
            btn.classList.add('active');
        }
    });

    // Desplazar al inicio suavemente al cambiar de pestaña
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (typeof closeMobileMenu === 'function') {
        closeMobileMenu();
    }
}

function switchTab(tabId) {
    if (typeof document.startViewTransition === 'function') {
        document.startViewTransition(() => applyTabSwitch(tabId));
    } else {
        applyTabSwitch(tabId);
    }
}
