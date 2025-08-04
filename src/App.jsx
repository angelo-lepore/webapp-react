// Import di Bootstrap (CSS, JS e icone)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import dei componenti di routing
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import del layout e delle pagine
import DefaultLayout from "./layout/DefaultLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import SingleMovie from "./pages/SingleMovie.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

// Import del provider dei film
import { MovieProvider } from "./contexts/MovieContext.jsx";

function App() {
  return (
    <>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            {/* Layout di default che racchiude le varie pagine */}
            <Route element={<DefaultLayout />}>
              {/* Rotte principali */}
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movies/:id" element={<SingleMovie />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </>
  );
}

export default App;
