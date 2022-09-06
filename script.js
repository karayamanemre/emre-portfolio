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
    cardTitle: 'Tonic',
    cardDesktopImage: 'img/Snapshoot-Portfolio1.png',
    cardMobileImage: 'img/Snapshoot-Portfolio-Mobile1.png',
    company: 'CANOPY',
    job: 'Back End Dev',
    year: '2015',
    cardInfo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    htmlTag: 'html',
    cssTag: 'css',
    javascriptTag: 'javascript',
    githubTag: 'github',
    rubyTag: 'ruby',
    bootstrapTag: 'bootstrap',
    buttonText: 'See More',
    modalInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    modalSeeButtonText: 'See Live',
    modalSeeButtonIcon: '',
    modalSourceButtonText: 'See Source',
    modalSourceButtonIcon: '',
  },
  {
    cardClass: 'works-card card2 card-reverse',
    cardTitle: 'Multi-Post Stories',
    cardDesktopImage: 'img/Snapshoot-Portfolio2.png',
    cardMobileImage: 'img/Snapshoot-Portfolio-Mobile2.png',
    company: 'CANOPY',
    job: 'Back End Dev',
    year: '2015',
    cardInfo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    htmlTag: 'html',
    cssTag: 'css',
    javascriptTag: 'javascript',
    githubTag: 'github',
    rubyTag: 'ruby',
    bootstrapTag: 'bootstrap',
    buttonText: 'See More',
    modalInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    modalSeeButtonText: 'See Live',
    modalSeeButtonIcon: '',
    modalSourceButtonText: 'See Source',
    modalSourceButtonIcon: '',
  },
  {
    cardClass: 'works-card card3',
    cardTitle: 'Tonic',
    cardDesktopImage: 'img/Snapshoot-Portfolio3.png',
    cardMobileImage: 'img/Snapshoot-Portfolio-Mobile3.png',
    company: 'CANOPY',
    job: 'Back End Dev',
    year: '2015',
    cardInfo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    htmlTag: 'html',
    cssTag: 'css',
    javascriptTag: 'javascript',
    githubTag: 'github',
    rubyTag: 'ruby',
    bootstrapTag: 'bootstrap',
    buttonText: 'See More',
    modalInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    modalSeeButtonText: 'See Live',
    modalSeeButtonIcon: '',
    modalSourceButtonText: 'See Source',
    modalSourceButtonIcon: '',
  },
  {
    cardClass: 'works-card card4 card-reverse',
    cardTitle: 'Multi-Post Stories',
    cardDesktopImage: 'img/Snapshoot-Portfolio4.png',
    cardMobileImage: 'img/Snapshoot-Portfolio-Mobile4.png',
    company: 'CANOPY',
    job: 'Back End Dev',
    year: '2015',
    cardInfo: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    htmlTag: 'html',
    cssTag: 'css',
    javascriptTag: 'javascript',
    githubTag: 'github',
    rubyTag: 'ruby',
    bootstrapTag: 'bootstrap',
    buttonText: 'See More',
    modalInfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    modalSeeButtonText: 'See Live',
    modalSeeButtonIcon: '',
    modalSourceButtonText: 'See Source',
    modalSourceButtonIcon: '',
  }
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
        <li class="tag">${portfolio[index].htmlTag}</li>
        <li class="tag">${portfolio[index].cssTag}</li>
        <li class="tag">${portfolio[index].javascriptTag}</li>
      </ul>
      <button class="btn card-button" id="${[index]}">${portfolio[index].buttonText}</button>
    </div>
  </div>
 `;
});