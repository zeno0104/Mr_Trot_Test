import { QuestionType } from "../utils/types";
import "./Question.css";

export const Question = ({
  question,
  options,
  answerHandler,
  image,
}: QuestionType) => {
  console.log(options);
  return (
    <div className="Question">
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
