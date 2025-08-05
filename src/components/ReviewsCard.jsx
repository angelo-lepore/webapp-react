// Import ReviewForm
import ReviewForm from "./ReviewForm";

// Componente che mostra una singola "card" movie
export default function ReviewsCard({ reviews, onAddReview, movieId }) {
  return (
    <>
      <div className="mt-5">
        <h3>Recensioni</h3>
        {reviews?.length === 0 ? (
          <p>Ancora nessuna recensione per questo film.</p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="border rounded p-3 mb-3">
              <p>
                <strong>{review?.name}</strong> - Vote: {review?.vote}/5
              </p>
              <p>{review?.text}</p>
            </div>
          ))
        )}
        <ReviewForm movieId={movieId} onSubmit={onAddReview} />
      </div>
    </>
  );
}
