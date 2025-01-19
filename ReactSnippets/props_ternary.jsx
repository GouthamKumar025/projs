import "./styles.css";

export default function App() {
  const planets = [
    { name: "Mars", isGasplanet: false },
    { name: "Earth", isGasplanet: false },
    { name: "Jupiter", isGasplanet: true },
    { name: "Venus", isGasplanet: false },
    { name: "Neptune", isGasplanet: true },
    { name: "Uranus", isGasplanet: true },
  ];
  return (
    <div className="App">
      <PlanetDisplay planets={planets} />;
    </div>
  );
}

const PlanetDisplay = ({ planets }) => {
  return (
    <div>
      {planets.map((planet, key) =>
        planet.isGasplanet ? <h1 key={key}>{planet.name}</h1> : null
      )}
    </div>
  );
};
