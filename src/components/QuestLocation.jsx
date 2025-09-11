import "../styles/QuestLocation.css";

function QuestLocation({ zone, coordinates }) {
  return (
    <>
      <h3 className="quest-section-heading">Location</h3>

      <h4>Zone</h4>
      <p>{zone}</p>

      <h4 className="quest-location-coordinates-heading">Coordinates</h4>
      <p>{`X: ${coordinates.x} | Y: ${coordinates.y}`}</p>
    </>
  );
}

export default QuestLocation;
