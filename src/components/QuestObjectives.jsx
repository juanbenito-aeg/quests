import QuestObjective from "./QuestObjective";

function QuestObjectives({ objectives }) {
  return (
    <>
      <h3>Objectives</h3>

      <ul>
        {objectives.map((objective) => (
          <QuestObjective
            key={objective.id}
            description={objective.description}
            isCompleted={objective.completed}
          />
        ))}
      </ul>
    </>
  );
}

export default QuestObjectives;
