import { QuestionType } from "../utils/types";
import "./Question.css";

export const Question = ({
  question,
  options,
  answerHandler,
  image,
  isTransitioning,
}: QuestionType & { isTransitioning: boolean }) => {
  console.log(options);
  return (
    <div className={`Question ${isTransitioning ? "fade-out" : "fade-in"}`}>
      <h3>{question}</h3>
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
    </div>
  );
};
