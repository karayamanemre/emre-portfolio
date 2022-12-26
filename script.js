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
    cardDesktopImage: 'img/cryptomarket-screenshot.png',
    cardMobileImage: 'img/cryptomarket-screenshot.png',
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
    cardDesktopImage: 'img/todolist-screenshot.png',
    cardMobileImage: 'img/todolist-screenshot.png',
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
    cardDesktopImage: 'img/kanban-screenshot.png',
    cardMobileImage: 'img/kanban-screenshot.png',
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
    cardDesktopImage: 'img/weather-screenshot.png',
    cardMobileImage: 'img/weather-screenshot.png',
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
  <div class="${portfolio[index].cardClass}">
    <div class="card-img card1">
      <img class="work-img mobile" src="${portfolio[index].cardMobileImage}" alt="">
      <img class="work-img desktop" src="${portfolio[index].cardDesktopImage}" alt="">
    </div>
    <div class="card-text">
      <h2 class="card-title">${portfolio[index].cardTitle}</h2>
      <ul class="card-details">
        <li class="company">${portfolio[index].company}</li>
        <li class="circle"><img src="img/circle.png" alt="circle"></li>
        <li class="job">${portfolio[index].job}</li>
        <li class="circle"><img src="img/circle.png" alt="circle"></li>
        <li class="year">${portfolio[index].year}</li>
      </ul>
      <p class="card-info">${portfolio[index].cardInfo}</p>
      <ul class="tags">
        <li class="tag">${portfolio[index].technologies[0]}</li>
        <li class="tag">${portfolio[index].technologies[1]}</li>
        <li class="tag">${portfolio[index].technologies[2]}</li>
      </ul>
      <button class="btn card-button" id="${[index]}">${portfolio[index].buttonText}</button>
    </div>
  </div>
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
        <div class="modal-header">
          <h2 class="modal-title">${portfolio[element.id].cardTitle}</h2>
          <img class="close" src="img/x-icon.png" alt="close">
        </div>
        <ul class="card-details">
          <li class="company">${portfolio[element.id].company}</li>
          <li class="circle"><img src="img/circle.png" alt="circle"></li>
          <li class="job">${portfolio[element.id].job}</li>
          <li class="circle"><img src="img/circle.png" alt="circle"></li>
          <li class="year">${portfolio[element.id].year}</li>
        </ul>
        <div class="modal-image">
        <img class="modal-img mobile" src="${portfolio[element.id].cardMobileImage}" alt="">
        <img class="modal-img desktop" src="${portfolio[element.id].cardDesktopImage}" alt="">
      </div>
        <div class="modal-texts">
          <p class="modal-info">${portfolio[element.id].modalInfo}</p>
          <div class="tag-btns">
            <ul class="modal-tags">
              <li class="tag">${portfolio[element.id].technologies[0]}</li>
              <li class="tag">${portfolio[element.id].technologies[1]}</li>
              <li class="tag">${portfolio[element.id].technologies[2]}</li>
            </ul>
            <ul class="modal-tags">
              <li class="github-tag tag">${portfolio[element.id].technologies[3]}</li>
            </ul>
            <div class="modal-btns">
              <div class="modal-hr">
                <a href="${portfolio[element.id].modalLiveLink}" target="_blank">
                  <button class="btn">See Live <img src="img/live-icon.svg" alt="live"></button>
                </a>
                <a href="${portfolio[element.id].modalSourceLink}" target="_blank">
                 <button class="btn">See Source <img src="img/github-icon.svg" alt="github"></button>
                </a>
              </div>
            </div>  
          <div>
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