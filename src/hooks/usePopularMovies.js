import { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIE_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

function usePopularMovies() {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  async function fetchPopularMovies() {
    const data = await fetch(POPULAR_MOVIE_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }

  useEffect(() => {
    !popularMovies && fetchPopularMovies();
  }, []);
}

export default usePopularMovies;
