// Import Outlet
import { Outlet } from "react-router-dom";

// Import Header e Footer
import Header from "../components/Header";
import Footer from "../components/Footer";

// Layout di default
export default function DefaultLayout() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}
