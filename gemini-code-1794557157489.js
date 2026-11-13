/**
 * Presná konfigurácia všetkých 9 kameňov na scéne
 * Používa reálne súbory kameňov z tvojho GitHub repozitára (kamen.svg / kamenbezpozadia.png)
 */
const stoneConfig = [
    { id: 'stone1', step: 1, label: 'Úvod', size: 175, bottom: 5, left: 3, rotate: 0, img: 'kamen.svg' },
    { id: 'stone2', step: 2, label: 'O mne', size: 148, bottom: 3, left: 12, rotate: 0, img: 'kamenbezpozadia.png' },
    { id: 'stone3', step: 3, label: 'Zručnosti', size: 100, bottom: 4, left: 18, rotate: 0, img: 'kamen.svg' },
    { id: 'stone4', step: 4, label: 'Projekty', size: 100, bottom: 3, left: 26, rotate: 0, img: 'kamenbezpozadia.png' },
    { id: 'stone5', step: 5, label: 'Dizajn', size: 100, bottom: 3, left: 34, rotate: 0, img: 'kamen.svg' },
    { id: 'stone6', step: 6, label: 'Skúsenosti', size: 134, bottom: 3, left: 44, rotate: 0, img: 'kamenbezpozadia.png' },
    { id: 'stone7', step: 7, label: 'Vzdelanie', size: 172, bottom: 3, left: 51, rotate: 0, img: 'kamen.svg' },
    { id: 'stone8', step: 8, label: 'Vízia', size: 117, bottom: 4, left: 60, rotate: -13, img: 'kamenbezpozadia.png' },
    { id: 'stone9', step: 9, label: 'Kontakt', size: 144, bottom: 8, left: 69, rotate: -26, img: 'kamen.svg' }
];

/**
 * Vektorové SVG náhľady pre 3 karty projektov (presne v štýle tvojej vizuálnej ukážky)
 */
const projectSvgPreviews = [
    `<svg viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="184" height="94" rx="8" fill="#0d1b33" stroke="#38bdf8" stroke-opacity="0.45"/>
        <circle cx="22" cy="20" r="3" fill="#ef4444"/><circle cx="32" cy="20" r="3" fill="#fbbf24"/><circle cx="42" cy="20" r="3" fill="#10b981"/>
        <rect x="24" y="36" width="90" height="10" rx="5" fill="#38bdf8"/>
        <rect x="24" y="52" width="140" height="6" rx="3" fill="#64748b"/>
        <rect x="24" y="64" width="110" height="6" rx="3" fill="#475569"/>
        <circle cx="40" cy="86" r="7" fill="#38bdf8" fill-opacity="0.4" stroke="#38bdf8"/>
        <circle cx="72" cy="86" r="7" fill="#38bdf8" fill-opacity="0.4" stroke="#38bdf8"/>
        <circle cx="104" cy="86" r="7" fill="#38bdf8" fill-opacity="0.4" stroke="#38bdf8"/>
    </svg>`,
    `<svg viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="10" width="65" height="90" rx="6" fill="#0f1f3a" stroke="#6366f1" stroke-opacity="0.45"/>
        <rect x="22" y="22" width="45" height="6" rx="3" fill="#38bdf8"/>
        <rect x="22" y="34" width="35" height="5" rx="2.5" fill="#64748b"/>
        <rect x="88" y="10" width="46" height="42" rx="6" fill="#132544" stroke="#38bdf8" stroke-opacity="0.4"/>
        <rect x="142" y="10" width="46" height="42" rx="6" fill="#132544" stroke="#38bdf8" stroke-opacity="0.4"/>
        <rect x="88" y="58" width="46" height="42" rx="6" fill="#132544" stroke="#38bdf8" stroke-opacity="0.4"/>
        <rect x="142" y="58" width="46" height="42" rx="6" fill="#132544" stroke="#38bdf8" stroke-opacity="0.4"/>
    </svg>`,
    `<svg viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="44" height="48" rx="8" fill="#11223d" stroke="#475569"/>
        <text x="30" y="59" fill="#94a3b8" font-size="14" font-family="monospace">&lt;/&gt;</text>
        <rect x="78" y="24" width="48" height="60" rx="10" fill="#102a49" stroke="#38bdf8" stroke-width="1.5"/>
        <circle cx="102" cy="54" r="14" stroke="#38bdf8" stroke-width="3" fill="none"/>
        <rect x="140" y="30" width="44" height="48" rx="8" fill="#11223d" stroke="#475569"/>
        <rect x="152" y="42" width="20" height="24" rx="3" stroke="#94a3b8" fill="none"/>
    </svg>`
];

