import { POSTER_CDN_URL } from "../utils/constants";

function MovieCard({ posterPath }) {
  return (
    <div className="flex-shrink-0">
      {posterPath && (
        <img
          className="w-48 rounded-lg shadow-lg"
          alt="movie poster"
          src={POSTER_CDN_URL + posterPath}
        />
      )}
    </div>
  );
}

export default MovieCard;
