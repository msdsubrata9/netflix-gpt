import { useEffect } from "react";
import { API_OPTIONS, TV_TRENDING_DAY_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingTVShows } from "../utils/moviesSlice";

function useTrendingOnTV() {
  const dispatch = useDispatch();

  const trendingTVShows = useSelector((store) => store.movies.trendingTVShows);

  async function fetchTrendingTVShows() {
    const data = await fetch(TV_TRENDING_DAY_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addTrendingTVShows(json.results));
  }
  useEffect(() => {
    !trendingTVShows && fetchTrendingTVShows();
  }, []);
}

export default useTrendingOnTV;
