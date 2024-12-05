import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    <div>
      <h1 className="text-4xl text-white font-bold mb-4">{title}</h1>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
