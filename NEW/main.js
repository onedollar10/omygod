// ============================================
// main.js - EOS Console Style Website Logic
// ============================================

let currentView = 'HOME';
let currentLang = localStorage.getItem('lang') || 'zh';
let currentCategory = 'all';

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 1000);
    renderContent();
    updateLanguageButton();

    // Search input handler
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});

function updateClock() {
    const clock = document.getElementById('live-clock');
    if (clock) {
        clock.textContent = new Date().toLocaleTimeString();
    }
}

// ============================================
// View Switching
// ============================================
function switchView(view) {
    currentView = view;

    // Update active state on buttons
    document.querySelectorAll('.direct-select').forEach(btn => {
        if (btn.dataset.view === view) {
            btn.classList.add('active-mode');
        } else {
            btn.classList.remove('active-mode');
        }
    });

    // Update title
    const titleEl = document.getElementById('current-view-title');
    if (titleEl) {
        titleEl.textContent = `LIVE: ${view}`;
    }

    renderContent();
}

// ============================================
// Content Rendering
// ============================================
function renderContent() {
    const container = document.getElementById('main-content');
    if (!container) return;

    const t = translations[currentLang];

    switch (currentView) {
        case 'HOME':
            container.innerHTML = renderHome(t);
            break;
        case 'WORKS':
            container.innerHTML = renderWorks(t);
            break;
        case 'SHOP':
            container.innerHTML = renderShop(t);
            break;
        case 'TUTORIALS':
            container.innerHTML = renderTutorials(t);
            setupFilterHandlers();
            break;
        case 'FREE':
            container.innerHTML = renderFreeTools(t);
            break;
        case 'CONTACT':
            container.innerHTML = renderContact(t);
            break;
        default:
            container.innerHTML = renderHome(t);
    }
}

// ============================================
// HOME View
// ============================================
function renderHome(t) {
    return `
        <div class="view-home">
            <div class="main-title">LUMINA</div>
            <div class="sub-title">VISUAL DESIGN CONSOLE</div>
            <div class="status-badge">${t.system_ready}</div>
            <p class="tagline">${t.hero_subtitle}</p>
            <p class="hint">${t.hint_text}</p>
        </div>
    `;
}

// ============================================
// WORKS View (Portfolio)
// ============================================
function renderWorks(t) {
    const isZh = currentLang === 'zh';

    const rows = works.map((w, idx) => `
        <tr class="${idx === 0 ? 'eos-active-row' : ''}">
            <td>${w.q}</td>
            <td>${w.time}</td>
            <td>${isZh ? w.project : w.project_en}</td>
            <td>${isZh ? w.role_zh : w.role}</td>
        </tr>
    `).join('');

    return `
        <h3 class="section-header green">${t.section_works}</h3>
        <table class="eos-table">
            <thead>
                <tr>
                    <th style="width: 10%">${t.table_q}</th>
                    <th style="width: 15%">${t.table_time}</th>
                    <th>${t.table_project}</th>
                    <th style="width: 20%">${t.table_role}</th>
                </tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
        <div style="margin-top: 20px; font-size: 0.8rem; color: #888;">
            ${t.pending_cue}
        </div>
    `;
}

// ============================================
// SHOP View (Software Sales)
// ============================================
function renderShop(t) {
    const isZh = currentLang === 'zh';

    const productCards = software.map((item, idx) => {
        const name = isZh ? item.name : item.name_en;
        const tagline = isZh ? item.tagline : item.tagline_en;
        const description = isZh ? item.description : item.description_en;
        const features = isZh ? item.features : item.features_en;

        return `
            <div class="product-card" onclick="window.location.href='${item.url}'">
                <h3>${name}</h3>
                <p class="tagline">${tagline}</p>
                <p class="description">${description}</p>
                <ul>
                    ${features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <div class="btn-row">
                    <a href="${item.url}" class="eos-btn">${t.btn_details}</a>
                </div>
            </div>
        `;
    }).join('');

    return `
        <h3 class="section-header magenta">${t.section_shop}</h3>
        ${productCards}
    `;
}

