function QuestRewardItem({ item }) {
  return (
    <li>
      <p>
        {item.name}
        {(item.isUnique && " (Unique)") ||
          (item.quantity && ` (Qty.: ${item.quantity})`)}
      </p>
    </li>
  );
}

export default QuestRewardItem;
