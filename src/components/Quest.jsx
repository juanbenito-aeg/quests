import "../styles/Quest.css";
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
  return (
    <div className="questWrapper">
      <h3>Min. Lvl.: {levelRequirement}</h3>
      <QuestData title={title} description={description} />
      <QuestRewards rewards={rewards} />
      <QuestObjectives objectives={objectives} />
      <QuestLocation zone={location.zone} coordinates={location.coordinates} />
    </div>
  );
}

export default Quest;