/**
 * Obsah jednotlivých sekcií portfólia
 */
const portfolioContent = {
    stone1: {
        subtitle: 'Kameň 01 • Začiatok cesty',
        title: 'Vitajte v mojom svete',
        description: 'Volám sa Lucia Danielová a tvorím moderné, interaktívne webové stránky, ktoré spájajú precízny kód s originálnym vizuálnym umením. Prejdite po kameňoch na ceste a spoznajte moju prácu.',
        tags: ['Web Development', 'UI/UX Dizajn', 'Kreatívne kódovanie'],
        actionText: 'Pozrieť môj GitHub',
        actionUrl: 'https://github.com/lucia-danielova'
    },
    stone2: {
        subtitle: 'Kameň 02 • Môj príbeh',
        title: 'O mne',
        description: 'Fascinuje ma premena grafického návrhu na živú, plne funkčnú aplikáciu. Pri každom projekte kladiem dôraz na čistotu kódu, autorskú estetiku a plynulý používateľský zážitok.',
        tags: ['Zmysel pre detail', 'Riešenie problémov', 'Autorský dizajn']
    },
    stone3: {
        subtitle: 'Kameň 03 • Technológie',
        title: 'Technické zručnosti',
        description: 'Ovládam moderné webové štandardy od sémantického HTML5 cez pokročilé animácie a responzívne layouty v CSS3 až po dynamickú logiku v čistom JavaScripte a vektorovú grafiku.',
        skills: [
            { name: 'HTML5 & Sémantická štruktúra', level: 95 },
            { name: 'CSS3, Flexbox, Grid & Animácie', level: 90 },
            { name: 'JavaScript (ES6+) & DOM Manipulácia', level: 82 },
            { name: 'Adobe Illustrator & SVG Grafika', level: 88 },
            { name: 'Git, GitHub Pages & VS Code', level: 85 }
        ],
        tags: ['HTML5', 'CSS3 / Grid / Flexbox', 'JavaScript (ES6+)', 'Git & GitHub', 'VS Code']
    },
    stone4: {
        subtitle: 'Kameň 04 • Ukážky mojej práce',
        title: 'Vybrané projekty',
        description: 'Prehľad mojich autorských projektov, v ktorých prepájam vlastnú grafiku, responzívny frontend a čistý JavaScript:',
        projects: [
            {
                name: 'Interaktívne portfólio',
                desc: 'Osobný web s ilustrovanou 16:9 scénou, animovanými kameňmi a glassmorphism rozhraním.',
                miniTags: ['Autorský dizajn', 'Responzívne weby', 'Čistý kód'],
                liveUrl: 'https://lucia-danielova.github.io/',
                codeUrl: 'https://github.com/lucia-danielova/lucia-danielova.github.io'
            },
            {
                name: 'Portfólio – Prototyp 2',
                desc: 'Alternatívny repozitár a prototyp interaktívnej mapy portfólia s vlastnými SVG prvkami.',
                miniTags: ['Autorský dizajn', 'SVG Grafika', 'Čistý kód'],
                liveUrl: 'https://lucia-danielova.github.io/portfolio2/',
                codeUrl: 'https://github.com/lucia-danielova/portfolio2'
            },
            {
                name: 'JS Kalkulátor & Aplikácie',
                desc: 'Praktické webové komponenty a aplikácie v čistom JavaScripte s dôrazom na moderné UI.',
                miniTags: ['JavaScript ES6+', 'CSS Grid', 'Čistý kód'],
                liveUrl: 'https://lucia-danielova.github.io/',
                codeUrl: 'https://github.com/lucia-danielova?tab=repositories'
            }
        ],
        tags: []
    },
    stone5: {
        subtitle: 'Kameň 05 • Vizuálna tvorba',
        title: 'Grafika & Ilustrácia',
        description: 'Vďaka práci vo vektorových a grafických nástrojoch si dokážem sama navrhnúť, vyrezať a optimalizovať originálne SVG a PNG podklady priamo pre potreby moderného webu.',
        tags: ['Adobe Illustrator', 'SVG optimalizácia', 'Typografia', 'Farebná kompozícia']
    },
    stone6: {
        subtitle: 'Kameň 06 • Prax a prístup',
        title: 'Pracovný proces',
        description: 'Od prvej skice v Illustratore cez rozvrhnutie komponentov vo VS Code až po finálne nasadenie na GitHub Pages dbám na to, aby bol výsledok rýchly, prístupný a vizuálne čistý.',
        tags: ['Responzívny dizajn', 'Optimalizácia výkonu', 'Čistá architektúra']
    },
    stone7: {
        subtitle: 'Kameň 07 • Neustály rast',
        title: 'Vzdelanie a kurzy',
        description: 'Svet webu sa neustále vyvíja, a preto sa sústavne vzdelávam v moderných frontendových postupoch, interaktívnych animáciách a prístupnosti webu (a11y).',
        tags: ['Frontend štandardy', 'Samoštúdium', 'Moderné UI trendy']
    },
    stone8: {
        subtitle: 'Kameň 08 • Budúcnosť',
        title: 'Moja vízia',
        description: 'Mojím cieľom je vytvárať digitálne produkty, ktoré nie sú len obyčajnými šablónami, ale zanechajú v návštevníkovi nezabudnuteľný vizuálny a interaktívny dojem.',
        tags: ['Inovácie', 'Imersívny web', 'Kreatívna spolupráca']
    },
    stone9: {
        subtitle: 'Kameň 09 • Spojme sa',
        title: 'Kontaktujte ma',
        description: 'Máte zaujímavý projekt, ponuku na spoluprácu alebo sa chcete len porozprávať o tvorbe webov? Napíšte mi e-mail alebo si skopírujte moju adresu jedným klikom!',
        tags: ['luciadanielova1@gmail.com', 'GitHub', 'Spolupráca'],
        actionText: '✉️ Napísať e-mail',
        actionUrl: 'mailto:luciadanielova1@gmail.com',
        copyEmail: 'luciadanielova1@gmail.com'
    }
};

