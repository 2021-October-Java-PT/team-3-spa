import About from "./components/About";
import Activities from "./components/Activities";
import ActivityGenerator from "./components/ActivityGenerator";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home"
import MarineLife from "./components/MarineLife";
import TestImg from "./components/TestImg";
import apiHelpers from "./components/apiHelpers";

buildPage();

function buildPage() {
  home();
  header();
  navContact();
  navHome();
  navMarineLife();
  navActivities();
  navAbout();
  showPicture();
  navGames();
}

function home(){
  const homeElem = document.querySelector(".nav-list__home");
  const app = document.querySelector("#app");
  app.innerHTML = Home();
  showPicture();
}

function header() {
  const headerElem = document.querySelector(".header");
  headerElem.innerHTML = Header();
}

function navHome() {
  const homeElem = document.querySelector(".nav-list__home");
  homeElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Home();
    showPicture();
  });
}

function navMarineLife() {
  const marineLifeElem = document.querySelector(".nav-list__marineLife");
  marineLifeElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    console.log('firing')
    app.innerHTML = MarineLife();
    marineLifePopulator();
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

function navGames() {
  const gameElem = document.querySelector(".nav-list__game");
  gameElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    crud.getRequest('http://localhost:8080/game-resources', games => {
      app.innerHTML = Games(games);
    })
    
  });
}


function navActivities() {
  const app = document.querySelector("#app");
  const activitiesElem = document.querySelector(".nav-list__activities");
  activitiesElem.addEventListener("click", () => {
    app.innerHTML = Activities();
  });
  activityRandomizer();
}

function activityRandomizer() {
  const app = document.querySelector("#app");
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("cooking-button")) {
      apiHelpers.getRequest(
        "https://www.boredapi.com/api/activity?type=cooking",
        (boredObj) => {
          app.innerHTML = ActivityGenerator(boredObj);
        }
      );
    }

    if (event.target.classList.contains("education-button")) {
      apiHelpers.getRequest(
        "https://www.boredapi.com/api/activity?type=education&price=0",
        (boredObj) => {
          app.innerHTML = ActivityGenerator(boredObj);
        }
      );
    }

    if (event.target.classList.contains("music-button")) {
      apiHelpers.getRequest(
        "https://www.boredapi.com/api/activity?type=music&price=0",
        (boredObj) => {
          app.innerHTML = ActivityGenerator(boredObj);
        }
      );
    }

    if (event.target.classList.contains("recreational-button")) {
      apiHelpers.getRequest(
        "https://www.boredapi.com/api/activity?type=recreational&price=0",
        (boredObj) => {
          app.innerHTML = ActivityGenerator(boredObj);
        }
      );
    }

    if (event.target.classList.contains("relaxation-button")) {
      apiHelpers.getRequest(
        "https://www.boredapi.com/api/activity?type=relaxation&price=0",
        (boredObj) => {
          app.innerHTML = ActivityGenerator(boredObj);
        }
      );
    }

    if (event.target.classList.contains("social-button")) {
      apiHelpers.getRequest(
        "https://www.boredapi.com/api/activity?type=social&price=0",
        (boredObj) => {
          app.innerHTML = ActivityGenerator(boredObj);
        }
      );
    }
    
  });
  activitiesRefresh();
  randomizeAgain();
}

function activitiesRefresh() {
  const app = document.querySelector("#app");
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("reset-activities")) {
      app.innerHTML = Activities();
    }
  });
}

function randomizeAgain() {
  const app = document.querySelector("#app");
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("reset-cooking")) {
      apiHelpers.getRequest(
        "https://www.boredapi.com/api/activity?type=cooking&price=0",
        (boredObj) => {
          app.innerHTML = ActivityGenerator(boredObj);
        }
      );
    }

    if (event.target.classList.contains("reset-education")) {
      apiHelpers.getRequest(
        "https://www.boredapi.com/api/activity?type=education&price=0",
        (boredObj) => {
          app.innerHTML = ActivityGenerator(boredObj);
        }
      );
    }

    if (event.target.classList.contains("reset-music")) {
      apiHelpers.getRequest(
        "https://www.boredapi.com/api/activity?type=music",
        (boredObj) => {
          app.innerHTML = ActivityGenerator(boredObj);
        }
      );
    }

    if (event.target.classList.contains("reset-recreation")) {
      apiHelpers.getRequest(
        "https://www.boredapi.com/api/activity?type=recreational&price=0",
        (boredObj) => {
          app.innerHTML = ActivityGenerator(boredObj);
        }
      );
    }

    if (event.target.classList.contains("reset-relaxation")) {
      apiHelpers.getRequest(
        "https://www.boredapi.com/api/activity?type=relaxation&price=0",
        (boredObj) => {
          app.innerHTML = ActivityGenerator(boredObj);
        }
      );
    }

    if (event.target.classList.contains("reset-social")) {
      apiHelpers.getRequest(
        "https://www.boredapi.com/api/activity?type=social&price=0",
        (boredObj) => {
          app.innerHTML = ActivityGenerator(boredObj);
        }
      );
    }
  });
 
}


function showPicture() {
  const pictureLocation = document.querySelector(".content");
  apiHelpers.getRequest(
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/248008",
    (metObject) => {
      pictureLocation.innerHTML = TestImg(metObject);
    }
  );
}

function marineLifePopulator() {
  const pictureLocation = document.querySelector(".content");
  apiHelpers.getRequest(
    "https://www.fishwatch.gov/api/species/red-snapper/species name",
    (marineObject) => {
      pictureLocation.innerHTML = TestImg(marineObject);
    }
  );
}



