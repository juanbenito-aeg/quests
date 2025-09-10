function QuestRewardItem({ item }) {
  return (
    <>
      <p>
        <strong>Name</strong>: {item.name}
      </p>

      {item.isUnique && (
        <p>
          <strong>Unique</strong>
        </p>
      )}

      {item.quantity && (
        <p>
          <strong>Quantity</strong>: {item.quantity}
        </p>
      )}
    </>
  );
}

export default QuestRewardItem;
