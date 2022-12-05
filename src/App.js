import ChildToParent from "./components/STATE_LIFTING/ChildToParent";

export default function App() {
  const data = "I am form App";

  const fetchData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <ChildToParent data={data} fetchData={fetchData} />
    </div>
  );
}
