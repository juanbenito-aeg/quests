import "../styles/QuestObjective.css";
import { useState } from "react";

function QuestObjective({ isQuestActive, description, isCompleted }) {
  const [isObjCompleted, setIsObjCompleted] = useState(isCompleted);

  function handleChange(e) {
    if (isQuestActive) {
      setIsObjCompleted(e.target.checked);
    }
  }

  return (
    <label className="quest-objective-label">
      <input
        className="quest-objective-checkbox"
        type="checkbox"
        checked={isObjCompleted}
        onChange={handleChange}
      />{" "}
      {description}
    </label>
  );
}

export default QuestObjective;
