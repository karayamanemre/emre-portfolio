const body = document.querySelector('body');
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const navItems = [nav1, nav2, nav3];

function toggleNav() {
  menuBars.classList.toggle('change');
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
  } else {
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
  }
  body.classList.toggle('overflow');
}

menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});

const portfolio = [
  {
    cardClass: 'works-card card1',
    cardTitle: 'Crypto Market App',
    cardImage: 'assets/portfolio/cryptomarket-screenshot.png',
    company: 'Microverse',
    job: 'Front-End',
    year: '2022',
    cardInfo: 'Crypto Market is a SPA that allow users to check live prices of cryptocurrencies. Built with React and CoinGecko API.',
    technologies: ['html', 'css', 'react', 'CoinGeckoAPI'],
    buttonText: 'See More',
    modalInfo: 'Crypto Market is a SPA that allow users to check live prices of cryptocurrencies. Built with React and CoinGecko API.',
    modalSeeButtonText: 'See Live',
    modalSeeButtonIcon: '',
    modalSourceButtonText: 'See Source',
    modalSourceButtonIcon: '',
    modalLiveLink: 'https://cryptomarketapp-karayamanemre.netlify.app/',
    modalSourceLink: 'https://github.com/karayamanemre/crypto-market-app',
  },
  {
    cardClass: 'works-card card2 card-reverse',
        cardTitle: 'To Do List',
    cardImage: 'assets/portfolio/todolist-screenshot.png',
    company: 'Microverse',
    job: 'Front-End',
    year: '2022',
    cardInfo: 'A minimal "To-do list" app that helps to organize your day. It simply creates a list of the tasks you have to complete along with the option to check them off.',
    technologies: ['html', 'css', 'javascript', 'webpack'],
    buttonText: 'See More',
    modalInfo: 'A minimal "To-do list" app that helps to organize your day. It simply creates a list of the tasks you have to complete along with the option to check them off. Inspired by the minimalist website. That website is already offline but you can still play with thanks to <a href="https://web.archive.org/web/20180320194056/http://www.getminimalist.com:80/" target="_blank">web.archive.org.</a>',
    modalSeeButtonText: 'See Live',
    modalSeeButtonIcon: '',
    modalSourceButtonText: 'See Source',
    modalSourceButtonIcon: '',
    modalLiveLink: 'https://karayamanemre.github.io/to-do-list/dist/',
    modalSourceLink: 'https://github.com/karayamanemre/to-do-list',
  },
  {
    cardClass: 'works-card card3',
    cardTitle: 'Kanban Board',
    cardImage: 'assets/portfolio/kanban-screenshot.png',
    company: 'Freelance',
    job: 'Front-End',
    year: '2022',
    cardInfo: 'Simple Kanban Board built with Vanilla JavaScript.',
    technologies: ['html', 'css', 'javascript', 'localstorage'],
    buttonText: 'See More',
    modalInfo: 'Simple Kanban Board built with Vanilla JavaScript. You can add, drag, drop, and delete items from the board and save it using the local storage.',
    modalSeeButtonText: 'See Live',
    modalSeeButtonIcon: '',
    modalSourceButtonText: 'See Source',
    modalSourceButtonIcon: '',
    modalLiveLink: 'https://karayamanemre.github.io/kanban-board/',
    modalSourceLink: 'https://github.com/karayamanemre/kanban-board',
  },
  {
    cardClass: 'works-card card4 card-reverse',
    cardTitle: 'Weather App',
    cardImage: 'assets/portfolio/weather-screenshot.png',
    company: 'Freelance',
    job: 'Front-End',
    year: '2022',
    cardInfo: 'A weather app that pulls weather data from the OpenWeatherMap API to allow users to search for and view the forecast in cities worldwide.',
    technologies: ['html', 'css', 'javascript', 'openweatherAPI'],
    buttonText: 'See More',
    modalInfo: 'A weather app that pulls weather data from the OpenWeatherMap API to allow users to search for and view the forecast in cities worldwide. Background changes according to weather. Built with JavaScript.',
    modalSeeButtonText: 'See Live',
    modalSeeButtonIcon: '',
    modalSourceButtonText: 'See Source',
    modalSourceButtonIcon: '',
    modalLiveLink: 'https://karayamanemre.github.io/weather-app/',
    modalSourceLink: 'https://github.com/karayamanemre/weather-app',
  },
  {
    cardClass: 'works-card card4 card-reverse',
    cardTitle: 'Weather App',
    cardImage: 'assets/portfolio/weather-screenshot.png',
    company: 'Freelance',
    job: 'Front-End',
    year: '2022',
    cardInfo: 'A weather app that pulls weather data from the OpenWeatherMap API to allow users to search for and view the forecast in cities worldwide.',
    technologies: ['html', 'css', 'javascript', 'openweatherAPI'],
    buttonText: 'See More',
    modalInfo: 'A weather app that pulls weather data from the OpenWeatherMap API to allow users to search for and view the forecast in cities worldwide. Background changes according to weather. Built with JavaScript.',
    modalSeeButtonText: 'See Live',
    modalSeeButtonIcon: '',
    modalSourceButtonText: 'See Source',
    modalSourceButtonIcon: '',
    modalLiveLink: 'https://karayamanemre.github.io/weather-app/',
    modalSourceLink: 'https://github.com/karayamanemre/weather-app',
  },
  {
    cardClass: 'works-card card4 card-reverse',
    cardTitle: 'Weather App',
    cardImage: 'assets/portfolio/weather-screenshot.png',
    company: 'Freelance',
    job: 'Front-End',
    year: '2022',
    cardInfo: 'A weather app that pulls weather data from the OpenWeatherMap API to allow users to search for and view the forecast in cities worldwide.',
    technologies: ['html', 'css', 'javascript', 'openweatherAPI'],
    buttonText: 'See More',
    modalInfo: 'A weather app that pulls weather data from the OpenWeatherMap API to allow users to search for and view the forecast in cities worldwide. Background changes according to weather. Built with JavaScript.',
    modalSeeButtonText: 'See Live',
    modalSeeButtonIcon: '',
    modalSourceButtonText: 'See Source',
    modalSourceButtonIcon: '',
    modalLiveLink: 'https://karayamanemre.github.io/weather-app/',
    modalSourceLink: 'https://github.com/karayamanemre/weather-app',
  },
];

