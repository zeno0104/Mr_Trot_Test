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
    // 각 사윗감 별 초기 점수 설정
    type ScoringType = Record<
      string,
      { a: number[]; b: number[]; c: number[]; d: number[] }
    >;
    const scores = [
      { id: 1, name: "손빈아", score: 0 },
      { id: 2, name: "춘길", score: 0 },
      { id: 3, name: "김용빈", score: 0 },
      { id: 4, name: "최재명", score: 0 },
      { id: 5, name: "추혁진", score: 0 },
      { id: 6, name: "박지후", score: 0 },
      { id: 7, name: "남승민", score: 0 },
      { id: 8, name: "유지우", score: 0 },
      { id: 9, name: "남궁진", score: 0 },
      { id: 10, name: "천록담", score: 0 },
    ];

    // 점수 매핑 설정
    const scoring: ScoringType = {
      q1: { a: [1, 2], b: [3, 4], c: [5, 6], d: [7, 8] },
      q2: { a: [2, 5], b: [1, 4], c: [6, 7], d: [3, 10] },
      q3: { a: [5, 6], b: [1, 3], c: [7, 8], d: [9, 10] },
      q4: { a: [2, 6], b: [3, 4], c: [5, 9], d: [1, 10] },
      q5: { a: [4, 8], b: [1, 3], c: [6, 9], d: [2, 10] },
      q6: { a: [1, 2], b: [3, 5], c: [7, 8], d: [4, 10] },
      q7: { a: [2, 9], b: [1, 5], c: [6, 7], d: [3, 10] },
      q8: { a: [1, 10], b: [3, 5], c: [6, 8], d: [2, 9] },
      q9: { a: [5, 6], b: [7, 8], c: [1, 2], d: [3, 4] },
      q10: { a: [2, 6], b: [1, 3], c: [5, 9], d: [4, 10] },
    };

    // 사용자의 답변을 점수에 반영
    Object.entries(answer).forEach(([key, value]) => {
      if (scoring[key as keyof ScoringType]) {
        const selected =
          scoring[key as keyof ScoringType][value as "a" | "b" | "c" | "d"] ||
          [];
        selected.forEach((id) => {
          const person = scores.find((p) => p.id === id);
          if (person) person.score += 2; // 가중치 적용
        });
      }
    });

    // 최고 점수를 받은 사람 찾기
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
