import "../styles/QuestRewards.css";
import { useState } from "react";
import QuestRewardItems from "./QuestRewardItems";
import QuestRewardButton from "./QuestRewardButton";

function QuestRewards({ rewards }) {
  const [activeReward, setActiveReward] = useState();

  const rewardNames = Object.keys(rewards);

  let activeRewardContent;
  switch (activeReward) {
    case "gold":
      activeRewardContent = <p>{rewards.gold} Gold Coins</p>;
      break;

    case "experience":
      activeRewardContent = <p>{rewards.experience} Experience Points</p>;
      break;

    case "items":
      activeRewardContent = <QuestRewardItems items={rewards.items} />;
      break;
  }

  return (
    <>
      <h3 className="quest-section-heading">Rewards</h3>

      <div className="quest-reward-buttons">
        {rewardNames.map((rewardName) => (
          <QuestRewardButton
            key={rewardName}
            rewardName={rewardName}
            onClick={() => {
              let newActiveReward;

              if (activeReward !== rewardName) {
                newActiveReward = rewardName;
              }

              setActiveReward(newActiveReward);
            }}
          />
        ))}
      </div>

      <div className={activeReward && "quest-reward"}>
        {activeRewardContent}
      </div>
    </>
  );
}

export default QuestRewards;
