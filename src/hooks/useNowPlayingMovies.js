import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIE_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

function useNowPlayingMovies() {
  const dispatch = useDispatch();
  async function fetchNowPlayingMovies() {
    const data = await fetch(NOW_PLAYING_MOVIE_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;