// Stav objavených kameňov uložený v localStorage prehliadača
const STORAGE_KEY = 'luciaPortfolioVisitedStones';
const visitedStones = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
let currentStoneIndex = 0;

// DOM elementy
const stage = document.getElementById('stage');
const particlesContainer = document.getElementById('particles-container');
const mobileGrid = document.getElementById('mobile-grid');
const progressCounter = document.getElementById('progress-counter');
const toastEl = document.getElementById('toast-notification');

const modalOverlay = document.getElementById('modal-overlay');
const modalBox = document.getElementById('modal-box');
const modalSubtitle = document.getElementById('modal-subtitle');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const modalDynamicExtra = document.getElementById('modal-dynamic-extra');
const modalTags = document.getElementById('modal-tags');
const modalAction = document.getElementById('modal-action');
const modalStep = document.getElementById('modal-step');
const closeBtn = document.getElementById('close-btn');
const prevStoneBtn = document.getElementById('prev-stone-btn');
const nextStoneBtn = document.getElementById('next-stone-btn');

const overviewOverlay = document.getElementById('overview-overlay');
const openOverviewBtn = document.getElementById('open-overview-btn');
const closeOverviewBtn = document.getElementById('close-overview-btn');
const overviewList = document.getElementById('overview-list');
const resetProgressBtn = document.getElementById('reset-progress-btn');

const stoneRatio = 1.5;
const scaleMultiplier = 1.4;

/**
 * Zobrazenie krátkej plávajúcej správy (Toast notifikácia)
 */
function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add('show');
    setTimeout(() => {
        toastEl.classList.remove('show');
    }, 3200);
}

/**
 * Vytvorenie jemných magických svetlušiek nad scénou
 */
