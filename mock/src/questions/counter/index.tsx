// @ts-nocheck
import { useState } from "react";

export default function Solution() {
  const [count, setCount] = useState<number>(0);
  const [history, setHistory] = useState<number[]>();

  const handlePlus = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  const handleMinus = () => {
    setCount((prev) => {
      setHistory.push(prev - 1);
      return prev - 1;
    });
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleUndo = () => {
    if (history?.length) {
      setCount(history?.pop());
    }
  };

  return (
    <div>
      <h3>Counter with History</h3>
      <div>History</div>
      {history?.map((item) => item)}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <button onClick={handleMinus}> -</button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          count :<p>{count}</p>
        </div>
        <button onClick={handlePlus}> +</button>
      </div>
      <button onClick={handleReset}> Reset</button>
      <button onClick={handleUndo}> Undo</button>
    </div>
  );
}
