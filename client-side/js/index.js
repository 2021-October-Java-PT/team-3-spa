import About from "./components/About";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import TestImg from "./components/TestImg";
import apiHelpers from "./components/apiHelpers";

buildPage();

function buildPage() {
  header();
  footer();
  navContact();
  navHome();
  navActivities();
  navAbout();
  showPicture();
}
function header() {
  const headerElem = document.querySelector(".header");
  headerElem.innerHTML = Header();
}
function footer() {
  const footerElem = document.querySelector(".footer");
  footerElem.innerHTML = Footer();
}
function navHome() {
  const homeElem = document.querySelector(".nav-list__home");
  homeElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Home();
    showPicture();
  });
}

function navContact() {
  const contactElem = document.querySelector(".nav-list__contact");
  contactElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Contact();
  });
}

function navAbout() {
  const aboutElem = document.querySelector(".nav-list__about");
  aboutElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = About();
  });
}

function navActivities() {
  const activitiesElem = document.querySelector(".nav-list__activities");

  activitiesElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    apiHelpers.getRequest(
      " https://www.boredapi.com/api/activity",
      (activities) => {
        app.innerHTML = Activities(activities);
      }
    );
  });
}

// function renderActivities() {
//   const app = document.querySelector('#app');
//   app.addEventListener("click", (event)) => {
//     if (event.target.classList.contains("nav-list__activities")) {
//       apiHelpers.getRequest("http://www.boredapi.com/api/activity?type=recreational", (activity) => {
//         app.innerHTML=
//       })
//     }
//   }
// }

function showPicture() {
  const pictureLocation = document.querySelector(".content");
  apiHelpers.getRequest(
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/248008",
    (metObject) => {
      pictureLocation.innerHTML = TestImg(metObject);
    }
  );
}
