import "./App.css";
import SectionOneComponent from "./components/SectionOne/SectionOneComponent";
import SectionTwoComponent from "./components/SectionTwo/SectionTwoComponent";

function App() {
  return (
    <div className="App container">
      <div
        className="row card m-5 p-5 rounded d-flex flex-row"
        style={{ minHeight: "50vh" }}
      >
        <SectionOneComponent />
        <SectionTwoComponent />
      </div>
    </div>
  );
}

export default App;
