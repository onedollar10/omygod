// Data loaded from data.js

let currentCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
    renderSoftware();
    renderFilters();
    renderTutorials();
    setupModal();
});

function renderSoftware() {
    const container = document.getElementById('software-container');
    container.innerHTML = software.map(item => `
        <div class="card" id="${item.id}">
            <h3>${item.name}</h3>
            <p class="tagline">${item.tagline}</p>
            <p>${item.description}</p>
            <ul>
                ${item.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            ${item.url ? `<a href="${item.url}" class="btn" style="margin-left:10px">詳細介紹</a>` : ''}
        </div>
    `).join('');
}

function renderFilters() {
    const container = document.getElementById('category-filters');
    const allBtn = `<button class="filter-btn ${currentCategory === 'all' ? 'active' : ''}" data-id="all">全部</button>`;
    const catBtns = categories.map(cat => `
        <button class="filter-btn ${currentCategory === cat.id ? 'active' : ''}" data-id="${cat.id}">${cat.name}</button>
    `).join('');

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

    container.innerHTML = filtered.map((item, idx) => `
        <div class="tutorial-item" data-index="${tutorials.indexOf(item)}">
            <div style="flex: 1; cursor:pointer" class="tutorial-clickable">
                <span class="category-tag" style="font-size: 0.8rem; color: var(--primary); display:block; margin-bottom: 0.3rem;"># ${categories.find(c => c.id === item.category).name}</span>
                <span style="font-size: 1.2rem; font-weight: 600;">${item.name}</span>
                <p style="font-size: 0.9rem; color: var(--text-dim); margin-top: 0.3rem;">${item.summary}</p>
            </div>
            <button class="btn tutorial-open-btn" style="margin:0" data-index="${tutorials.indexOf(item)}">閱讀內容</button>
        </div>
    `).join('');

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
