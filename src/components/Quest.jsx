import "../styles/Quest.css";
import questSectionsSeparator from "/quest-sections-separator.png";
import { useState } from "react";
import QuestData from "./QuestData";
import QuestRewards from "./QuestRewards";
import QuestObjectives from "./QuestObjectives";
import QuestLocation from "./QuestLocation";

function Quest({
  title,
  description,
  isActive,
  levelRequirement,
  rewards,
  objectives,
  location,
}) {
  const [isQuestActive, setIsQuestActive] = useState(isActive);

  function handleChange(e) {
    setIsQuestActive(e.target.checked);
  }

  return (
    <div
      className={`quest-wrapper ${!isQuestActive && "quest-wrapper--inactive"}`}
    >
      <input
        className="quest-checkbox"
        type="checkbox"
        checked={isQuestActive}
        onChange={handleChange}
      />

      <h3>Min. Lvl.: {levelRequirement}</h3>

      <img
        src={questSectionsSeparator}
        alt=""
        className="quest-wrapper__sections-separator"
      />

      <QuestData title={title} description={description} />

      <img
        src={questSectionsSeparator}
        alt=""
        className="quest-wrapper__sections-separator"
      />

      <QuestRewards rewards={rewards} />

      <img
        src={questSectionsSeparator}
        alt=""
        className="quest-wrapper__sections-separator"
      />

      <QuestObjectives isQuestActive={isQuestActive} objectives={objectives} />

      <img
        src={questSectionsSeparator}
        alt=""
        className="quest-wrapper__sections-separator"
      />

      <QuestLocation zone={location.zone} coordinates={location.coordinates} />
    </div>
  );
}

export default Quest;
