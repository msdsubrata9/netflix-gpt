import { useEffect } from "react";
import { API_OPTIONS, TV_TRENDING_DAY_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingTVShows } from "../utils/moviesSlice";

function useTrendingOnTV() {
  const dispatch = useDispatch();
  async function fetchTrendingTVShows() {
    const data = await fetch(TV_TRENDING_DAY_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addTrendingTVShows(json.results));
  }
  useEffect(() => {
    fetchTrendingTVShows();
  }, []);
}

export default useTrendingOnTV;
