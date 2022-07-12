// DOM
let swiperContainer = document.querySelector(".swiper-wrapper");
let mostWatchedMovie = document.querySelector(".most-watched-movie");
let emptyContainer = document.querySelector(".empty-container");
let headerContainer = document.querySelector(".header-container");
let input = document.querySelector("#id-input");
// Marvel movies array 
let data = [
  {
    title: "Doctor Strange",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg",
    embedUrls:
      "https://www.marvel.com/movies/doctor-strange-in-the-multiverse-of-madness",
    description: `Marvel Studios' "Doctor Strange in the Multiverse of Madness"—a thrilling ride through the Multiverse with Doctor Strange, his trusted friend Wong and Wanda Maximoff, aka Scarlet Witch. "Doctor Strange in the Multiverse of Madness" opens in U.S. theaters on May 6, 2022.`,
    year: "May 6, 2022",
  },
  {
    title: "Captain Marvel",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_lob_crd_06.jpg",
    embedUrls: "https://www.marvel.com/movies/captain-marvel",
    description: `Set in the 1990s, Marvel Studios' "Captain Marvel" is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe's most powerful heroes. While a galactic war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom.`,
    year: "March 8, 2019",
  },
  {
    title: "Shang-Chi",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/shangchi_lob_crd_07.jpg",
    embedUrls:
      "https://www.marvel.com/movies/shang-chi-and-the-legend-of-the-ten-rings",
    description: `Marvel Studios' "Shang-Chi and The Legend of The Ten Rings" stars Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film also stars Tony Leung as Wenwu, Awkwafina as Shang-Chi's friend Katy and Michelle Yeoh as Jiang Nan, as well as Fala Chen, Meng'er Zhang, Florian Munteanu and Ronny Chieng.`,
    year: "September 3, 2021",
  },
  {
    title: "Spider-Man : No Way Home",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg",
    embedUrls: "https://www.marvel.com/movies/spider-man-no-way-home",
    description: ``,
    year: "December 17, 2021",
  },
  {
    title: "Ant-Man",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ant-man_lob_crd_01_9.jpg",
    embedUrls: "https://www.marvel.com/movies/ant-man",
    description: `The next evolution of the Marvel Cinematic Universe brings a founding member of The Avengers to the big screen for the first time with Marvel Studios' "Ant-Man." Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.`,
    year: "July 17, 2015",
  },
  {
    title: "Spider-Man: Far From Home",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manfarfromhome_lob_crd_04_3.jpg",
    embedUrls: "https://www.marvel.com/movies/spider-man-far-from-home",
    description: `Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever`,
    year: "2015",
  },
  {
    title: "Spider-Man: Homecoming",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manhomecoming_lob_crd_01_3.jpg",
    embedUrls: "https://www.marvel.com/movies/spider-man-homecoming",
    description: `A young Peter Parker/Spider-Man (Tom Holland), who made his sensational debut in Captain America: Civil War, begins to navigate his newfound identity as the web-slinging super hero in Spider-Man: Homecoming. Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May (Marisa Tomei), under the watchful eye of his new mentor Tony Stark (Robert Downey, Jr.). Peter tries to fall back into his normal daily routine – distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man – but when the Vulture (Michael Keaton) emerges as a new villain, everything that Peter holds most important will be threatened.`,
    year: "July 7, 2017",
  },
  {
    title: "Black Widow",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_lob_crd_06.jpg",
    embedUrls: "https://www.marvel.com/movies/black-widow",
    description: `In Marvel Studios’ action-packed spy thriller “Black Widow,” Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.`,
    year: `July 9, 2021`,
  },
  {
    title: "Black Panther",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackpanther_lob_crd_01_5.jpg",
    embedUrls: "https://www.marvel.com/movies/black-panther",
    description: `Marvel Studios’ “Black Panther” follows T’Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T’Challa’s mettle as king—and Black Panther—is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.`,
    year: "February 16, 2018",
  },
  {
    title: "Avengers: Endgame",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    embedUrls: "https://www.marvel.com/movies/avengers-endgame",
    description: `The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films, "Avengers: Endgame."`,
    year: "April 26, 2019",
  },
  {
    title: "Avengers: Infinity War",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_crd_02.jpg",
    embedUrls: "https://www.marvel.com/movies/avengers-infinity-war",
    description: `An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios' "Avengers: Infinity War" brings to the screen the ultimate, deadliest showdown of all time. As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain`,
    year: "April 27, 2018",
  },
  {
    title: "THOR: LOVE AND THUNDER",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorloveandthunder_lob_crd_04.jpg",
    embedUrls: "https://www.marvel.com/movies/thor-love-and-thunder",
    description: `Marvel Studios’ THOR: LOVE AND THUNDER stars Chris Hemsworth, Tessa Thompson, Natalie Portman and Christian Bale. Directed by Taika Waititi. In theaters July 8, 2022.`,
    year: "July 8, 2022",
  },
  {
    title: "Captain America: The Winter Soldier",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamericathewintersoldier_lob_crd_01_2.jpg",
    embedUrls:
      "https://www.marvel.com/movies/captain-america-the-winter-soldier",
    description: `After the cataclysmic events in New York with The Avengers, Marvel's "Captain America: The Winter Soldier," finds Steve Rogers, aka Captain America, living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy--the Winter Soldier.`,
    year: "April 4, 2014",
  },
  {
    title: "The Hulk",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theincrediblehulk_lob_crd_01_3.jpg",
    embedUrls: "https://www.marvel.com/movies/the-incredible-hulk",
    description: `In this new beginning, scientist Bruce Banner desperately hunts for a cure to the gamma radiation that poisoned his cells and unleashes the unbridled force of rage within him: The Hulk. Living in the shadows--cut off from a life he knew and the woman he loves, Betty Ross--Banner struggles to avoid the obsessive pursuit of his nemesis, General Thunderbolt Ross and the military machinery that seeks to capture him and brutally exploit his power. As all three grapple with the secrets that led to the Hulk's creation, they are confronted with a monstrous new adversary known as the Abomination, whose destructive strength exceeds even the Hulk's own. One scientist must make an agonizing final choice: accept a peaceful life as Bruce Banner or find heroism in the creature he holds inside--The Incredible Hulk.`,
    year: "une 13, 2008",
  },
  {
    title: "Iron Man 2",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman2_lob_crd_01_4.jpg",
    embedUrls: "https://www.marvel.com/movies/iron-man-2",
    description: `With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts and "Rhodey" Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy.`,
    year: "May 7, 2010",
  },
  {
    title: "Guardians of the Galaxy",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/guardiansofthegalaxy_lob_crd_03_0.jpg",
    embedUrls: "https://www.marvel.com/movies/guardians-of-the-galaxy",
    description: `An action-packed, epic space adventure, Marvel's "Guardians of the Galaxy," expands the Marvel Cinematic Universe into the cosmos, where brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful villain with ambitions that threaten the entire universe. To evade the ever-persistent Ronan, Quill is forced into an uneasy truce with a quartet of disparate misfits--Rocket, a gun-toting raccoon; Groot, a tree-like humanoid; the deadly and enigmatic Gamora; and the revenge-driven Drax the Destroyer. But when Quill discovers the true power of the orb and the menace it poses to the cosmos, he must do his best to rally his ragtag rivals for a last, desperate stand--with the galaxy's fate in the balance.`,
    year: "August 1, 2014",
  },
];
// async / await : function - API DATA
async function apiData() {
  // variable : API_KEY
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "094d143fe1msh82a8b910961974ap14d86fjsn7d7f23b8f895",
      "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
    },
  };
  // Fetch function
  let response = await fetch(
    "https://movies-app1.p.rapidapi.com/api/movies",
    options
  );
  let data = await response.json();
  let moviesData = data.results;
  // display data
  this.showDataApiMovies(moviesData);
  // Event input & filter movies by user input
  input.addEventListener("input", function () {
    if (input.value != "") {
      headerContainer.style.display = "none";
      filterDataApi(moviesData)
    } else {
      headerContainer.style.display = "block";
    }
  });
}
// function show data from api
function showDataApiMovies(arr) {
  // forEach method
  arr.forEach((element) => {
    // variables from api data
    let img = element.image;
    let title = element.title;
    let release = element.release;
    let embedUrls = element.embedUrls;
    let description = element.description;
    //  append variables to swiper Container
    swiperContainer.innerHTML += `
       <div class="swiper-slide bg-black d-flex flex-column">
       <img src="${img}">
       <span class='text-black bg-black'>${title}</span>
       </div>`;
  });
}
// filter Data from api data
function filterDataApi(arr) {
  swiperContainer.innerHTML = "";
  let dataFilter = arr.filter(function (val) {
    return val.title.toLowerCase().includes(input.value);
  });
  showDataApiMovies(dataFilter);
}
// OOP : Movies
class Movies {
  // function show data from data array
  marvelMovies(arr) {
    // forEach method
    arr.forEach((element) => {
      // variables from api data
      let img = element.image;
      let year = element.year;
      let title = element.title;
      let embedUrls = element.embedUrls;
      let description = element.description;
      //  append variables to swiper Container
      mostWatchedMovie.innerHTML += `
   <div  class="swiper-slide bg-black d-flex flex-column">
    <img src="${img}">
    <span class='text-black bg-black'>${title}</span>
    </div>`;
      let swiperSlide = document.querySelectorAll(".swiper-slide");
      swiperSlide.forEach((movieDiv) => {
        movieDiv.addEventListener("click", function (e) {
          console.log(e.target);
        });
      });
    });
  }
// filter Data from Marvel data
 filterData(arr) {
  mostWatchedMovie.innerHTML = "";
  let dataFilter = arr.filter(function (val) {
    return val.title.toLowerCase().includes(input.value);
  });
  this.marvelMovies(dataFilter);
}

}
// event input : marvel movie
input.addEventListener("input", function () {
  if (input.value != "") {
    headerContainer.style.display = "none";
    movies.filterData(data)
  } else {
    headerContainer.style.display = "block";
  }
});
// change div slide number
let numDivImg = "";
function changeDivSlide() {
  if (screen.width < 768) {
    numDivImg = 2;
  } else {
    numDivImg = 6;
  }
}
changeDivSlide();
// <!-- Initialize     Swiper -->
let swiper = new Swiper(".mySwiper", {
  slidesPerView: numDivImg,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// variable OOP
let movies = new Movies();
// function api data
apiData();
// marvel data
movies.marvelMovies(data)
