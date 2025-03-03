import { useEffect } from "react";
import "./KakaoShareButton.css";
const KakaoShareButton: React.FC = () => {
  useEffect(() => {
    // 카카오톡 SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.cleanup();
      window.Kakao.init(import.meta.env.VITE_KAKAO_APP_KEY);
    }
  }, []);

  const handleShare = () => {
    if (window.Kakao) {
      // 카카오톡 공유 기능 호출
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
