// Import degli hook di React
import { useState, createContext, useContext } from "react";

// Import degli hook del loader
const LoaderContext = createContext();

// Componente Provider che fornisce i dati ai componenti figli
function LoaderProvider({ children }) {
  const [loading, setLoading] = useState();
  return (
    // Forniamo il valore del context a tutti i componenti figli
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}

// Questa funzione è un custom hook
function useLoaderContext() {
  return useContext(LoaderContext);
}

// Esportiamo sia il provider che il custom hook per usarli in altri file
export { LoaderProvider, useLoaderContext };
