function switchTab(tabId, btnElement) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const target = document.getElementById(tabId);
    if (target) {
        target.classList.add('active');
    }
    if (btnElement) {
        btnElement.classList.add('active');
    }

    const titles = {
        'overview': 'Furina',
        'profile': 'Furina / Profile',
        'storyline': 'Furina / Storyline',
        'voice': 'Furina / Voice-Overs',
        'dressing': 'Furina / Dressing Room',
        'companion': 'Furina / Companion',
        'gallery': 'Furina / Gallery',
        'trivia': 'Furina / Trivia & Facts'
    };
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) {
        pageTitle.innerText = titles[tabId] || 'Furina';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchMainSub(subId, btnElement) {
    const subContents = document.querySelectorAll('.main-sub-content');
    subContents.forEach(content => content.classList.remove('active-sub'));

    const subButtons = btnElement.parentElement.querySelectorAll('.sub-tab-btn');
    subButtons.forEach(btn => btn.classList.remove('active'));

    const target = document.getElementById('main-sub-' + subId);
    if (target) {
        target.classList.add('active-sub');
    }
    if (btnElement) {
        btnElement.classList.add('active');
    }
}

function switchInnerSub(innerId, btnElement) {
    const innerContents = document.querySelectorAll('.inner-sub-content');
    innerContents.forEach(content => content.classList.remove('active-inner'));

    const innerButtons = btnElement.parentElement.querySelectorAll('.sub-tab-btn');
    innerButtons.forEach(btn => btn.classList.remove('active'));

    const target = document.getElementById('inner-sub-' + innerId);
    if (target) {
        target.classList.add('active-inner');
    }
    if (btnElement) {
        btnElement.classList.add('active');
    }
}

function openLightbox(imgSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    if (lightbox && lightboxImg) {
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'flex';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}