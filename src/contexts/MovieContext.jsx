// Import degli hook di React
import { useState, useEffect, createContext, useContext } from "react";

// Import degli hook del loader
import { useLoaderContext } from "../contexts/LoaderContext";

// Crea un nuovo contesto, che useremo per condividere i film in tutta l'app
const MovieContext = createContext();

// Componente Provider che fornisce i dati ai componenti figli
function MovieProvider({ children }) {
  const urlMovies = "http://localhost:3020/movies";
  const [movies, setMovies] = useState([]);
  const { setLoading } = useLoaderContext();

  useEffect(() => {
    setLoading(true);
    fetch(urlMovies)
      .then((res) => res.json())
      .then((data) => {
        console.log("Movies:", data);
        setMovies(data);
      })
      .catch((error) => {
        console.error("Errore nella fetch dei film:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    // Forniamo il valore del context a tutti i componenti figli
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
}

// Questa funzione è un custom hook
function useMovieContext() {
  return useContext(MovieContext);
}

// Esportiamo sia il provider che il custom hook per usarli in altri file
export { MovieProvider, useMovieContext };
