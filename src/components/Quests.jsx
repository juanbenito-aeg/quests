import "../styles/Quests.css";
import { useState, useEffect } from "react";
import Quest from "./Quest";

function Quests() {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/Oskar-Dam/f405e21a45471e736e658352270d77ff/raw/2a2b01d3cd44f9a7c4ab41ac1622fef90e388d3e/quests.json"
    )
      .then((response) => response.json())
      .then((quests) => {
        setQuests(quests);
      });
  }, []);

  function handleQuestStatusChange(e, questIndex) {
    const newQuests = [...quests];

    newQuests[questIndex].quest = {
      ...newQuests[questIndex].quest,
      isActive: e.target.checked,
    };

    setQuests(newQuests);
  }

  function handleObjectiveStatusChange(e, questId, objectiveId) {
    const newQuests = [...quests];

    const questToModify = newQuests.find(
      (quest) => quest.quest.id === questId
    ).quest;

    if (questToModify.isActive) {
      const objectiveToModify = questToModify.objectives.find(
        (objective) => objective.id === objectiveId
      );

      objectiveToModify.completed = e.target.checked;

      setQuests(newQuests);
    }
  }

  return (
    <div className="quests-board">
      {quests.map((questWrapper, index) => {
        const quest = questWrapper.quest;

        return (
          <Quest
            key={quest.id}
            id={quest.id}
            title={quest.title}
            description={quest.description}
            isActive={quest.isActive}
            onQuestStatusChange={(e) => {
              handleQuestStatusChange(e, index);
            }}
            levelRequirement={quest.levelRequirement}
            rewards={quest.rewards}
            objectives={quest.objectives}
            onObjectiveStatusChange={handleObjectiveStatusChange}
            location={quest.location}
          />
        );
      })}
    </div>
  );
}

export default Quests;
