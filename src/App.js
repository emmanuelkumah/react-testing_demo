import "./App.css";
import Finder from "./components/Finder";
import Greetings from "./components/Greetings";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Greetings />
      <Login />
      <Finder />
    </div>
  );
}

export default App;