// ============================================
// TUTORIALS View
// ============================================
function renderTutorials(t) {
    const isZh = currentLang === 'zh';

    // Filter tabs
    const filterTabs = `
        <div class="filter-tabs">
            <button class="filter-tab ${currentCategory === 'all' ? 'active' : ''}" data-category="all">${t.filter_all}</button>
            ${categories.map(cat => `
                <button class="filter-tab ${currentCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
                    ${isZh ? cat.name : cat.name_en}
                </button>
            `).join('')}
        </div>
    `;

    // Filter tutorials
    const filtered = currentCategory === 'all'
        ? tutorials
        : tutorials.filter(t => t.category === currentCategory);

    const tutorialList = filtered.map(item => {
        const cat = categories.find(c => c.id === item.category);
        const catName = isZh ? cat.name : cat.name_en;
        const name = isZh ? item.name : item.name_en;
        const summary = isZh ? item.summary : item.summary_en;

        return `
            <div class="tutorial-item" onclick="window.location.href='${item.url}'">
                <div class="category"># ${catName}</div>
                <div class="title">${name}</div>
                <div class="summary">${summary}</div>
            </div>
        `;
    }).join('');

    return `
        <h3 class="section-header cyan">${t.section_tutorials}</h3>
        ${filterTabs}
        ${tutorialList}
    `;
}

function setupFilterHandlers() {
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            currentCategory = e.target.dataset.category;
            renderContent();
        });
    });
}

// ============================================
// FREE TOOLS View
// ============================================
function renderFreeTools(t) {
    const isZh = currentLang === 'zh';

    const toolCards = freeTools.map(item => {
        const name = isZh ? item.name : item.name_en;
        const tagline = isZh ? item.tagline : item.tagline_en;
        const description = isZh ? item.description : item.description_en;
        const features = isZh ? item.features : item.features_en;

        return `
            <div class="product-card">
                <h3>${name}</h3>
                <p class="tagline">${tagline}</p>
                <p class="description">${description}</p>
                <ul>
                    ${features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <div class="btn-row">
                    <a href="${item.url}" class="eos-btn" target="_blank">${t.btn_use}</a>
                </div>
            </div>
        `;
    }).join('');

    return `
        <h3 class="section-header amber">${t.section_free}</h3>
        ${toolCards}
    `;
}

// ============================================
// CONTACT View
// ============================================
function renderContact(t) {
    return `
        <div class="contact-card">
            <h3>${t.section_contact}</h3>
            <div class="contact-item" onclick="window.location.href='mailto:5664762@gmail.com'">
                <span class="icon">📧</span>
                <span>${t.contact_email}: 5664762@gmail.com</span>
            </div>
            <div class="contact-item" onclick="window.open('https://line.me/ti/p/~5664762', '_blank')">
                <span class="icon">💬</span>
                <span>${t.contact_line} ID: 5664762</span>
            </div>
        </div>
        <div style="text-align: center; margin-top: 30px; color: #64748b; font-size: 0.8rem;">
            © 2026 onedoller. All rights reserved.<br>
            我做的不是藝術是技術
        </div>
    `;
}

// ============================================
// Language Toggle
// ============================================
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', currentLang);
    updateLanguageButton();
    renderContent();
}

function updateLanguageButton() {
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.textContent = translations[currentLang].lang_btn;
    }
}

// ============================================
// Search Functionality
// ============================================
function performSearch() {
    const input = document.getElementById('search-input');
    if (!input) return;

    const query = input.value.trim().toLowerCase();
    if (!query) return;

    // Search in tutorials
    const results = tutorials.filter(t =>
        t.name.toLowerCase().includes(query) ||
        t.name_en.toLowerCase().includes(query) ||
        t.summary.toLowerCase().includes(query) ||
        t.summary_en.toLowerCase().includes(query)
    );

    if (results.length > 0) {
        // Switch to tutorials view and show results
        currentView = 'TUTORIALS';
        currentCategory = 'all';
        switchView('TUTORIALS');
    }

    input.value = '';
}
