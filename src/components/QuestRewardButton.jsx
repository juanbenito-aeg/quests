function QuestRewardButton({ rewardName, onClick }) {
  const capitalizedRewardName =
    rewardName[0].toUpperCase() + rewardName.slice(1);

  return (
    <button type="button" onClick={onClick}>
      {capitalizedRewardName}
    </button>
  );
}

export default QuestRewardButton;
