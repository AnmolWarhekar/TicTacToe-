import React from "react";
import TicTacToe from "./TicTacToe/TicTacToe";

const App = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <TicTacToe />;
    </div>
  );
};

export default App;
