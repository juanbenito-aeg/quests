import QuestObjective from "./QuestObjective";

function QuestObjectives({ isQuestActive, objectives }) {
  return (
    <>
      <h3 className="quest-section-heading">Objectives</h3>

      {objectives.map((objective) => (
        <QuestObjective
          key={objective.id}
          isQuestActive={isQuestActive}
          description={objective.description}
          isCompleted={objective.completed}
        />
      ))}
    </>
  );
}

export default QuestObjectives;
