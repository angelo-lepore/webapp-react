// Import useState
import { useState } from "react";

export default function ReviewForm({ movieId, onSubmit }) {
  const [name, setName] = useState("");
  const [vote, setVote] = useState("");
  const [text, setText] = useState("");

  // funzione chiamata quando si invia il form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // controllo se manca un campo
    if (!name || !vote || !text) return;

    // creiamo un oggetto con i dati della nuova recensione
    const newReview = {
      name,
      vote: parseInt(vote),
      text,
    };

    // inviamo i dati al server con una richiesta POST
    fetch(`http://localhost:3020/movies/${movieId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => {
        // controlliamo se la risposta dal server non è ok
        if (!res.ok) {
          return res.json().then((errorData) => {
            // lanciamo un errore con il messaggio ricevuto
            throw new Error(errorData.error || "Errore nel salvataggio");
          });
        }
        // se tutto va bene, leggiamo i dati JSON dalla risposta
        return res.json();
      })
      .then((data) => {
        onSubmit(data.review);
        // resettiamo i campi del form
        setName("");
        setText("");
        setVote("");
      })
      .catch((err) => {
        // gestiamo eventuali errori di invio
        console.error("Errore invio recensione:", err);
      });
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Lascia la tua recensione</h4>

      <div className="card p-3 shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-12 col-md-8 mb-3 mb-md-0">
              <label className="form-label">Nome</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="col-12 col-md-4">
              <label className="form-label">Voto (1-5)</label>
              <input
                type="number"
                className="form-control"
                min="1"
                max="5"
                value={vote}
                onChange={(e) => setVote(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Recensione</label>
            <textarea
              className="form-control"
              rows="4"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>

          <div className="d-flex">
            <button type="submit" className="btn btn-secondary">
              Submit review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
