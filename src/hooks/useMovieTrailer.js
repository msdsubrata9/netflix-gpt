import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

function useMovieTrailer(movieId) {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  async function fetchMovieVideo() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailers = json.results.filter(
      (video) => video.type.trim().toLowerCase() === "trailer"
    );
    const officialTrailer = trailers.length
      ? trailers.filter(
          (trailer) => trailer.name.trim().toLowerCase() === "official trailer"
        )
      : json.results[0];
    dispatch(addTrailerVideo(officialTrailer[0]));
  }
  useEffect(() => {
    !trailerVideo && fetchMovieVideo();
  }, []);
}

export default useMovieTrailer;
