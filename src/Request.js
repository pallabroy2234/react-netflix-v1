const key = "493189b305793a01f77e0608a690a325";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-Us&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-Us&page=1`,
  requestTranding: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-Us&page=2`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-Us&page=1`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=horror&include_adult=false&language=en-US&page=5`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&page=1`,
};

export default requests;
