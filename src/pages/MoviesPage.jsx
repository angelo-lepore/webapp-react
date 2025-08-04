// Import di MovieList
import MovieList from "../components/MovieList";

export default function MoviesPage() {
  return (
    <>
      <main>
        <div className="container py-5">
          <h1 className="display-4 text-center mb-5">
            I Nostri Film Recensiti
          </h1>
          <MovieList />
        </div>
      </main>
    </>
  );
}
