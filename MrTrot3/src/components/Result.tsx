import { useNavigate } from "react-router-dom";
import "./Result.css";
import { ResultProps } from "../utils/types";
import { Loading } from "./Loading";
import { useState, useEffect, useRef } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

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

  const cardRef = useRef<HTMLDivElement>(null);

  const onDownloadBtn = () => {
    const card = cardRef.current;
    if (!card) {
      console.error("카드를 찾을 수 없습니다!");
      return;
    }

    const filter = (node: Node) => {
      if (node instanceof HTMLElement) {
        return node.tagName !== "BUTTON";
      }
      return true;
    };

    domtoimage
      .toBlob(card, { filter: filter })
      .then((blob: Blob | null) => {
        if (blob) {
          saveAs(blob, `${questions[resultIndex].name}.png`);
        }
      })
      .catch((error: string) => {
        console.error("이미지 저장 중 에러 발생:", error);
      });
  };

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <Loading />
        </div>
      ) : (
        <div className="Result" ref={cardRef}>
          <div>
            <h2 className="que">당신의 미래 사윗감은?👀</h2>
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
            <div className="hashtags">
              {questions[resultIndex].hashtag.map(
                (tag: string, index: number) => (
                  <p key={index} className="hashtag">
                    {tag}
                  </p>
                )
              )}
            </div>
            <h3
              className="reason_title"
              dangerouslySetInnerHTML={{
                __html: questions[resultIndex].reason_title,
              }}
            />
            <div className="reasons">
              {questions[resultIndex].reason_text.map(
                (reason: string, index: number) => (
                  <p key={index} className="reason_text">
                    {reason}
                  </p>
                )
              )}
            </div>
          </div>
          <div className="button">
            <button className="btn" onClick={() => nav("/")}>
              사윗감 다시 찾으러 가기
            </button>
            <button className="btn" onClick={onDownloadBtn}>
              저장하기
            </button>
            <button className="btn btn_kakao">카카오톡 공유하기</button>
          </div>
        </div>
      )}
    </>
  );
};
