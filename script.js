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
  { title: 'Контентщик', salary: '10 000₽' },
  { title: 'Закупщик', salary: '10 000₽' },
  { title: 'Рекламщик', salary: '10 000₽' },
  { title: 'Дизайнер', salary: '10 000₽' },
  { title: 'Программист', salary: '10 000₽' },
];

const channels = [
  { title: 'Канал 1', price: '1000₽' },
  { title: 'Канал 2', price: '2000₽' },
  { title: 'Канал 3', price: '3000₽' },
];

const tasks = [
  { title: 'Написать статью', price: '500₽' },
  { title: 'Создать логотип', price: '1000₽' },
  { title: 'Разработать сайт', price: '5000₽' },
];

// Переход на главный экран
startButton.addEventListener('click', () => {
  welcomePage.classList.add('hidden');
  mainPage.classList.remove('hidden');
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
      <button>Избранное</button>
      <button class="blue-button">Фильтр</button>
      <div class="search">
        🔍
        <input type="text" placeholder="Поиск вакансий">
      </div>
    </div>
    ${jobs.map(job => `
      <div class="item">
        <span class="heart">♡</span>
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
      <button>Избранное</button>
      <button class="blue-button">Фильтр</button>
      <div class="search">
        🔍
        <input type="text" placeholder="Поиск каналов">
      </div>
    </div>
    ${channels.map(channel => `
      <div class="item">
        <span class="heart">♡</span>
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
      <button>Избранное</button>
      <button class="blue-button">Фильтр</button>
      <div class="search">
        🔍
        <input type="text" placeholder="Поиск задач">
      </div>
    </div>
    ${tasks.map(task => `
      <div class="item">
        <span class="heart">♡</span>
        <p>${task.title} ${task.price}</p>
        <button onclick="window.open('https://t.me/alexsti', '_blank')">Откликнуться</button>
      </div>
    `).join('')}
  `;
  addHeartListeners();
}

// Обработчик для сердечек
function addHeartListeners() {
  const hearts = document.querySelectorAll('.heart');
  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      heart.classList.toggle('active');
    });
  });
}
