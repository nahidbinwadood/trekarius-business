import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import CartProvider from "@/components/providers/CartProvider";
import AosProvider from "@/components/providers/Aos/AosProvider";

function Layout() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/contest/photo-contest" && <Navbar />}
      <ScrollRestoration></ScrollRestoration>
      <AosProvider>
        <CartProvider>
          <main>
            <Outlet />
          </main>
        </CartProvider>
      </AosProvider>
      {location.pathname !== "/contest/photo-contest" && <Footer />}
    </div>
  );
}

export default Layout;
