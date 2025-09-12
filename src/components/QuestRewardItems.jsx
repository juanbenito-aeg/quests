import QuestRewardItem from "./QuestRewardItem";

function QuestRewardItems({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <QuestRewardItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default QuestRewardItems;
