import QuestRewardItem from "./QuestRewardItem";

function QuestRewardItems({ items }) {
  return (
    <div>
      {items.map((item) => (
        <QuestRewardItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default QuestRewardItems;
