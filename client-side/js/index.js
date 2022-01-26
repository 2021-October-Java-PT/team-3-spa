import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Home from "./components/Home"

buildPage();

function buildPage(){
    header();
    navContact();
    navHome();
    navAbout();
    
}
function header() {
    const headerElem = document.querySelector('.header');
    headerElem.innerHTML = Header();
  }
  function navHome() {
    const homeElem = document.querySelector('.nav-list__home');
    homeElem.addEventListener('click', () => {
      const app = document.querySelector('#app');
      app.innerHTML = Home();
    });
  }

function navContact() {
    const contactElem = document.querySelector('.nav-list__contact');
    contactElem.addEventListener('click', () => {
      const app = document.querySelector('#app');
      app.innerHTML = Contact();
    });
  }

function navAbout() {
  const aboutElem = document.querySelector(".nav-list__about")
  aboutElem.addEventListener('click',()=>{
    const app = document.querySelector('#app');
    app.innerHTML = About();
  })
}
