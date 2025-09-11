import "../styles/QuestObjective.css";

function QuestObjective({
  questId,
  id,
  description,
  isCompleted,
  onStatusChange,
}) {
  return (
    <label className="quest-objective-label">
      <input
        className="quest-objective-checkbox"
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => {
          onStatusChange(e, questId, id);
        }}
      />{" "}
      {description}
    </label>
  );
}

export default QuestObjective;
