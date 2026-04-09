import { useState, type ChangeEvent } from "react";
import TaskItem from "./TaskItem";
import type { TaskItemType } from "./types";

export default function ToDoList() {
  const [taskInput, setTaskInput] = useState<string>("");
  const [taskItems, setTaskItems] = useState<TaskItemType[]>([]);

  const handleTaskInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskInput(event.target.value);
  };

  const handleAdd = (): void => {
    if (taskInput) {
      setTaskItems((prev) => [
        ...prev,
        { detail: taskInput, id: crypto.randomUUID(), isComplete: false },
      ]);
      setTaskInput("");
    }
  };

  const handleComplete = (id: string): void => {
    setTaskItems((prev) => {
      return prev.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task,
      );
    });
  };

  const incompleteItems = taskItems?.filter((task) => !task.isComplete) ?? [];
  return (
    <div>
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input height={42} value={taskInput} onChange={handleTaskInput} />
          IncompleteItems: {incompleteItems.length}/{taskItems.length}
        </div>
        <button
          onClick={handleAdd}
          style={{
            marginLeft: "12px",
            borderRadius: "8px",
            width: "80px",
            height: "42px",
          }}
        >
          Add
        </button>
      </div>
      To do list
      <div>
        {taskItems.map((taskItem: TaskItemType) => (
          <TaskItem {...taskItem} handleComplete={handleComplete} />
        ))}
      </div>
    </div>
  );
}
