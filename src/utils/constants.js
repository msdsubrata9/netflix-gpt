export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const LOGIN_PAGE_BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_medium.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const NOW_PLAYING_MOVIE_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_MOVIE_URL =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOP_RATED_MOVIE_URL =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIE_URL =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const TV_TRENDING_DAY_URL =
  "https://api.themoviedb.org/3/trending/tv/day";

export const PLAY_BUTTON_LOGO =
  "https://i.pinimg.com/736x/2c/86/cd/2c86cd6329762b92e6341fb8e725156e.jpg";

export const MORE_INFO_BUTTON_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Minimalist_info_Icon.png/800px-Minimalist_info_Icon.png";

export const POSTER_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
