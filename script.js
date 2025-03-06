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
  { title: 'Контентщик', salary: '10к мес' },
  { title: 'Закупщик', salary: '10к мес' },
  { title: 'Рекламщик', salary: '10к мес' },
  { title: 'Дизайнер', salary: '10к мес' },
  { title: 'Программист', salary: '10к мес' },
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
  showWorkPage(); // По умолчанию открываем страницу "Работа"
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

// Отображение страницы "Работа"
function showWorkPage() {
  content.innerHTML = `
    <div class="header">
      <h2>Вакансии</h2>
      <button class="blue-button">Разместить</button>
    </div>
    ${jobs.map(job => `
      <div class="item">
        <p>${job.title} - ${job.salary}</p>
        <button onclick="window.open('https://t.me/alexsti', '_blank')">Откликнуться</button>
      </div>
    `).join('')}
  `;
}

// Отображение страницы "Биржа"
function showMarketPage() {
  content.innerHTML = `
    <div class="header">
      <h2>Биржа</h2>
      <button class="blue-button">Разместить</button>
    </div>
    ${channels.map(channel => `
      <div class="item">
        <p>${channel.title} - ${channel.price}</p>
        <button onclick="window.open('https://t.me/alexsti', '_blank')">Купить</button>
      </div>
    `).join('')}
  `;
}

// Отображение страницы "Задачи"
function showTasksPage() {
  content.innerHTML = `
    <div class="header">
      <h2>Задачи</h2>
      <button class="blue-button">Разместить</button>
    </div>
    ${tasks.map(task => `
      <div class="item">
        <p>${task.title} - ${task.price}</p>
        <button onclick="window.open('https://t.me/alexsti', '_blank')">Откликнуться</button>
      </div>
    `).join('')}
  `;
}
