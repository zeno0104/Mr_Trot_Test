import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Test } from "./pages/Test";
import { Footer } from "./components/Footer";
import { createContext, useState } from "react";
import { Answer } from "./utils/types";
import { Result } from "./pages/Result";
import { Analytics } from "@vercel/analytics/react";

// ✅ AnswerContext의 기본값을 명확하게 지정
export const AnswerContext = createContext<{
  answer: Answer;
  setAnswer: React.Dispatch<React.SetStateAction<Answer>>;
} | null>(null);
console.log("test");
function App() {
  const [answer, setAnswer] = useState<Answer>({ a: 0, b: 0, c: 0, d: 0 });
  console.log("test");
  return (
    <>
      <Analytics />
      <AnswerContext.Provider value={{ answer, setAnswer }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result/:id" element={<Result />} />
        </Routes>
        <Footer />
      </AnswerContext.Provider>
    </>
  );
}

export default App;
