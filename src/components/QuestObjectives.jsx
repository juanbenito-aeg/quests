import QuestObjective from "./QuestObjective";

function QuestObjectives({ questId, objectives, onObjectiveStatusChange }) {
  return (
    <>
      <h3 className="quest-section-heading">Objectives</h3>

      {objectives.map((objective) => (
        <QuestObjective
          key={objective.id}
          questId={questId}
          id={objective.id}
          description={objective.description}
          isCompleted={objective.completed}
          onStatusChange={onObjectiveStatusChange}
        />
      ))}
    </>
  );
}

export default QuestObjectives;
