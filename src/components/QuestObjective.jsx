import "../styles/QuestObjective.css";

function QuestObjective({ description, isCompleted }) {
  return (
    <li>
      {description}{" "}
      <div
        className={
          "completed-or-not-circle " +
          (isCompleted ? "completed" : "uncompleted")
        }
      ></div>
    </li>
  );
}

export default QuestObjective;
