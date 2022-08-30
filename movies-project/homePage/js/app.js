// Marvel movies JSON
import data from "../js/data.JSON" assert { type: "json" };
// DOM
let empty = document.querySelector(".empty");
// OOP : Movies
class Movies {
  // function show data from data array
  marvelMovies(arr) {
    // forEach method
    arr.forEach((element, i) => {
      // variables from api data
      let img = element.image;
      let year = element.year;
      let title = element.title;
      let embedUrls = element.embedUrls;
      let description = element.description;
      let trailer = element.trailer;
      //  append variables to swiper Container
      empty.innerHTML += `
   <div class="img-container m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}">
   <img src="${img}">
    </div>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content bg-black text-white">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div trailer-YouTube d-flex justify-content-center>
          <iframe width="350" height="315" src="https://www.youtube.com/embed/${trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>          
          <p class="fs-6">${description}</p>
          <p class="fs-6">${year}</p
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <a href="${embedUrls}" target="_blank"><button type="button" class="btn btn-primary">See More</button></a> 
          </div>
        </div>
    `;
    });
  }
}
// variable OOP
let movies = new Movies();
movies.marvelMovies(data);


