let tvShows = document.querySelector(".tv-shows");
let input = document.querySelector("#id-input-tv-show");

const getData = async () => {
  const res = await fetch("https://api.tvmaze.com/shows");
  const data = await res.json();
  displayData(data);
  input.addEventListener("keyup", () => filterData(data));
};
getData();
function displayData(arr) {
  // forEach method
  arr.forEach((element, i) => {
    // variables from api data
    let img = element.image.medium;
    let img2 = element.image.original;
    let year = element.ended;
    let title = element.name;
    let url = element.url;
    let description = element.summary;
    //  append variables to swiper Container
    tvShows.innerHTML += `
     <div class="text-white text-center m-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}">
     <img src="${img}">
     <h6>${title}</h6>
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
          <img src="${img2}">
          <p class="fs-6">${description}</p>
          <p class="fs-6">${year === null ? "" : year}</p

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <a href="${url}" target="_blank"><button type="button" class="btn btn-primary">See More</button></a> 
          </div>
        </div>
    `;
  });
}
function filterData(arr) {
  tvShows.innerHTML = "";
  let filterArray = arr.filter((val) => {
    return val.name.toLowerCase().startsWith(input.value.toLowerCase());
  });
  displayData(filterArray);
}
