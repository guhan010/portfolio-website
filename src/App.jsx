import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import BottomNav from "./components/BottomNav";
import TennyCalc from "./pages/portfolio/TennyCalc";
import NavBar from "./components/Navbar";
import GameBase from "./pages/portfolio/GameBase";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/portfolio/tenny-calc" element={<TennyCalc />}></Route>
        <Route path="/portfolio/game-base" element={<GameBase />}></Route>
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;
