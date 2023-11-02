import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Navbar from "../src/components/Navbar";
import PDFViewer from "./components/PDFViewer";
// Lazy-loaded route components
const LazyHome = lazy(() => import("./pages/Home"));
const LazyAbout = lazy(() => import("./pages/About"));
const LazyPortfolio = lazy(() => import("./pages/Portfolio"));
const LazyBlog = lazy(() => import("./pages/Blog"));
const LazyContact = lazy(() => import("./pages/Contact"));
const LazyTennyCalc = lazy(() => import("./pages/portfolio/TennyCalc"));
const LazyGameBase = lazy(() => import("./pages/portfolio/GameBase"));
const LazyPortfolioSite = lazy(() => import("./pages/portfolio/PortfolioSite"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/about" element={<LazyAbout />} />
          <Route path="/portfolio" element={<LazyPortfolio />} />
          <Route path="/blog" element={<LazyBlog />} />
          <Route path="/resume" Component={PDFViewer} />
          <Route path="/Contact" element={<LazyContact />} />
          <Route path="/portfolio/tenny-calc" element={<LazyTennyCalc />} />
          <Route path="/portfolio/game-base" element={<LazyGameBase />} />
          <Route
            path="/portfolio/portfolio-site"
            element={<LazyPortfolioSite />}
          />
        </Routes>
      </Suspense>
      <BottomNav />
    </>
  );
}

export default App;
