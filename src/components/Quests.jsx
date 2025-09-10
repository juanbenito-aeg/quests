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

  return (
    <div className="quests-board">
      {quests.map((questWrapper) => {
        const quest = questWrapper.quest;

        return (
          <Quest
            key={quest.id}
            title={quest.title}
            description={quest.description}
            isActive={quest.isActive}
            levelRequirement={quest.levelRequirement}
            rewards={quest.rewards}
            objectives={quest.objectives}
            location={quest.location}
          />
        );
      })}
    </div>
  );
}

export default Quests;
