import { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BlockchainPage from "./pages/BlockchainPage";
import SoftwarePage from "./pages/SoftwarePage";
import FdePage from "./pages/FdePage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blockchain" element={<BlockchainPage />} />
        <Route path="/software" element={<SoftwarePage />} />
        <Route path="/fde" element={<FdePage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
