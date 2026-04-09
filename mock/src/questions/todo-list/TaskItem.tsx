import type { TaskItemType } from "./types";

interface Props extends TaskItemType {
  handleComplete: (id: string) => void;
}

export default function TaskItem(props: Props) {
  const { isComplete, detail, handleComplete, id } = props;

  return (
    <div>
      <input
        id={id}
        type="checkbox"
        checked={isComplete}
        onClick={() => handleComplete(id)}
      />
      {detail}
    </div>
  );
}
