// Import di MovieList
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";

// Import degli hook del loader
import { useLoaderContext } from "../contexts/LoaderContext";

export default function MoviesPage() {
  const { loading } = useLoaderContext();

  return (
    <>
      <main>
        <div className="container py-5">
          <h1 className="display-4 text-center mb-5">
            I Nostri Film Recensiti
          </h1>
          {loading ? <Loader /> : <MovieList />}
        </div>
      </main>
    </>
  );
}
