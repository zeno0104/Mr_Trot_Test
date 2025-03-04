import { useEffect } from "react";

const AdFit = () => {
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
      data-ad-unit="DAN-1E7cOX6F7AwPsHod"
      data-ad-width="320"
      data-ad-height="100"
    ></ins>
  );
};

export default AdFit;