const portfolioSection = document.getElementById('portfolio');

Array.from(portfolioSection.children).forEach((child, index) => {
  child.innerHTML = `
    <img class='card-img' src="${portfolio[index].cardImage}" alt="">
    <h2 class="card-title">${portfolio[index].cardTitle}</h2>
    <ul class="card-details">
      <li class="company">${portfolio[index].company}</li>
      <li class="circle"><img src="assets/icons/circle.png" alt="circle"></li>
      <li class="job">${portfolio[index].job}</li>
      <li class="circle"><img src="assets/icons/circle.png" alt="circle"></li>
      <li class="year">${portfolio[index].year}</li>
    </ul>
    <p class="card-info">${portfolio[index].cardInfo}</p>
    <ul class="tags">
      <li class="tag">${portfolio[index].technologies[0]}</li>
      <li class="tag">${portfolio[index].technologies[1]}</li>
      <li class="tag">${portfolio[index].technologies[2]}</li>
    </ul>
    <button class="btn card-button" id="${[index]}">${portfolio[index].buttonText}</button>
 `;
});

const openModal = document.querySelectorAll('.card-button');
openModal.forEach((element) => {
  element.addEventListener('click', () => {
    body.classList.toggle('overflow');
    const modalWindow = document.createElement('section');
    modalWindow.classList.add('modal-window');
    modalWindow.innerHTML = `
    <div class="modal">
      <img class="close" src="assets/icons/x-icon.png" alt="close">
      <h2 class="modal-title">${portfolio[element.id].cardTitle}</h2>
      <ul class="card-details">
        <li class="company">${portfolio[element.id].company}</li>
        <li class="circle"><img src="assets/icons/circle.png" alt="circle"></li>
        <li class="job">${portfolio[element.id].job}</li>
        <li class="circle"><img src="assets/icons/circle.png" alt="circle"></li>
        <li class="year">${portfolio[element.id].year}</li>
      </ul>
      <img class="modal-img" src="${portfolio[element.id].cardImage}" alt="">
      <p class="modal-info">${portfolio[element.id].modalInfo}</p>
      <ul class="modal-tags">
        <li class="tag">${portfolio[element.id].technologies[0]}</li>
        <li class="tag">${portfolio[element.id].technologies[1]}</li>
        <li class="tag">${portfolio[element.id].technologies[2]}</li>
        <li class="tag">${portfolio[element.id].technologies[3]}</li>
      </ul>
      <div class="modal-btns">
        <a href="${portfolio[element.id].modalLiveLink}" target="_blank">
          <button class="btn">
          See Live
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" fill="#172a4d"/>
          </svg>
          </button>
        </a>
        <a href="${portfolio[element.id].modalSourceLink}" target="_blank">
          <button class="btn">See Source
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="#172a4d"/>
          </svg>
        </button>
        </a>
      </div>  
    </div>
    `;
    document.body.appendChild(modalWindow);
    window.addEventListener('click', (e) => (e.target === modalWindow ? (modalWindow.classList.add('hidden'), body.classList.toggle('overflow')) : false));
    const closeModal = document.querySelectorAll('.close');
    closeModal.forEach((el) => {
      el.addEventListener('click', () => {
        body.classList.toggle('overflow');
        modalWindow.classList.add('hidden');
      });
    });
  });
});

const form = document.getElementById('form');
const userName = document.getElementById('contact-name');
const email = document.getElementById('contact-email');
const message = document.getElementById('contact-message');
const error = document.getElementById('error-message');

error.style.visibility = 'hidden';

function formValidate(event) {
  if (email.value !== email.value.toLowerCase()) {
    error.style.visibility = 'visible';
    error.innerHTML = 'Please enter your email address in lowercase.';
    event.preventDefault();
  } else {
    error.style.visibility = 'hidden';
  }
}

form.addEventListener('submit', formValidate);

function storeData() {
  const user = {
    UserName: userName.value,
    UserEmail: email.value,
    UserText: message.value,
  };
  localStorage.setItem('user', JSON.stringify(user));
}

userName.addEventListener('focusout', storeData);
email.addEventListener('focusout', storeData);
message.addEventListener('focusout', storeData);

const data = JSON.parse(localStorage.getItem('user'));

if (data) {
  userName.value = data.UserName;
  email.value = data.UserEmail;
  message.value = data.UserText;
}