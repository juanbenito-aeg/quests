function QuestLocation({ zone, coordinates }) {
  return (
    <>
      <h3>Location</h3>

      <h4>Zone</h4>
      <p>{zone}</p>

      <h4>Coordinates</h4>
      <p>{`X: ${coordinates.x} | Y: ${coordinates.y}`}</p>
    </>
  );
}

export default QuestLocation;
