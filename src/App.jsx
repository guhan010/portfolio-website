import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import NavBar from "./components/Navbar";

// Lazy-loaded route components
const LazyHome = lazy(() => import("./pages/Home"));
const LazyAbout = lazy(() => import("./pages/About"));
const LazyPortfolio = lazy(() => import("./pages/Portfolio"));
const LazyBlog = lazy(() => import("./pages/Blog"));
const LazyContact = lazy(() => import("./pages/Contact"));
const LazyResume = lazy(() => import("./pages/Resume"));
const LazyTennyCalc = lazy(() => import("./pages/portfolio/TennyCalc"));
const LazyGameBase = lazy(() => import("./pages/portfolio/GameBase"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/about" element={<LazyAbout />} />
          <Route path="/portfolio" element={<LazyPortfolio />} />
          <Route path="/blog" element={<LazyBlog />} />
          <Route path="/resume" element={<LazyResume />} />
          <Route path="/Contact" element={<LazyContact />} />
          <Route path="/portfolio/tenny-calc" element={<LazyTennyCalc />} />
          <Route path="/portfolio/game-base" element={<LazyGameBase />} />
        </Routes>
      </Suspense>
      <BottomNav />
    </>
  );
}

export default App;
