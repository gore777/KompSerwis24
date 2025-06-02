const translations = {
    pl: {
        mainTitle: "KompSerwis24",
        subtitle: "Szybka i skuteczna naprawa Twojego komputera",
        servicesTitle: "Nasze usługi",
        servicesList: [
            "Diagnoza i naprawa sprzętu",
            "Usuwanie wirusów i złośliwego oprogramowania",
            "Instalacja systemu operacyjnego",
            "Modernizacja komputera",
            "Odzyskiwanie danych"
        ],
        pricesTitle: "Cennik",
        pricesList: [
            "Diagnoza: <span id=\"price-diagnosis\">od 60 zł</span>",
            "Usuwanie wirusów: <span id=\"price-virus\">od 80 zł</span>",
            "Instalacja systemu: <span id=\"price-os\">od 100 zł</span>",
            "Modernizacja: <span id=\"price-upgrade\">od 70 zł</span>",
            "Odzyskiwanie danych: <span id=\"price-recovery\">od 120 zł</span>"
        ],
        reviewsTitle: "Opinie klientów",
        reviewsList: [
            '"Szybko i profesjonalnie!" – Anna K.',
            '"Mój komputer działa jak nowy." – Piotr W.',
            '"Polecam każdemu!" – Marek Z.'
        ],
        nav: {
            home: "Główna",
            services: "Usługi",
            prices: "Cennik",
            reviews: "Opinie"
        },
        contactTitle: "Kontakt",
        contactDesc: "Zadzwoń lub napisz do nas, aby umówić się na wizytę!",
        phone: "+48 123 456 789",
        email: "serwis@naprawapc.pl",
        footerText: "© 2025 KompSerwis24. Wszystkie prawa zastrzeżone."
    },
    ru: {
        mainTitle: "KompSerwis24",
        subtitle: "Быстрый и эффективный ремонт вашего ПК",
        servicesTitle: "Наши услуги",
        servicesList: [
            "Диагностика (вступительная) - 0zł",
            "Установка Windows с форматированием - 70zł",
            "Установка Windows с сохранением данных - 100zł",
            "Замена диска + скачивание системы - 100zł",
            "Чистка от пыли + замена термопасты - 85zł",
            "Замена/установка SSD/HDD/NVMe - 40zł",
            "Сборка ПК из комплектующих клиента - od 120zł do 200zł",
            "Замена/установка видеокарты в ПК - 80zł",
            "Замена/установка RAM - 80zł",
            "Замена материнской платы - 80zł",
            "Замена процессора + термопасты - 80zł",
            "Замена блока питания - 80zł",
            "Замена вентилятора в ПК - 60zł",
            "Обновление BIOS / прошивка - 50zł",
            "Установка и настройка драйверов - 50zł",
            "Прочие услуги (договорные)"
        ],
        pricesTitle: "Цены",
        pricesList: [
            "Диагностика (вступительная): <span>0 zł</span>",
            "Установка Windows с форматированием: <span>70 zł</span>",
            "Установка Windows с сохранением данных: <span>100 zł</span>",
            "Замена диска + скачивание системы: <span>100 zł</span>",
            "Чистка от пыли + замена термопасты: <span>85 zł</span>",
            "Замена/установка SSD/HDD/NVMe: <span>40 zł</span>",
            "Сборка ПК из комплектующих клиента: <span>od 120 zł do 200 zł</span>",
            "Замена/установка видеокарты в ПК: <span>80 zł</span>",
            "Замена/установка RAM: <span>80 zł</span>",
            "Замена материнской платы: <span>80 zł</span>",
            "Замена процессора + термопасты: <span>80 zł</span>",
            "Замена блока питания: <span>80 zł</span>",
            "Замена вентилятора в ПК: <span>60 zł</span>",
            "Обновление BIOS / прошивка: <span>50 zł</span>",
            "Установка и настройка драйверов: <span>50 zł</span>",
            "Прочие услуги: <span>договорные</span>"
        ],
        reviewsTitle: "Отзывы клиентов",
        reviewsList: [
            '"Быстро и профессионально!" – Анна К."',
            '"Компьютер работает как новый." – Пётр В."',
            '"Рекомендую всем!" – Марек З.'
        ],
        nav: {
            home: "Главная",
            services: "Услуги",
            prices: "Цены",
            reviews: "Отзывы"
        },
        contactTitle: "Контакты",
        contactDesc: "Позвоните или напишите нам, чтобы записаться на визит!",
        phone: "+48 123 456 789",
        email: "serwis@naprawapc.pl",
        footerText: "© 2025 KompSerwis24. Все права защищены."
    }
};

function setLanguage(lang) {
    const t = translations[lang];
    document.getElementById('main-title').textContent = t.mainTitle;
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('services-title').textContent = t.servicesTitle;
    const servicesList = document.getElementById('services-list');
    servicesList.innerHTML = '';
    t.servicesList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        servicesList.appendChild(li);
    });
    document.getElementById('prices-title').textContent = t.pricesTitle;
    const pricesList = document.getElementById('prices-list');
    pricesList.innerHTML = '';
    t.pricesList.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item;
        pricesList.appendChild(li);
    });
    document.getElementById('reviews-title').textContent = t.reviewsTitle;
    const reviewsList = document.getElementById('reviews-list');
    reviewsList.innerHTML = '';
    t.reviewsList.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item;
        reviewsList.appendChild(li);
    });
    document.getElementById('contact-title').textContent = t.contactTitle;
    document.getElementById('contact-desc').textContent = t.contactDesc;
    document.getElementById('phone').textContent = t.phone;
    document.getElementById('email').textContent = t.email;
    document.getElementById('footer-text').textContent = t.footerText;
    document.getElementById('nav-home').textContent = t.nav.home;
    document.getElementById('nav-services').textContent = t.nav.services;
    document.getElementById('nav-prices').textContent = t.nav.prices;
    document.getElementById('nav-reviews').textContent = t.nav.reviews;
    document.documentElement.lang = lang;
}

// Добавим функцию для показа только одной секции ("страницы")
function showSection(sectionId) {
    const sections = ['home', 'services', 'prices', 'reviews', 'contact'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = (id === sectionId) ? 'block' : 'none';
        }
    });
}

// Навесим обработчики на навигацию
['nav-home', 'nav-services', 'nav-prices', 'nav-reviews'].forEach((navId, idx) => {
    document.getElementById(navId).addEventListener('click', function(e) {
        e.preventDefault();
        showSection(['home', 'services', 'prices', 'reviews'][idx]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

document.getElementById('pl-btn').addEventListener('click', () => setLanguage('pl'));
document.getElementById('ru-btn').addEventListener('click', () => setLanguage('ru'));

// Показываем только главную при загрузке
showSection('home');

// Set default language
setLanguage('pl');

// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(current === 'light' ? 'dark' : 'light');
}

themeToggle.addEventListener('click', toggleTheme);

// Set theme on load
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);
