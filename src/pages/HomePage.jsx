// Import Link
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <main>
        <div className="container py-5">
          {/* Titolo di benvenuto */}
          <h1 className="display-4 text-center mb-3 text-secondary">
            Benvenuto su CineVerse
          </h1>
          <p className="lead text-center text-muted mb-5">
            Scopri, recensisci e condividi i tuoi film preferiti con una
            community di appassionati di cinema.
          </p>

          {/* Immagine banner promozionale */}
          <div className="w-75 mx-auto mb-5">
            <img
              src="img/sfondo-del-cinema.jpg"
              alt="Serata cinema"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Sezione vantaggi */}
          <div className="row text-center mb-5">
            <div className="col-md-4 mb-4">
              <i className="bi bi-film display-4 text-danger mb-3"></i>
              <h5 className="fw-semibold">Ampio Catalogo</h5>
              <p className="text-muted">
                Dai cult intramontabili alle ultime uscite: trova ogni genere di
                film.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-chat-dots-fill display-4 text-success mb-3"></i>
              <h5 className="fw-semibold">Recensioni Reali</h5>
              <p className="text-muted">
                Opinioni autentiche scritte da veri appassionati di cinema come
                te.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-stars display-4 text-warning mb-3"></i>
              <h5 className="fw-semibold">Classifiche & Preferiti</h5>
              <p className="text-muted">
                Scopri i film più votati e crea la tua lista personale.
              </p>
            </div>
          </div>

          {/* Tasto Esplora */}
          <div className="text-center">
            <Link
              to="/movies"
              className="btn btn-secondary text-light btn-lg px-5"
            >
              <i className="bi bi-collection-play-fill"></i> Movies
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
