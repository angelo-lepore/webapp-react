// Import Footer
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <main>
        <div className="container py-5">
          <h1 className="display-3 fw-bold text-center mb-4 text-secondary">
            Chi Siamo
          </h1>
          <p className="fs-5 text-center text-muted mb-5">
            Benvenuto su <strong>CineVerse</strong>, il portale dedicato a chi
            ama il cinema. Scopri, recensici e condividi i tuoi film preferiti
            con una community appassionata come te.
          </p>

          <div className="row g-4 mb-5">
            <div className="col-md-4 text-center">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <i className="bi bi-camera-reels-fill display-4 text-danger mb-3"></i>
                <h5 className="fw-semibold">La Nostra Missione</h5>
                <p className="text-muted">
                  Offrire uno spazio digitale per scoprire e recensire film,
                  creando un ponte tra gli spettatori e il grande schermo.
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <i className="bi bi-chat-dots-fill display-4 text-success mb-3"></i>
                <h5 className="fw-semibold">La Community</h5>
                <p className="text-muted">
                  Un luogo dove ogni voce conta: lascia la tua recensione,
                  commenta e partecipa alle discussioni cinematografiche.
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <i className="bi bi-star-fill display-4 text-warning mb-3"></i>
                <h5 className="fw-semibold">Recensioni Autentiche</h5>
                <p className="text-muted">
                  Opinioni reali da spettatori come te: scopri film acclamati o
                  gemme nascoste grazie ai feedback della community.
                </p>
              </div>
            </div>
          </div>

          {/* Informazioni di contatto */}
          <div className="bg-light p-4 rounded-4 shadow-sm text-center">
            <h4 className="mb-3 text-secondary">Contattaci</h4>
            <p className="mb-2">
              <i className="bi bi-envelope-fill me-2 text-secondary"></i>
              support@cineverse.it
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone-fill me-2 text-secondary"></i>
              +39 06 9876 5432
            </p>
            <p>
              <i className="bi bi-clock-fill me-2 text-secondary"></i>
              Lunedì - Venerdì | 9:00 - 18:00
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
