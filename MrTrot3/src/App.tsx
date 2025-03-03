import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Test } from "./pages/Test";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
