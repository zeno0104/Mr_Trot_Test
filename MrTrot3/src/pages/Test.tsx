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
      result_title: "💍 당신의 미래 사윗감은 손빈아! 💍",
      hashtag:
        "🎤 #트로트_어린왕자 #국민사위 #노래_잘하는_사윗감 #유머감각_장착 #백두대간_완주남",
      reason_title: "✔️ 사위로서 손빈아가 뽑힌 이유!",
      reason_text: `노래 잘하는 건 기본! 유머 감각까지 갖춰서 분위기를 즐겁게 만드는 손빈아.
책임감 있게 도전하며 백두대간까지 완주한 끈기의 사나이!
MZ 감성으로 말하자면, "흥 많고 성실한 사윗감 원해? 손빈아면 고민 끝!" 🎶🔥`,
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
      result_title: "💍 당신의 미래 사윗감은 춘길! 💍",
      hashtag:
        "🎤 #감성보컬 #든든한사윗감 #도전하는남자 #스쿠버보컬 #트롯도OK #유쾌한매력남",
      reason_title: "✔️ 사위로서 춘길이 뽑힌 이유!",
      reason_text: `진한 감성과 도전 정신으로 가족을 따뜻하게 감싸줄 스타일! 다정한 성격까지 갖춘 완벽한 사윗감! 💖"`,
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
      result_title: "💍 당신의 미래 사윗감은 김용빈! 💍",
      hashtag:
        "🎤 #트로트신동 #감성장인 #믿고듣는보이스 #열정남 #부드러운카리스마 #매너남 #무대장악력",
      reason_title: "✔️ 사위로서 김용빈이 뽑힌 이유!",
      reason_text: `트로트계의 원석이자 무대를 장악하는 감성 보컬! 🎶 어린 시절부터 쌓아온 실력과 끊임없는 노력으로 탄탄한 내공을 자랑하는 그는, 든든하면서도 섬세한 배려심까지 갖춘 완벽한 사윗감! 💖 유쾌한 성격과 따뜻한 감성으로 가족과의 화합도 문제없다! 🏡✨"`,
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
      result_title: "💍 당신의 미래 사윗감은 최재명! 💍",
      hashtag:
        "🎤 #국악트롯킹 #ENTP인싸력 #정읍의아들 #전통과현대의조화 #매력만점 #예능감폭발 #반전매력남",
      reason_title: "✔️ 사위로서 최재명이 뽑힌 이유!",
      reason_text: `국악과 트로트를 넘나드는 독보적 보이스의 소유자! 🎶🔥 전통을 사랑하면서도 시대를 앞서가는 감각까지 갖춘 그야말로 하이브리드 사윗감! 💡💖 넘치는 끼와 재치, 유쾌한 성격으로 가족 모임에서도 분위기 메이커 역할 톡톡! 🏡✨ 어디서든 빛나는 존재감으로 당신의 가족을 더욱 특별하게 만들어줄 인물! 💯"`,
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
      result_title: "💍 당신의 미래 사윗감은 추혁진! 💍",
      hashtag:
        "🎤 #감성장인 #트롯신사 #부드러운카리스마 #섬세한매력 #따뜻한리더",
      reason_title: "✔️ 사위로서 추혁진이 뽑힌 이유!",
      reason_text: `부드러운 음색과 섬세한 감성 표현으로 많은 사랑을 받는 트롯계의 신사! 🎤💙 진중하면서도 유머 감각이 뛰어나 어른들에게도 사랑받는 성격! 🏡✨ 언제나 상대방을 배려하는 따뜻한 마음씨까지! 💖💫 듬직한 사윗감으로 평생 변치 않는 믿음을 줄 수 있는 추혁진! 💯"`,
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
      result_title: "💍 당신의 미래 사윗감은 박지후! 💍",
      hashtag:
        "🎤 #에어컨설치기사출신 #근면성실 #부드러운저음 #트롯청년 #성실한사윗감 #감성보컬",
      reason_title: "✔️ 사위로서 박지후 뽑힌 이유!",
      reason_text: `에어컨 설치기사로 일하며 묵묵히 꿈을 향해 달려온 근면·성실의 아이콘! 💪🔧 그의 노래에는 삶의 진정성과 깊은 감성이 담겨 있어 듣는 이의 마음을 울린다! 🎶💖 성실함과 따뜻한 배려심으로 가정에서도 든든한 사윗감이 될 것! 🏡✨ 겸손하면서도 유쾌한 매력까지 갖춘 박지후, 당신의 가족에게 큰 기쁨을 선사할 완벽한 선택! 💯`,
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
      result_title: "💍 당신의 미래 사윗감은 남승민! 💍",
      hashtag:
        "🎤 #트롯천재 #미스터트롯막내 #맑은음색 #순수청년 #다재다능 #든든한사윗감",
      reason_title: "✔️ 사위로서 남승민이 뽑힌 이유!",
      reason_text: `맑고 청아한 음색으로 사랑받는 트롯 천재! 🎶✨ 미스터트롯 막내로 등장해 귀여운 외모와 반전 가창력으로 모두를 사로잡았다! 💖 순수하고 따뜻한 성격 덕분에 가족들과도 자연스럽게 어울리는 완벽한 사윗감! 🏡💕 노래뿐만 아니라 다양한 재능을 가진 다재다능한 남승민, 당신의 가정에 행복을 더할 최고의 선택! 💯`,
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
      result_title: "💍 당신의 미래 <s>사윗감</s> 손주감은 유지우! 💍",
      hashtag:
        "🎤 #트로트신동 #미스터트롯최연소 #청아한목소리 #감성장인 #무한성장가능성",
      reason_title: "✔️ <s>사위</s> 손주로서 유지우가 뽑힌 이유!",
      reason_text: `미스터트롯3의 최연소 참가자로, 맑고 순수한 목소리로 모두를 감동시킨 트로트 신동! 🎤✨ 어린 나이에도 깊은 감성을 담아 노래하는 능력은 단연 돋보인다! 💖 순수하고 따뜻한 성격 덕분에 가족들과도 자연스럽게 어울리는 완벽한 <s>사윗</s> 손주감! 🏡💕 앞으로 무한한 성장 가능성을 가진 유지우, 당신의 가정에 큰 기쁨을 선사할 최고의 선택! 💯`,
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
      result_title: "💍 당신의 미래 사윗감은 남궁진! 💍",
      hashtag: "🎤 #매력보이스 #무대장인 #심쿵미소 #다재다능 #완벽한사위감",
      reason_title: "✔️ 사위로서 손용빈이 뽑힌 이유!",
      reason_text: `사위로서 남궁진이 뽑힌 이유! 미스터트롯3에서 뛰어난 가창력과 안정적인 무대 매너로 모든 세대를 사로잡은 남궁진! 🎶✨ 부드럽고 감미로운 목소리와 함께 강렬한 퍼포먼스까지 완벽 소화하는 다재다능한 실력자입니다. 💖 언제나 밝고 성실한 모습으로 주변을 따뜻하게 만드는 그의 성품은 가족과도 금세 가까워질 최고의 장점! 🏡💕 믿음직한 성격과 무한한 매력까지 갖춘 남궁진, 당신의 가정에 행복과 즐거움을 선물할 최고의 선택입니다! 💯`,
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
      result_title: "💍 당신의 미래 사윗감은 천록담! 💍",
      hashtag: "🎤 #트롯신예 #맑은음색 #감성장인 #무한성장가능성",
      reason_title: "✔ 사위로서 천록담이 뽑힌 이유!",
      reason_text: `'백두산 천지에서 한라산 백록담까지 사랑과 인생을 노래하는 가수'라는 독특한 매력을 가진 트롯 새싹! 🎶✨ 미스터트롯3에서 순수하고 맑은 목소리와 깊은 감성으로 대중을 사로잡았습니다. 💖 신인답지 않은 뛰어난 실력과 따뜻하고 성실한 성격 덕분에 가족들과도 잘 어울리는 완벽한 사윗감! 🏡💕 앞으로의 무한한 성장 가능성을 지닌 천록담, 당신의 가정에 큰 기쁨과 행복을 선물할 최고의 선택입니다! 💯`,
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
