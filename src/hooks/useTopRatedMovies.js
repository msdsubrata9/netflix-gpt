import { useEffect } from "react";
import { API_OPTIONS, TOP_RATED_MOVIE_URL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

function useTopRatedMovies() {
  const dispatch = useDispatch();
  async function fetchTopRatedMovies() {
    const data = await fetch(TOP_RATED_MOVIE_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);
}

export default useTopRatedMovies;
