import QuestRewardItem from "./QuestRewardItem";

function QuestRewardItems({ items }) {
  return (
    <ol>
      {items.map((item) => (
        <QuestRewardItem key={item.id} item={item} />
      ))}
    </ol>
  );
}

export default QuestRewardItems;
