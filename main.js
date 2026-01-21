// Data loaded from data.js

let currentCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
    renderSoftware();
    renderFreeTools();
    renderFilters();
    renderTutorials();
    renderNewsTicker();
    setupModal();
});

function renderSoftware() {
    const container = document.getElementById('software-container');
    container.innerHTML = software.map(item => {
        const name = currentLang === 'en' ? item.name_en : item.name;
        const tagline = currentLang === 'en' ? item.tagline_en : item.tagline;
        const description = currentLang === 'en' ? item.description_en : item.description;
        const features = currentLang === 'en' ? item.features_en : item.features;
        const btnText = currentLang === 'en' ? translations.en.btn_details : translations.zh.btn_details;

        return `
            <div class="card" id="${item.id}">
                <h3>${name}</h3>
                <p class="tagline">${tagline}</p>
                <p>${description}</p>
                <ul>
                    ${features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                ${item.url ? `<a href="${item.url}" class="btn" style="margin-left:10px">${btnText}</a>` : ''}
            </div>
        `;
    }).join('');
}

function renderFreeTools() {
    const container = document.getElementById('free-tools-container');
    if (!container) return;
    container.innerHTML = freeTools.map(item => {
        const name = currentLang === 'en' ? item.name_en : item.name;
        const tagline = currentLang === 'en' ? item.tagline_en : item.tagline;
        const description = currentLang === 'en' ? item.description_en : item.description;
        const features = currentLang === 'en' ? item.features_en : item.features;
        const btnText = currentLang === 'en' ? translations.en.btn_use_now : translations.zh.btn_use_now;

        return `
            <div class="card" id="${item.id}">
                <h3>${name}</h3>
                <p class="tagline">${tagline}</p>
                <p>${description}</p>
                <ul>
                    ${features ? features.map(f => `<li>${f}</li>`).join('') : ''}
                </ul>
                ${item.url ? `<a href="${item.url}" class="btn" style="margin-left:10px" target="_blank">${btnText}</a>` : ''}
            </div>
        `;
    }).join('');
}

function renderFilters() {
    const container = document.getElementById('category-filters');
    const allText = currentLang === 'en' ? translations.en.filter_all : translations.zh.filter_all;
    const allBtn = `<button class="filter-btn ${currentCategory === 'all' ? 'active' : ''}" data-id="all">${allText}</button>`;
    const catBtns = categories.map(cat => {
        const name = currentLang === 'en' ? cat.name_en : cat.name;
        return `<button class="filter-btn ${currentCategory === cat.id ? 'active' : ''}" data-id="${cat.id}">${name}</button>`;
    }).join('');

    container.innerHTML = allBtn + catBtns;

    container.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentCategory = e.target.dataset.id;
            renderFilters();
            renderTutorials();
        });
    });
}

function renderTutorials() {
    const container = document.getElementById('tutorial-list');
    const filtered = currentCategory === 'all'
        ? tutorials
        : tutorials.filter(t => t.category === currentCategory);

    container.innerHTML = filtered.map((item, idx) => {
        const cat = categories.find(c => c.id === item.category);
        const catName = currentLang === 'en' ? cat.name_en : cat.name;
        const name = currentLang === 'en' ? item.name_en : item.name;
        const summary = currentLang === 'en' ? item.summary_en : item.summary;
        const btnText = currentLang === 'en' ? translations.en.btn_read : translations.zh.btn_read;

        return `
            <div class="tutorial-item" data-index="${tutorials.indexOf(item)}">
                <div style="flex: 1; cursor:pointer" class="tutorial-clickable">
                    <span class="category-tag" style="font-size: 0.8rem; color: var(--primary); display:block; margin-bottom: 0.3rem;"># ${catName}</span>
                    <span style="font-size: 1.2rem; font-weight: 600;">${name}</span>
                    <p style="font-size: 0.9rem; color: var(--text-dim); margin-top: 0.3rem;">${summary}</p>
                </div>
                <button class="btn tutorial-open-btn" style="margin:0" data-index="${tutorials.indexOf(item)}">${btnText}</button>
            </div>
        `;
    }).join('');

    container.querySelectorAll('.tutorial-clickable, .tutorial-open-btn').forEach(el => {
        el.addEventListener('click', (e) => {
            const index = el.dataset.index;
            window.location.href = tutorials[index].url;
        });
    });
}

function setupModal() {
    const modal = document.getElementById('reader-modal');
    const closeBtn = document.querySelector('.close-btn');

    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = 'none';
    };
}

function openModal(tutorial) {
    const modal = document.getElementById('reader-modal');
    document.getElementById('modal-title').innerText = tutorial.name;
    document.getElementById('modal-content').innerText = tutorial.content;
    document.getElementById('modal-download').href = `./${tutorial.file}`;
    modal.style.display = 'flex';
}

function renderNewsTicker() {
    const container = document.getElementById('news-content');
    if (!container) return;

    container.innerHTML = latestUpdates.map(item => {
        const content = currentLang === 'en' ? item.content_en : item.content;
        return `<span class="news-date">${item.date}</span> ${content}`;
    }).join(' • ');
}
