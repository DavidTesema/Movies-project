// DOM
let PopularContainer = document.querySelector(".Popular-container");
let trendingContainer = document.querySelector(".trending-container");
let comedyContainer = document.querySelector(".comedy-container");
let horrorContainer = document.querySelector(".horror-container");
let netflixContainer = document.querySelector(".netflix-container");
let Documentaries = document.querySelector(".documentaries-container");
let input = document.querySelector("#id-input");
let data = [];
function showPopularMovies(arr, num) {
  let sliceData = arr.slice(num);
  let img_url = "https://image.tmdb.org/t/p/original";
  // forEach method
  sliceData.forEach((element, index) => {
    // variables from api data
    let img = `${img_url}${element.poster_path}`;
    let img2 = `${img_url}${element.backdrop_path}`;
    let title = element.original_title;
    let description = element.overview;
    let year = element.release_date;
    let id = element.id;
    //  append variables to swiper Container
    PopularContainer.innerHTML += `
        <div class='Popular-image idMovies m-2' data-bs-toggle="modal" data-bs-target="#exampleModal${index}">
        <img src="${img}">
      </div>
      
      <!-- Modal -->
      <div class="modal fade" id="exampleModal${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content bg-black text-white">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <img src="${img2}">
           <h6>${description}</h6>
            <p>${year}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn  btn-outline-danger" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
        `;
  });
}
function showMovies(arr, div, num) {
  let sliceData = arr.slice(num);
  let img_url = "https://image.tmdb.org/t/p/original";
  //  forEach method
  sliceData.forEach((element) => {
    // variables from api data
    let img = `${img_url}${element.poster_path}`;
    //  append variables to swiper Container
    div.innerHTML += `
        <div class='trending-container swiper-slide m-2' ">
        <img src="${img}">
        </div>
        `;
  });
}
// Variable : OOP
let movies = new ApiMovies();
// OOP : api movies category
movies.netflix().then((res) => {
  data = [...res];
});
movies.documentaries().then((res) => {
  data = [...res, ...data];
});
movies.comedy().then((res) => {
  data = [...res, ...data];
});
movies.horror().then((res) => {
  data = [...res, ...data];
});
movies.Popular().then((res) => {
  data = [...res, ...data];
});
movies.trending().then((res) => {
  data = [...res, ...data];
});

setTimeout(() => {
  showPopularMovies(data, 102);
  showMovies(data, netflixContainer, 100);
  showMovies(data, horrorContainer, 80);
  showMovies(data, comedyContainer, 62);
  showMovies(data, Documentaries, 35);
  showMovies(data, trendingContainer, 1);
}, 1000);

let screenWidth = 0;
if (screen.width > 768) {
  screenWidth = 6;
} else {
  screenWidth = 2;
}

let swiper = new Swiper(".mySwiper", {
  slidesPerView: screenWidth,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
