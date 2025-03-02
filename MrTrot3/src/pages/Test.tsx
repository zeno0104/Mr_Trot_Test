import { useEffect, useState } from "react";
import { Question } from "../components/Question";
import { Result } from "../components/Result";
import { Answer } from "../utils/types";

export const Test = () => {
  const [curIndex, setCurIndex] = useState(0);
  const [answer, setAnswer] = useState<Answer>({ a: 0, b: 0, c: 0, d: 0 });
  const [showResult, setShowResult] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const questions = [
    {
      name: "손빈아",
      title: "사윗감의 가장 중요한 덕목은?",
      options: { a: "책임감", b: "유머감각", c: "자상함", d: "경제력" },
      img: "./1.png",
    },
    {
      name: "춘길",
      title: "장인·장모님(부모님)께 가장 잘할 것 같은 사람은?",
      options: {
        a: "예의 바르고 공손한 사람",
        b: "분위기 메이커인 사람",
        c: "살뜰하게 챙기는 사람",
        d: "선물 공세를 하는 사람",
      },
      img: "./2.jpg",
    },
    {
      name: "김용빈",
      title: "사윗감의 외모 스타일은?",
      options: {
        a: "단정하고 깔끔한 스타일",
        b: "개성 넘치는 패션 감각",
        c: "부드럽고 따뜻한 인상",
        d: "남자다운 강렬한 느낌",
      },
      img: "./3.avif",
    },
    {
      name: "최재명",
      title: "미래 사윗감의 직업이 있다면 어떤 스타일?",
      options: {
        a: "공무원처럼 안정적인 직업",
        b: "연예인처럼 매력적인 직업",
        c: "요리사처럼 가정을 잘 돌볼 수 있는 직업",
        d: "사업가처럼 야망 있는 직업",
      },
      img: "./4.avif",
    },
    {
      name: "추혁진",
      title: "가족 여행을 간다면 사윗감이 어떤 역할을 하면 좋을까?",
      options: {
        a: "운전과 계획을 완벽하게 짜주는 사람",
        b: "분위기를 띄우며 모두를 즐겁게 하는 사람",
        c: "하나하나 세심하게 챙겨주는 사람",
        d: "비용을 부담하며 모두를 편하게 해주는 사람",
      },
      img: "./5.jpg",
    },
    {
      name: "박지후",
      title: "사윗감의 성격은?",
      options: {
        a: "신중하고 책임감 있는 스타일",
        b: "발랄하고 장난기 많은 스타일",
        c: "다정다감한 로맨틱한 스타일",
        d: "카리스마 있고 강한 스타일",
      },
      img: "./6.jpg",
    },
    {
      name: "남승민",
      title: "미래 사윗감이 당신(혹은 딸)과 싸웠을 때 어떻게 했으면 좋겠는가?",
      options: {
        a: "조용히 해결책을 찾고 이야기하는 스타일",
        b: "웃으면서 화를 풀어주는 스타일",
        c: "미안하다고 감성적으로 사과하는 스타일",
        d: "선물이나 이벤트로 화를 푸는 스타일",
      },
      img: "./7.webp",
    },
    {
      name: "유지우",
      title: "사윗감이 가진 특별한 능력이 있다면?",
      options: {
        a: "인내심과 끈기",
        b: "예능감과 유머",
        c: "요리나 살림 실력",
        d: "돈을 잘 버는 능력",
      },
      img: "./8.jpg",
    },
    {
      name: "남궁진",
      title: "사윗감이 평소에 부르는 애칭은?",
      options: {
        a: "여보 / 자기야",
        b: "애기야 / 야 너!",
        c: "사랑아 / 그대여",
        d: "공주님 / 마나님",
      },
      img: "./9.jpg",
    },
    {
      name: "천록담",
      title: "마지막으로 사윗감이 어떤 가정을 꾸렸으면 좋겠는가?",
      options: {
        a: "안정적이고 단란한 가정",
        b: "언제나 웃음이 끊이지 않는 가정",
        c: "서로를 아껴주고 위하는 가정",
        d: "경제적으로 풍족한 가정",
      },
      img: "./10.avif",
    },
  ];
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
        setShowResult(true);
      }
      setIsTransitioning(false);
    }, 300); // 0.3초 후 변경 (부드러운 전환)
  };
  return (
    <div>
      {!showResult ? (
        <Question
          question={questions[curIndex].title}
          options={questions[curIndex].options}
          image={questions[curIndex].img}
          answerHandler={answerHandler}
          isTransitioning={isTransitioning}
        />
      ) : (
        <Result answer={answer} questions={questions} />
      )}
    </div>
  );
};
