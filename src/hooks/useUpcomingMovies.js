import { useEffect } from "react";
import { API_OPTIONS, UPCOMING_MOVIE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

function useUpcomingMovies() {
  const dispatch = useDispatch();
  async function fetchUpcomingMovies() {
    const data = await fetch(UPCOMING_MOVIE_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  }
  useEffect(() => {
    fetchUpcomingMovies();
  }, []);
}

export default useUpcomingMovies;
