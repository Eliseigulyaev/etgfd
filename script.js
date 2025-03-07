// Элементы страниц
const welcomePage = document.getElementById('welcomePage');
const mainPage = document.getElementById('mainPage');
const startButton = document.getElementById('startButton');
const content = document.getElementById('content');

// Нижние кнопки
const workButton = document.getElementById('workButton');
const marketButton = document.getElementById('marketButton');
const tasksButton = document.getElementById('tasksButton');

// Данные для страниц
const jobs = [
  { id: 1, title: 'Контентщик', salary: '10 000₽' },
  { id: 2, title: 'Закупщик', salary: '10 000₽' },
  { id: 3, title: 'Рекламщик', salary: '10 000₽' },
  { id: 4, title: 'Дизайнер', salary: '10 000₽' },
  { id: 5, title: 'Программист', salary: '10 000₽' },
];

const channels = [
  { id: 1, title: 'Канал 1', price: '1000₽' },
  { id: 2, title: 'Канал 2', price: '2000₽' },
  { id: 3, title: 'Канал 3', price: '3000₽' },
];

const tasks = [
  { id: 1, title: 'Написать статью', price: '500₽' },
  { id: 2, title: 'Создать логотип', price: '1000₽' },
  { id: 3, title: 'Разработать сайт', price: '5000₽' },
];

// Избранное
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Переход на главный экран
startButton.addEventListener('click', () => {
  welcomePage.classList.add('hidden'); // Плавное исчезновение приветственной страницы
  mainPage.classList.add('visible');   // Плавное появление главной страницы
  showWorkPage(); // По умолчанию открываем страницу "РАБОТА"
});

// Обработчики для нижних кнопок
workButton.addEventListener('click', () => {
  moveButton(workButton);
  showWorkPage();
});

marketButton.addEventListener('click', () => {
  moveButton(marketButton);
  showMarketPage();
});

tasksButton.addEventListener('click', () => {
  moveButton(tasksButton);
  showTasksPage();
});

// Анимация кнопок
function moveButton(activeButton) {
  const buttons = [workButton, marketButton, tasksButton];
  buttons.forEach(button => button.classList.remove('active'));
  activeButton.classList.add('active');
}

// Отображение страницы "РАБОТА"
function showWorkPage() {
  content.innerHTML = `
    <div class="header">
      <h2>Вакансии</h2>
      <button class="blue-button">Разместить</button>
    </div>
    <div class="menu">
      <button onclick="showFavorites()">Избранное</button>
      <button class="blue-button">Фильтр</button>
      <div class="search">
        🔍
        <input type="text" placeholder="Поиск вакансий">
      </div>
    </div>
    ${jobs.map(job => `
      <div class="item">
        <button class="heart-btn ${favorites.includes(job.id) ? 'active' : ''}" data-id="${job.id}">♡</button>
        <p>${job.title} ${job.salary}</p>
        <button onclick="window.open('https://t.me/alexsti', '_blank')">Откликнуться</button>
      </div>
    `).join('')}
  `;
  addHeartListeners();
}

// Отображение страницы "БИРЖА"
function showMarketPage() {
  content.innerHTML = `
    <div class="header">
      <h2>Биржа</h2>
      <button class="blue-button">Разместить</button>
    </div>
    <div class="menu">
      <button onclick="showFavorites()">Избранное</button>
      <button class="blue-button">Фильтр</button>
      <div class="search">
        🔍
        <input type="text" placeholder="Поиск каналов">
      </div>
    </div>
    ${channels.map(channel => `
      <div class="item">
        <button class="heart-btn ${favorites.includes(channel.id) ? 'active' : ''}" data-id="${channel.id}">♡</button>
        <p>${channel.title} ${channel.price}</p>
        <button onclick="window.open('https://t.me/alexsti', '_blank')">Купить</button>
      </div>
    `).join('')}
  `;
  addHeartListeners();
}

// Отображение страницы "ЗАДАЧИ"
function showTasksPage() {
  content.innerHTML = `
    <div class="header">
      <h2>Задачи</h2>
      <button class="blue-button">Разместить</button>
    </div>
    <div class="menu">
      <button onclick="showFavorites()">Избранное</button>
      <button class="blue-button">Фильтр</button>
      <div class="search">
        🔍
        <input type="text" placeholder="Поиск задач">
      </div>
    </div>
    ${tasks.map(task => `
      <div class="item">
        <button class="heart-btn ${favorites.includes(task.id) ? 'active' : ''}" data-id="${task.id}">♡</button>
        <p>${task.title} ${task.price}</p>
        <button onclick="window.open('https://t.me/alexsti', '_blank')">Откликнуться</button>
      </div>
    `).join('')}
  `;
  addHeartListeners();
}

// Обработчик для сердечек
function addHeartListeners() {
  const hearts = document.querySelectorAll('.heart-btn');
  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      const id = heart.dataset.id;
      heart.classList.toggle('active');
      if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
      } else {
        favorites.push(id);
      }
      localStorage.setItem('favorites', JSON.stringify(favorites));
    });
  });
}

// Показать избранное
function showFavorites() {
  const favoriteItems = [...jobs, ...channels, ...tasks].filter(item => favorites.includes(item.id));
  content.innerHTML = `
    <div class="header">
      <h2>Избранное</h2>
      <button class="blue-button" onclick="showWorkPage()">Назад</button>
    </div>
    ${favoriteItems.map(item => `
      <div class="item">
        <button class="heart-btn active" data-id="${item.id}">♡</button>
        <p>${item.title} ${item.salary || item.price}</p>
        <button onclick="window.open('https://t.me/alexsti', '_blank')">${item.salary ? 'Откликнуться' : 'Купить'}</button>
      </div>
    `).join('')}
  `;
  addHeartListeners();
}
