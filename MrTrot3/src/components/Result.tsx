import { useNavigate } from "react-router-dom";
import "./Result.css";
import { ResultProps } from "../utils/types";
export const Result = ({ answer, questions }: ResultProps) => {
  const getResult = () => {
    const { a, b, c, d } = answer;

    // 각 유형별 점수를 미스터트롯3 멤버들에게 할당
    const scores = [
      { name: "손빈아", score: a + b }, // 책임감 + 유머
      { name: "김용빈", score: a + c }, // 책임감 + 자상함
      { name: "춘길", score: b + d }, // 유머 + 경제력
      { name: "최재명", score: a + d }, // 책임감 + 경제력
      { name: "추혁진", score: c + b }, // 자상함 + 유머
      { name: "박지후", score: c + d }, // 자상함 + 경제력
      { name: "남승민", score: b + c }, // 유머 + 자상함
      { name: "유지우", score: b + a }, // 유머 + 책임감
      { name: "남궁진", score: a + c }, // 책임감 + 자상함
      { name: "천록담", score: d + b }, // 경제력 + 유머
    ];

    // 점수 기준으로 내림차순 정렬
    scores.sort((x, y) => y.score - x.score);

    // 가장 높은 점수를 가진 사람 필터링
    const maxScore = scores[0].score;
    const topCandidates = scores.filter((p) => p.score === maxScore);

    // 동점자가 있으면 랜덤으로 한 명 선택
    const selected =
      topCandidates[Math.floor(Math.random() * topCandidates.length)];

    return questions.findIndex((q) => q.name === selected.name);
  };

  const resultIndex = getResult();
  console.log("resultIndex= ", resultIndex);
  const nav = useNavigate();
  return (
    <div className="Result">
      <div>
        <h2 className="que">당신의 미래 사윗감은?</h2>
        <h3 className="title">{questions[resultIndex].name}</h3>
        <img className="selectedImg" src={questions[resultIndex].img} alt="" />
      </div>
      <div className="button">
        <button className="btn" onClick={() => nav("/")}>
          돌아가기
        </button>
        <button className="btn">공유하기</button>
      </div>
    </div>
  );
};
