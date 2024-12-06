import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="left-0 w-full bg-black bg-opacity-90 shadow-md py-0 px-4 md:p-4">
        <div className="-mt-80 md:-mt-40 relative z-50">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList
            title={"Trending TV Shows"}
            movies={movies.trendingTVShows}
          />
        </div>
      </div>
    )
  );
}

export default SecondaryContainer;
