import "../styles/Quest.css";
import questSectionsSeparator from "/quest-sections-separator.png";
import QuestData from "./QuestData";
import QuestRewards from "./QuestRewards";
import QuestObjectives from "./QuestObjectives";
import QuestLocation from "./QuestLocation";

function Quest({
  id,
  title,
  description,
  isActive,
  onQuestStatusChange,
  levelRequirement,
  rewards,
  objectives,
  onObjectiveStatusChange,
  location,
}) {
  return (
    <div
      className={`quest-wrapper ${!isActive ? "quest-wrapper--inactive" : ""}`}
    >
      <input
        className="quest-checkbox"
        type="checkbox"
        checked={isActive}
        onChange={onQuestStatusChange}
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

      <QuestObjectives
        questId={id}
        objectives={objectives}
        onObjectiveStatusChange={onObjectiveStatusChange}
      />

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
