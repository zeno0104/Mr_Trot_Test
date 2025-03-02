export interface Answer {
  a: number;
  b: number;
  c: number;
  d: number;
}

export interface Question {
  name: string;
  title: string;
  options: { a: string; b: string; c: string; d: string };
  img: string;
}
export interface ResultProps {
  answer: Answer;
  questions: Question[];
}
export interface QuestionType {
  question: string;
  options: Question["options"];
  answerHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  image: string;
}
