import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./Loading.css";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Loading = () => {
  return (
    <div className="Loading">
      <h3>미래 사윗감 찾는중...</h3>
      <ClipLoader
        color={"#ffffff"}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
