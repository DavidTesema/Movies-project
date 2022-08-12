let searchContainer = document.querySelector(".search-container");
let idInput = document.querySelector("#id-input");
let apiData=[];
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
      <h5 class="modal-title" id="exampleModalLabel">${title===undefined ? name:title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
      <img src="${img2}" class="my-3">
      <h6> ${description}</h6> 
      <h6> ${year===undefined ? data:year}</h6> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      `;
  });
}
function filterDataByTitle(arr) {
  searchContainer.innerHTML ="";
  let dataFilter = arr.filter((val)=> {
    return val.original_title.toLowerCase().startsWith(idInput.value.toLowerCase());
  });
  showMovies(dataFilter);
}
movies.netflix().then((res) => {apiData=[...res];});
movies.documentaries().then((res) => {apiData=[...res,...apiData]});
movies.comedy().then((res) => {apiData=[...res,...apiData]});
movies.horror().then((res) => {apiData=[...res,...apiData]});
movies.Popular().then((res) => {apiData=[...res,...apiData]});
movies.trending().then((res) => {apiData=[...res,...apiData]});

setTimeout(()=>{
  showMovies(apiData)
  console.log(apiData);
},1000)


idInput.addEventListener('input',()=> filterDataByTitle(apiData))
