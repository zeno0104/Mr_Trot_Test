import { useEffect } from "react";
import "./KakaoShareButton.css";

const KakaoShareButton: React.FC = () => {
  useEffect(() => {
    // SDK가 없으면 동적으로 추가
    if (typeof window !== "undefined" && !window.Kakao) {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.js";
      script.async = true;
      script.onload = () => {
        if (window.Kakao) {
          if (!window.Kakao.isInitialized()) {
            window.Kakao.init(import.meta.env.VITE_KAKAO_APP_KEY);
          }
        }
      };
      document.head.appendChild(script);
    } else {
      // 이미 로드된 경우 초기화
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(import.meta.env.VITE_KAKAO_APP_KEY);
      }
    }
  }, []);

  const handleShare = () => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      console.error("카카오 SDK가 로드되지 않았거나 초기화되지 않았습니다.");
      return;
    }

    try {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "💍 당신의 미래 사윗감은 남궁진! 💍",
          description: "내 포춘쿠키 결과 공유",
          imageUrl:
            "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      });
    } catch (error) {
      console.error("카카오 공유하기 오류 발생:", error);
    }
  };

  return (
    <div className="KakaoShareButton">
      <button className="btn kakao" onClick={handleShare}>
        <span>카카오톡 공유하기</span>
      </button>
    </div>
  );
};

export { KakaoShareButton };
