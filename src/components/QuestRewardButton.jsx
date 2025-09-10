import "../styles/QuestRewardButton.css";
import goldIcon from "/gold-icon.png";
import xpIcon from "/xp-icon.png";
import itemsIcon from "/items-icon.png";

function QuestRewardButton({ rewardName, onClick }) {
  const inputProps = {
    src: "",
    alt: "",
  };

  switch (rewardName) {
    case "gold":
      inputProps.src = goldIcon;
      inputProps.alt = "Show (hide if already active) gold reward";
      break;

    case "experience":
      inputProps.src = xpIcon;
      inputProps.alt = "Show (hide if already active) experience reward";
      break;

    case "items":
      inputProps.src = itemsIcon;
      inputProps.alt = "Show (hide if already active) items reward";
      break;
  }

  return (
    <input
      className="quest-reward-button"
      type="image"
      {...inputProps}
      onClick={onClick}
      width={50}
    />
  );
}

export default QuestRewardButton;
