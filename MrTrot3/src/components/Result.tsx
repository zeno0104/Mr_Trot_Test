import { useNavigate } from "react-router-dom";
import "./Result.css";
import { ResultProps } from "../utils/types";
import { Loading } from "./Loading";
import { useState, useEffect } from "react";

export const Result = ({ answer, questions }: ResultProps) => {
  const getResult = () => {
    const { a, b, c, d } = answer;

    const scores = [
      { name: "손빈아", score: a + b },
      { name: "춘길", score: a + c },
      { name: "김용빈", score: b + d },
      { name: "최재명", score: a + d },
      { name: "추혁진", score: c + b },
      { name: "박지후", score: c + d },
      { name: "남승민", score: b + c },
      { name: "유지우", score: b + a },
      { name: "남궁진", score: a + c },
      { name: "천록담", score: d + b },
    ];

    scores.sort((x, y) => y.score - x.score);
    const maxScore = scores[0].score;
    const topCandidates = scores.filter((p) => p.score === maxScore);
    const selected =
      topCandidates[Math.floor(Math.random() * topCandidates.length)];

    return questions.findIndex((q) => q.name === selected.name);
  };

  const resultIndex = getResult();
  const nav = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <Loading />
        </div>
      ) : (
        <div className="Result">
          <div>
            <h2 className="que">당신의 미래 사윗감은?👀</h2>
            <h3 className="title">{questions[resultIndex].name}</h3>
            <img
              className="selectedImg"
              src={questions[resultIndex].img}
              alt=""
            />
          </div>
          <div>
            <h3
              className="result_title"
              dangerouslySetInnerHTML={{
                __html: questions[resultIndex].result_title,
              }}
            />
            <h4 className="hashtag">{questions[resultIndex].hashtag}</h4>
            <h3
              className="reason_title"
              dangerouslySetInnerHTML={{
                __html: questions[resultIndex].reason_title,
              }}
            />
            <h3
              className="reason_text"
              dangerouslySetInnerHTML={{
                __html: questions[resultIndex].reason_text,
              }}
            />
          </div>
          <div className="button">
            <button className="btn" onClick={() => nav("/")}>
              돌아가기
            </button>
            <button className="btn">공유하기</button>
          </div>
        </div>
      )}
    </>
  );
};
