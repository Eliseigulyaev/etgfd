// Элементы страниц
const welcomePage = document.getElementById('welcomePage');
const mainPage = document.getElementById('mainPage');
const startButton = document.getElementById('startButton');
const content = document.getElementById('content');

// Нижние кнопки
const workButton = document.getElementById('workButton');
const marketButton = document.getElementById('marketButton');
const tasksButton = document.getElementById('tasksButton');

// Переход на главный экран
startButton.addEventListener('click', () => {
  welcomePage.style.display = 'none'; // Полностью скрываем начальную страницу
  mainPage.style.display = 'block'; // Показываем главную страницу
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

// Данные для страниц
const jobs = [
  { id: 1, title: 'Контентщик', salary: '10 000₽' },
  { id: 2, title: 'Закупщик', salary: '10 000₽' },
  { id: 3, title: 'Рекламщик', salary: '10 000₽' },
];

// Отображение страницы "РАБОТА"
function showWorkPage() {
  content.innerHTML = `
    <div class="header">
      <h2>Вакансии</h2>
    </div>
    ${jobs.map(job => `
      <div class="item">
        <p>${job.title} ${job.salary}</p>
      </div>
    `).join('')}
  `;
}

// Отображение страницы "БИРЖА"
function showMarketPage() {
  content.innerHTML = `<h2>Биржа</h2>`;
}

// Отображение страницы "ЗАДАЧИ"
function showTasksPage() {
  content.innerHTML = `<h2>Задачи</h2>`;
}
