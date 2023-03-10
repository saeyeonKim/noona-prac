import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/rockScissorsPaper")}>
        Function 가위바위보 게임
      </button>
      <button onClick={() => navigate("/classRockScissorsPaper")}>
        AppClass 가위바위보 게임
      </button>
      <button onClick={() => navigate("/appclass")}>AppClass 연습</button>
    </div>
  );
};

export default Main;
