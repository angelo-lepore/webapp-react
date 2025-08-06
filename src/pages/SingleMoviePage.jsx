// Import degli hook di React
import { useState, useEffect } from "react";

// Import gli hook del router
import { useParams } from "react-router-dom";

// Import degli hook del loader
import { useLoaderContext } from "../contexts/LoaderContext";

// Import di SingleMovieCard e ReviewsCard
import SingleMovieCard from "../components/SingleMovieCard";
import ReviewsCard from "../components/ReviewsCard";
import Loader from "../components/Loader";

export default function SingleMoviePage() {
  const { id } = useParams();
  const urlMovies = `http://localhost:3020/movies/${id}`;
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { setLoading } = useLoaderContext();

  // facciamo la richiesta per ottenere i dati del film
  useEffect(() => {
    setLoading(true);
    fetch(urlMovies)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        console.log("Film:", data);
        setReviews(data.reviews);
        console.log("Recensioni:", data.reviews);
      })
      .catch((error) => {
        console.error("Errore nella fetch dei film:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  // funzione per aggiungere una nuova recensione allo stato
  const onAddReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  // se il film non è ancora stato caricato, mostriamo un messaggio
  if (!movie) {
    return (
      <main>
        <div className="container py-5">
          <p>Caricamento film...</p>
          <Loader />
        </div>
      </main>
    );
  }

  // mostriamo la card del film e le recensioni
  return (
    <>
      <main>
        <div className="container py-5">
          <SingleMovieCard movie={movie} />
          <ReviewsCard
            reviews={reviews}
            onAddReview={onAddReview}
            movieId={movie.id}
          />
        </div>
      </main>
    </>
  );
}
