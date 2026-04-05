import ToggleGroup from "./ToggleGroup";

export default function Solution() {
  const buttons = ["All", "Active", "Completed"];
  return (
    <div>
      <ToggleGroup labels={buttons} />
    </div>
  );
}
