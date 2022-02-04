import About from "./components/About";
import Activities from "./components/Activities";
import ActivityGenerator from "./components/ActivityGenerator";
import ArtGallery from "./components/ArtGallery";
import Contact from "./components/Contact";
import Game from "./components/Game";
import Games from "./components/Games";
import Header from "./components/Header";
import Home from "./components/Home";
import TestImg from "./components/TestImg";
import apiHelpers from "./components/apiHelpers";
import crud from "./crud/crud";

buildPage();

function buildPage() {
  home();
  header();
  navContact();
  navHome();
  navArtGallery();
  navActivities();
  navAbout();
  showPicture();

  navGames();
  

}

function home() {
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

function navArtGallery() {
  const artGalleryElem = document.querySelector(".nav-list__artGallery");
  artGalleryElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    console.log("firing");
    app.innerHTML = ArtGallery();
    // fetch("https://ids.lib.harvard.edu/ids/iiif/426398978/full/,150/0/default.jpg")
    //   .then(res = res.json())
    //   .then(result => {
    //     console.log(result)
    //     image.src = result.message
    //   })
    //   .catch(err=>console.log(err))
    artGalleryPopulator();
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
  const app = document.querySelector("#app");
  const gameElem = document.querySelector(".nav-list__games");
  gameElem.addEventListener("click", () => {
    crud.getRequest('http://localhost:8080/api/game-resources', games => {
      app.innerHTML = Games(games);
    })
    renderGameInfo();
    
  });
}

function renderGameInfo() {
  const app = document.querySelector("#app");
  app.addEventListener('click', (event) => {
    if (event.target.classList.contains('games-list__title')) {
      const gameId = event.target.querySelector('#gameId').value;
      crud.getRequest(`http://localhost:8080/api/game-resources/${gameId}`, game => {
        app.innerHTML = Game(game);
      })
    }
  })
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
  // apiHelpers.getRequest(
  //   "https://collectionapi.metmuseum.org/public/collection/v1/objects/248008",
  //   (metObject) => {
  pictureLocation.innerHTML = TestImg();
  // }
  // );
}

function artGalleryPopulator() {
  const pictureLocation = document.querySelector(".art-gallery");
  apiHelpers.getRequest(
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/3288",
    (metObject) => {
      pictureLocation.innerHTML = TestImg(metObject);
    }
  );
}
