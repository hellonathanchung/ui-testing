import { useState } from "react";

interface ToggleGroupProps {
  labels: string[];
}
export default function ToggleGroup(props: ToggleGroupProps) {
  const [activeButtonIndex, setActiveButtonIndex] = useState<
    number | undefined
  >();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "12px",
      }}
    >
      {props.labels.map((element, index) => (
        <div key={element}>
          <button
            style={{
              backgroundColor: activeButtonIndex === index ? "green" : "grey",
            }}
            onClick={() => setActiveButtonIndex(index)}
          >
            {element}
          </button>
        </div>
      ))}
      <p>
        Selected:{" "}
        {activeButtonIndex !== undefined
          ? props.labels[activeButtonIndex]
          : "None"}
      </p>
    </div>
  );
}
