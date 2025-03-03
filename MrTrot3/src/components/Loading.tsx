import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./Loading.css";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Loading = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="Loading">
      <h3>미래 사윗감 찾는중...</h3>
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
