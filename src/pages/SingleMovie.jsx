// Import degli hook di React
import { useState, useEffect } from "react";

// Import gli hook del router
import { useParams } from "react-router-dom";

// Import di SingleMovieCard e ReviewsCard
import SingleMovieCard from "../components/SingleMovieCard";
import ReviewsCard from "../components/ReviewsCard";

export default function SingleMovie() {
  const { id } = useParams();
  const urlMovies = `http://localhost:3020/movies/${id}`;
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(urlMovies)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        console.log("Film:", data);
        setReviews(data.reviews);
        console.log("Recensioni:", data.reviews);
      });
  }, [id]);

  return (
    <>
      <main>
        <div className="container py-5">
          <SingleMovieCard movie={movie} />
          <ReviewsCard reviews={reviews} />
        </div>
      </main>
    </>
  );
}
