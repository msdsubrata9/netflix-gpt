import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function GptMovieSuggessitions() {
  const gpt = useSelector((store) => store.gpt);
  const { gptSearchedMovieNames, gptSearchedMovieResults } = gpt;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {gptSearchedMovieNames &&
          gptSearchedMovieResults.length &&
          gptSearchedMovieNames.map((movieName, index) => {
            const movies = gptSearchedMovieResults[index];
            if (!movies || movies.length === 0) {
              return null;
            }
            return (
              <MovieList key={movieName} title={movieName} movies={movies} />
            );
          })}
      </div>
    </div>
  );
}

export default GptMovieSuggessitions;
