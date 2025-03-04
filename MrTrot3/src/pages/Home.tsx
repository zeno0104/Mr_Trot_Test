import { useNavigate } from "react-router-dom";
import "./Home.css";
import AdFit from "../components/Adfit";

export const Home = () => {
  const nav = useNavigate();
  return (
    <div className="Home">
      <div>
        <p className="home_title">미스터트롯3 미래 사윗감 테스트🤵‍♂️</p>
        <p className="subTitle">나의 미래 사윗감은 누구일까?👀</p>
      </div>
      <div>
        <img src="./sungju.png" alt="" />
      </div>
      <div>
        <button className="btn" onClick={() => nav("/test")}>
          미래 사윗감 찾기
        </button>
        <AdFit />
      </div>
    </div>
  );
};
