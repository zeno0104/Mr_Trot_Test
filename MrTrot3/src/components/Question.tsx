import { QuestionType } from "../utils/types";
import "./Question.css";

export const Question = ({
  question,
  options,
  answerHandler,
  image,
  isTransitioning,
  curIndex,
}: QuestionType & { isTransitioning: boolean }) => {
  return (
    <div className={`Question ${isTransitioning ? "fade-out" : "fade-in"}`}>
      <h3 className="questionText">{question}</h3>
      <img src={image} alt="" className="image" />
      {Object.entries(options).map(([key, value]) => (
        <button
          className="selectBtn"
          onClick={answerHandler}
          key={key}
          value={key}
        >
          {value}
        </button>
      ))}
      <p>{curIndex + 1}/10</p>
    </div>
  );
};
