import { useState } from "react";

export default function CharacterCounter() {
  const [textInput, setTextInput] = useState<string>("");

  const maxLength = 280;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e?.target?.value ?? "");
  };

  const getColor = () => {
    if (textInput.length === maxLength) {
      return "red";
    } else if (maxLength - textInput.length <= 20) {
      return "orange";
    } else {
      return "";
    }
  };

  const handleClear = () => {
    setTextInput("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <textarea
        style={{ marginBottom: 12 }}
        maxLength={maxLength}
        onChange={(e) => handleChange(e)}
        value={textInput}
      />
      Character Count:
      <p style={{ color: getColor() }}>
        {textInput?.length}/ {maxLength}
      </p>
      <button onClick={handleClear}> Clear</button>
    </div>
  );
}
