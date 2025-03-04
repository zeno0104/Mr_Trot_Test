import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { KakaoShareButton } from "../components/KakaoShareButton";
import { questions } from "../utils/peoples";
import "./Result.css";
import AdFitResult from "../components/AdfitResult";
export const Result = () => {
  const { id } = useParams(); // ✅ URL에서 id 가져오기
  const resultIndex = Number(id) - 1; // ✅ 배열 인덱스는 0부터 시작
  const navigate = useNavigate();

  const cardRef = useRef<HTMLDivElement>(null);

  const onDownloadBtn = async () => {
    const card = cardRef.current;
    if (!card) return;

    const buttonDiv = card.querySelector(".button") as HTMLElement;
    if (buttonDiv) {
      buttonDiv.style.position = "absolute";
      buttonDiv.style.opacity = "0";
    }

    try {
      const canvas = await html2canvas(card);
      const dataUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${questions[resultIndex].name}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("이미지 저장 중 에러 발생:", error);
    } finally {
      if (buttonDiv) {
        buttonDiv.style.position = "static";
        buttonDiv.style.opacity = "1";
      }
    }
  };

  console.log(questions[resultIndex]);
  return (
    <div className="Result" ref={cardRef}>
      <div>
        <h2 className="que">당신의 미래 사윗감은?👀</h2>
        <img className="selectedImg" src={questions[resultIndex].img} alt="" />
      </div>
      <AdFitResult />
      <div>
        <h3
          className="result_title"
          dangerouslySetInnerHTML={{
            __html: questions[resultIndex].result_title,
          }}
        />
        <div className="hashtags">
          <span>🎤</span>
          {questions[resultIndex].hashtag.map((tag, index) => (
            <p key={index} className="hashtag">
              {tag}
            </p>
          ))}
        </div>
        <h3
          className="reason_title"
          dangerouslySetInnerHTML={{
            __html: questions[resultIndex].reason_title,
          }}
        />
        <div className="reasons">
          {questions[resultIndex].reason_text.map((reason, index) => (
            <p key={index} className="reason_text">
              {reason}
            </p>
          ))}
        </div>
      </div>
      <div className="button">
        <button className="btn" onClick={() => navigate("/")}>
          사윗감 다시 찾으러 가기
        </button>
        <button className="btn" onClick={onDownloadBtn}>
          결과 저장하기
        </button>
        <KakaoShareButton resultIndex={resultIndex} />
      </div>
    </div>
  );
};
