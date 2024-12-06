import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

function VideoBackground({ movieId }) {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="relative w-full h-screen">
      <iframe
        className="absolute -top-40 md:top-0 left-0 w-full h-full z-0 pointer-events-auto"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
