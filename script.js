// Скрипт для модального вікна та інтерактивності турів

const modal = document.getElementById('tourModal');
const closeBtn = document.querySelector('.close-modal-btn');
const modalTitle = document.getElementById('modalTitle');
const modalFact = document.getElementById('modalFact');
const modalDays = document.getElementById('modalDays');
const modalPrice = document.getElementById('modalPrice');
const formSelect = document.getElementById('formSelect');
const modalBookBtn = document.getElementById('modalBookBtn');

// Відкриття вікна при натисканні на "Детальніше"
document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', (e) => {
        // Отримуємо дані з картки, по якій клікнули
        const card = e.target.closest('.tour-card');
        const country = card.getAttribute('data-country');
        const fact = card.getAttribute('data-fact');
        const days = card.getAttribute('data-days');
        const price = card.getAttribute('data-price');

        // Заповнюємо поп-ап даними
        modalTitle.innerText = country;
        modalFact.innerText = fact;
        modalDays.innerText = days;
        modalPrice.innerText = price;

        // Показуємо поп-ап
        modal.classList.add('active');
    });
});

// Закриття вікна через хрестик
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Закриття вікна через клік по фону
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Кнопка "Хочу в цей тур" всередині вікна
modalBookBtn.addEventListener('click', () => {
    const currentCountry = modalTitle.innerText;
    
    // Автоматично вибираємо цю країну в списку форми знизу
    formSelect.value = currentCountry;
    
    // Закриваємо модалку
    modal.classList.remove('active');
    
    // Плавно скролимо до форми бронювання
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Повідомлення при відправці форми
document.getElementById('mainForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Дякуємо! Ваш запит надіслано. Менеджер UNIVERSAL TRAVEL зв\'яжеться з вами найближчим часом!');
    e.target.reset();
});