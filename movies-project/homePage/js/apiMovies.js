class ApiMovies {
    constructor() {
      // api key  from TMDB
      const api = "api_key=904a3dbc853e683a61b603dd4aecb579";
      // base url of the site
      const base_url = "https://api.themoviedb.org/3";
      // url
      this.final_url =
        base_url + "/discover/movie?sort_by=popularity.desc&" + api;
      // img url
      this.img_url = "https://image.tmdb.org/t/p/original";
      // requests for movies data
      this.requests = {
        fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
        fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
        fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
        fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
        fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
        fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
        fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
        fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=27`,
      };
    }
    async Popular() {
      let response = await fetch(this.requests.fetchActionMovies);
      let data = await response.json();
      let res = data.results;
      return res
    }
    async trending() {
      let response = await fetch(this.requests.fetchTrending);
      let data = await response.json();
      let res = data.results;
      return res
    }
    async comedy() {
      let response = await fetch(this.requests.fetchComedyMovies);
      let data = await response.json();
      let res = data.results;
      return res
    }
    async horror() {
      let response = await fetch(this.requests.fetchHorrorMovies);
      let data = await response.json();
      let res = data.results;
      return res
    }
    async documentaries() {
      let response = await fetch(this.requests.fetchDocumentaries);
      let data = await response.json();
      let res = data.results;
      return res
    }
    async netflix() {
      let response = await fetch(this.requests.fetchNetflixOrignals);
      let data = await response.json();
      let res = data.results;
      return res
    }
  }
  