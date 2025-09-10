import "../styles/QuestObjective.css";

function QuestObjective({ description, isCompleted }) {
  return (
    <li>
      {description}{" "}
      <span
        className={
          "completed-or-not-circle " +
          (isCompleted ? "completed" : "uncompleted")
        }
      ></span>
    </li>
  );
}

export default QuestObjective;
