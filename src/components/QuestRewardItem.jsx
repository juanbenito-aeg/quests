function QuestRewardItem({ item }) {
  let listStyleImage;
  switch (item.type) {
    case "sword":
      listStyleImage = "url(/item-sword.svg)";
      break;

    case "consumable":
      listStyleImage = "url(/item-consumable.svg)";
      break;

    case "quest_item":
      listStyleImage = "url(/item-quest-item.svg)";
      break;

    case "scroll":
      listStyleImage = "url(/item-scroll.svg)";
      break;

    case "dagger":
      listStyleImage = "url(/item-dagger.svg)";
      break;

    case "armor":
      listStyleImage = "url(/item-armor.svg)";
      break;

    case "artifact":
      listStyleImage = "url(/item-artifact.svg)";
      break;

    case "amulet":
      listStyleImage = "url(/item-amulet.svg)";
      break;

    case "helm":
      listStyleImage = "url(/item-helm.svg)";
      break;

    case "weapon":
      listStyleImage = "url(/item-weapon.svg)";
      break;
  }

  return (
    <li style={{ listStyleImage }}>
      <p>
        {item.name}
        {(item.isUnique && " (Unique)") ||
          (item.quantity && ` (Qty.: ${item.quantity})`)}
      </p>
    </li>
  );
}

export default QuestRewardItem;
