import { useEffect, useState } from "react";

type TrafficColor = "red" | "yellow" | "green";
interface Light {
  delay: number;
  id: string;
  color: TrafficColor;
}

const lightColors: Light[] = [
  {
    color: "red",
    delay: 4000,
    id: "red",
  },
  { color: "yellow", delay: 2000, id: "yellow" },
  { color: "green", delay: 4000, id: "green" },
];
export default function LightSwitch() {
  const [activeLightKey, setActiveLightKey] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const isLightActive = (id: string): boolean => {
    return lightColors[activeLightKey].id === id;
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }
    const timerId = setInterval(() => {
      setActiveLightKey((prev) => (prev + 1) % lightColors.length);
    }, lightColors[activeLightKey].delay);

    return () => clearInterval(timerId);
  }, [activeLightKey, isPaused]);

  const handleNext = () => {
    setActiveLightKey((prev) => (prev + 1) % lightColors.length);
  };

  const handlePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div>
      <div>
        {lightColors.map((lightColor) => {
          return (
            <div
              key={lightColor.id}
              style={{
                height: 12,
                width: 12,
                marginBottom: 12,
                backgroundColor: lightColor.color,
                opacity: isLightActive(lightColor.id) ? 1 : 0.3,
                borderRadius: "100%",
              }}
            />
          );
        })}
      </div>
      <button onClick={handleNext}> Next</button>
      <button onClick={handlePause}>{isPaused ? "Resume" : "Paused"} </button>
      <p>Active Light Color: {lightColors[activeLightKey].color}</p>
    </div>
  );
}
