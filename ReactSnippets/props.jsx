import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Job salary={90000} position="SDE" yoe={3} />
      <Job salary={80000} position="QA" yoe={2} />
      <Job salary={50000} position="ML" yoe={4} />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <p>{props.yoe}</p>
      <h1>{props.position}</h1>
      <p>{props.salary}</p>
    </div>
  );
};
