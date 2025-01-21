import "./styles.css";
import VirtualizedList from "./VirtualizedList";

export default function App() {
  const data = Array.from({ length: 1000 }, (_, i) => ` Product ${i + 1} `);
  return (
    <div className="App">
      <h1>13. Implement a Virtualized List</h1>
      <VirtualizedList data={data} />
    </div>
  );
}
