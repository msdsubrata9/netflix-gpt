import { useEffect } from "react";
import { API_OPTIONS, UPCOMING_MOVIE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

function useUpcomingMovies() {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  async function fetchUpcomingMovies() {
    const data = await fetch(UPCOMING_MOVIE_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  }
  useEffect(() => {
    !upcomingMovies && fetchUpcomingMovies();
  }, []);
}

export default useUpcomingMovies;
