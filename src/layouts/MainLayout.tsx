import { Outlet } from "react-router-dom";
import PageTransition from "../components/ui/PageTransition";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <PageTransition>
  <Outlet />
</PageTransition>

      </main>

      <Footer />
    </>
  );
}

export default MainLayout;