function createAmbientParticles() {
    if (!particlesContainer) return;
    particlesContainer.innerHTML = '';
    const count = 20;

    for (let i = 0; i < count; i++) {
        const dot = document.createElement('span');
        dot.className = 'firefly';
        const size = Math.random() * 5 + 3;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${Math.random() * 94 + 3}%`;
        dot.style.top = `${Math.random() * 85 + 10}%`;
        dot.style.animationDuration = `${Math.random() * 5 + 5}s`;
        dot.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(dot);
    }
}

/**
 * Aktualizácia počítadla a kariet po prečítaní kameňa
 */
function updateProgressUI() {
    progressCounter.textContent = `Objavené: ${visitedStones.size} / ${stoneConfig.length}`;
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...visitedStones]));

    document.querySelectorAll('[data-card-stone]').forEach(card => {
        const stoneId = card.getAttribute('data-card-stone');
        card.classList.toggle('is-visited', visitedStones.has(stoneId));
    });
}

/**
 * Vykreslenie všetkých 9 kameňov na scénu aj do Rýchleho/Mobilného prehľadu
 */
function renderPortfolio() {
    // Odstránime len staré tlačidlá kameňov, aby zostali svetlušky
    stage.querySelectorAll('.stone-btn').forEach(btn => btn.remove());
    overviewList.innerHTML = '';
    mobileGrid.innerHTML = '';

    stoneConfig.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'stone-btn';
        btn.id = `btn-${item.id}`;
        btn.setAttribute('aria-label', `${item.step}. ${item.label}`);

        const pixelWidth = item.size * scaleMultiplier;
        const pixelHeight = pixelWidth * stoneRatio;
        const widthPercent = (pixelWidth / 1920) * 100;
        const heightPercent = (pixelHeight / 1080) * 100;

        btn.style.width = `${widthPercent}%`;
        btn.style.height = `${heightPercent}%`;
        btn.style.left = `${item.left}%`;
        btn.style.bottom = `${item.bottom}%`;

        const divRotation = 90 + item.rotate;
        btn.style.setProperty('--rot', `${divRotation}deg`);
        btn.style.backgroundImage = `url('${item.img}'), url('kamen.svg'), url('kamenbezpozadia.png')`;

        if (visitedStones.has(item.id)) {
            btn.classList.add('visited');
        }

        const labelSpan = document.createElement('span');
        labelSpan.className = 'stone-label';
        labelSpan.textContent = item.label;
        labelSpan.style.transform = `rotate(${-divRotation}deg)`;
        btn.appendChild(labelSpan);

        btn.style.animation = `stoneAppear 0.6s ease-out ${index * 0.09}s forwards`;
        setTimeout(() => {
            btn.style.opacity = '1';
            btn.classList.add('is-floating');
        }, (index * 90) + 650);

        btn.addEventListener('click', () => openStoneModal(index));
        stage.appendChild(btn);

        const createOverviewCard = () => {
            const card = document.createElement('button');
            card.type = 'button';
            card.className = 'overview-card';
            card.setAttribute('data-card-stone', item.id);
            if (visitedStones.has(item.id)) {
                card.classList.add('is-visited');
            }
            card.innerHTML = `
                <span class="card-step">Kameň 0${item.step}</span>
                <span class="card-title">${item.label}</span>
            `;
            card.addEventListener('click', () => {
                closeOverviewModal();
                openStoneModal(index);
            });
            return card;
        };

        overviewList.appendChild(createOverviewCard());
        mobileGrid.appendChild(createOverviewCard());
    });

    updateProgressUI();
}

/**
 * Otvorenie modálneho okna pre vybraný kameň
 */
function openStoneModal(index) {
    currentStoneIndex = (index + stoneConfig.length) % stoneConfig.length;
    const stone = stoneConfig[currentStoneIndex];
    const data = portfolioContent[stone.id];

    modalSubtitle.textContent = data.subtitle;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.description;
    modalStep.textContent = `${stone.step} / ${stoneConfig.length}`;
    modalDynamicExtra.innerHTML = '';

    // 1. Ak ide o sekciu Vybrané projekty, prepneme okno do širokého 3-stĺpcového režimu
    if (data.projects && data.projects.length > 0) {
        modalBox.classList.add('modal-wide');
        const grid = document.createElement('div');
        grid.className = 'projects-showcase-grid';

        data.projects.forEach((proj, idx) => {
            const card = document.createElement('div');
            card.className = 'project-item-card';

            const miniTagsHtml = (proj.miniTags || [])
                .map(t => `<span class="project-mini-tag">${t}</span>`)
                .join('');

            card.innerHTML = `
                <div>
                    <div class="project-preview-box">
                        ${projectSvgPreviews[idx % projectSvgPreviews.length]}
                    </div>
                    <h3 class="project-item-title">${proj.name}</h3>
                    <p class="project-item-desc">${proj.desc}</p>
                    <div class="project-mini-tags">${miniTagsHtml}</div>
                </div>
                <div class="project-item-links">
                    <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn live">Živá ukážka</a>
                    <a href="${proj.codeUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn code">GitHub kód</a>
                </div>
            `;
            grid.appendChild(card);
        });

        modalDynamicExtra.appendChild(grid);
    } else {
        modalBox.classList.remove('modal-wide');
    }

    // 2. Ak ide o sekciu Zručnosti, vykreslíme animované progress bary
    if (data.skills && data.skills.length > 0) {
        const skillsWrapper = document.createElement('div');
        skillsWrapper.className = 'skills-bars-list';

        data.skills.forEach(skill => {
            const row = document.createElement('div');
            row.innerHTML = `
                <div class="skill-bar-top">
                    <span>${skill.name}</span>
                    <span>${skill.level}%</span>
                </div>
                <div class="skill-bar-track">
                    <div class="skill-bar-fill" data-level="${skill.level}%"></div>
                </div>
            `;
            skillsWrapper.appendChild(row);
        });

        modalDynamicExtra.appendChild(skillsWrapper);
        setTimeout(() => {
            skillsWrapper.querySelectorAll('.skill-bar-fill').forEach(bar => {
                bar.style.width = bar.getAttribute('data-level');
            });
        }, 60);
    }

    // 3. Vykreslenie štítkov (tags)
    modalTags.innerHTML = '';
    if (data.tags && data.tags.length > 0) {
        data.tags.forEach(tag => {
            const badge = document.createElement('span');
            badge.className = 'tag-badge';
            badge.textContent = tag;
            modalTags.appendChild(badge);
        });
    }

    // 4. Vykreslenie akčných tlačidiel + kopírovanie e-mailu
    modalAction.innerHTML = '';
    if (data.actionText && data.actionUrl) {
        const link = document.createElement('a');
        link.className = 'action-btn';
        link.href = data.actionUrl;
        if (!data.actionUrl.startsWith('mailto:')) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
        link.textContent = data.actionText;
        modalAction.appendChild(link);
    }

    if (data.copyEmail) {
        const copyBtn = document.createElement('button');
        copyBtn.type = 'button';
        copyBtn.className = 'action-btn secondary';
        copyBtn.textContent = '📋 Kopírovať e-mail';
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(data.copyEmail).then(() => {
                showToast(`E-mail ${data.copyEmail} bol skopírovaný do schránky!`);
            });
        });
        modalAction.appendChild(copyBtn);
    }

    // Označenie kameňa ako navštíveného
    const wasAlreadyComplete = visitedStones.size === stoneConfig.length;
    visitedStones.add(stone.id);
    const activeBtn = document.getElementById(`btn-${stone.id}`);
    if (activeBtn) activeBtn.classList.add('visited');
    updateProgressUI();

    if (!wasAlreadyComplete && visitedStones.size === stoneConfig.length) {
        showToast('🎉 Gratulujem! Objavili ste všetkých 9 kameňov portfólia.');
    }

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
}

function closeStoneModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
}

function closeOverviewModal() {
    overviewOverlay.classList.remove('active');
    overviewOverlay.setAttribute('aria-hidden', 'true');
}

// Ovládanie tlačidiel
closeBtn.addEventListener('click', closeStoneModal);
prevStoneBtn.addEventListener('click', () => openStoneModal(currentStoneIndex - 1));
nextStoneBtn.addEventListener('click', () => openStoneModal(currentStoneIndex + 1));

openOverviewBtn.addEventListener('click', () => {
    overviewOverlay.classList.add('active');
    overviewOverlay.setAttribute('aria-hidden', 'false');
});

closeOverviewBtn.addEventListener('click', closeOverviewModal);

resetProgressBtn.addEventListener('click', () => {
    visitedStones.clear();
    localStorage.removeItem(STORAGE_KEY);
    document.querySelectorAll('.stone-btn.visited').forEach(el => el.classList.remove('visited'));
    updateProgressUI();
    showToast('Postup objavovania bol vynulovaný.');
});

window.addEventListener('click', (event) => {
    if (event.target === modalOverlay) closeStoneModal();
    if (event.target === overviewOverlay) closeOverviewModal();
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeStoneModal();
        closeOverviewModal();
    } else if (modalOverlay.classList.contains('active')) {
        if (event.key === 'ArrowRight') openStoneModal(currentStoneIndex + 1);
        if (event.key === 'ArrowLeft') openStoneModal(currentStoneIndex - 1);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    createAmbientParticles();
    renderPortfolio();
});