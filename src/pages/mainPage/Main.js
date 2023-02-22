import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/rockScissorsPaper")}>
        가위바위보 게임
      </button>
    </div>
  );
};

export default Main;
