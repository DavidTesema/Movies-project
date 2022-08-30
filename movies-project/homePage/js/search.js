// DOM
let searchContainer = document.querySelector(".search-container");
let trailerContainer = document.querySelector(".trailer");
let idInput = document.querySelector("#id-input");
let apiData = [];
let movies = new ApiMovies();
// function display Popular movies
function showMovies(arr) {
  let img_url = "https://image.tmdb.org/t/p/original";
  // forEach method
  arr.forEach((element, index) => {
    // variables from api data
    let img = `${img_url}${element.poster_path}`;
    let img2 = `${img_url}${element.backdrop_path}`;
    let title = element.original_title;
    let name = element.original_name;
    let description = element.overview;
    let year = element.release_date;
    let data = element.first_air_date;
    let id = element.id;
    //  append variables to swiper Container
    searchContainer.innerHTML += `
      <!-- Button trigger modal -->
      <div class='search-container m-2' data-bs-toggle="modal" data-bs-target="#exampleModal${index}">
      <img src="${img}">
      <p>${title}</p>
      </div>

  <!-- Modal -->
<div class="modal fade" id="exampleModal${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content bg-black text-white">
      <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">${
        title === undefined ? name : title
      }</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
      <img src="${img2}" class="my-3">
      <h6> ${description}</h6> 
      <h6> ${year === undefined ? data : year}</h6> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-secondary btn-trailer" value=${index} id="${id}">Trailer</button>
      </div>
    </div>
  </div>
</div>
      `;
    let model = document.getElementsByClassName("modal-body");
    document.querySelectorAll(".btn-trailer").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let indexDiv = e.target.value
        id = +e.path[0].id;
        videoData(id,model, indexDiv);
      });
    });
  });
}
// function Trailer Movies
function videoData(id, div, index) {
  // api key  from TMDB
  const api = "api_key=904a3dbc853e683a61b603dd4aecb579";
  // base url of the site
  const base_url = "https://api.themoviedb.org/3";
  fetch(`${base_url}/movie/${id}/videos?${api}`)
    .then((res) => res.json())
    .then((video) => {
      // Checks if something exists in the array
      if (video.results.length > 0) {
        // Filter for just official trailer
        let filterData = video.results.filter((vel) => {
          return vel.name === "Official Trailer";
        });
        const data = [];
        // push the all trailer to empty div 
        filterData.forEach((trailer) => {
          let { name, key, site } = trailer;
          if (site == "YouTube") {
            data.push(`
          <iframe width="360" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          `);
          }
        });
        // display the trailer
        div[index].innerHTML += `<div class="d-flex justify-content-center">${data.join("")}</div>`
        console.log(div);
      } else {
        div.innerHTML = `<h1>Error</h1>`;
      }
    });
}
// function : Filter input by user 
function filterDataByTitle(arr) {
  searchContainer.innerHTML = "";
  let dataFilter = arr.filter((val) => {
    if (val.title != undefined) {
      return val.title.toLowerCase().startsWith(idInput.value.toLowerCase());
    } else if (val.original_name != undefined) {
      return val.original_name
        .toLowerCase()
        .startsWith(idInput.value.toLowerCase());
    }
  });
  showMovies(dataFilter);
}

// push all the catagories to array = (apiData)
movies.netflix().then((res) => {
  apiData = [...res];
});
movies.documentaries().then((res) => {
  apiData = [...res, ...apiData];
});
movies.comedy().then((res) => {
  apiData = [...res, ...apiData];
});
movies.horror().then((res) => {
  apiData = [...res, ...apiData];
});
movies.Popular().then((res) => {
  apiData = [...res, ...apiData];
});
movies.trending().then((res) => {
  apiData = [...res, ...apiData];
});

setTimeout(() => {
  showMovies(apiData);
}, 1000);
// Event input 
idInput.addEventListener("keyup", () => filterDataByTitle(apiData));
