function applyTabSwitch(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
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
