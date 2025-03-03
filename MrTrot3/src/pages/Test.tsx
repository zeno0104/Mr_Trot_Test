import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Question } from "../components/Question";
import { AnswerContext } from "../App";
import { questions } from "../utils/peoples";
import { Loading } from "../components/Loading"; // 🔹 로딩 컴포넌트 추가

export const Test = () => {
  const [curIndex, setCurIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loading, setLoading] = useState(false); // 🔹 로딩 상태 추가
  const context = useContext(AnswerContext);
  if (!context) {
    throw new Error(
      "AnswerContext must be used within an AnswerContext.Provider"
    );
  }
  const { answer, setAnswer } = context;

  const navigate = useNavigate();

  useEffect(() => {
    questions.forEach((q) => {
      const img = new Image();
      img.src = q.img;
    });
  }, []);

  const answerHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selected = e.currentTarget.value as "a" | "b" | "c" | "d";
    setAnswer((prev) => ({
      ...prev,
      [selected]: prev[selected] + 1,
    }));

    setIsTransitioning(true);

    setTimeout(() => {
      if (curIndex < questions.length - 1) {
        setCurIndex((prev) => prev + 1);
      } else {
        // 🔹 모든 질문이 끝난 경우 로딩 시작
        setLoading(true);
        const id = getResultId();

        // 🔹 2초 후에 결과 페이지로 이동
        setTimeout(() => {
          navigate(`/result/${id}`);
        }, 2000);
      }
      setIsTransitioning(false);
    }, 300);
  };

  const getResultId = () => {
    const { a, b, c, d } = answer;
    const scores = [
      { id: 1, name: "손빈아", score: a + b },
      { id: 2, name: "춘길", score: a + c },
      { id: 3, name: "김용빈", score: b + d },
      { id: 4, name: "최재명", score: a + d },
      { id: 5, name: "추혁진", score: c + b },
      { id: 6, name: "박지후", score: c + d },
      { id: 7, name: "남승민", score: b + c },
      { id: 8, name: "유지우", score: b + a },
      { id: 9, name: "남궁진", score: a + c },
      { id: 10, name: "천록담", score: d + b },
    ];

    scores.sort((x, y) => y.score - x.score);
    const maxScore = scores[0].score;
    const topCandidates = scores.filter((p) => p.score === maxScore);
    const selected =
      topCandidates[Math.floor(Math.random() * topCandidates.length)];

    return selected.id;
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Question
          question={questions[curIndex].title}
          options={questions[curIndex].options}
          image={questions[curIndex].img}
          answerHandler={answerHandler}
          isTransitioning={isTransitioning}
          curIndex={curIndex}
        />
      )}
    </div>
  );
};
