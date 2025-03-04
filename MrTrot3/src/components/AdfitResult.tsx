import { useEffect } from "react";

const AdFitResult = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ins
      className="kakao_ad_area"
      style={{ display: "none" }}
      data-ad-unit="DAN-oXe0WsVrk3a3zwy5"
      data-ad-width="320"
      data-ad-height="50"
    ></ins>
  );
};

export default AdFitResult;
