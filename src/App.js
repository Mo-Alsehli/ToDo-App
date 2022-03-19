import "./App.css";
import Tasklist from "./components/Tasklist";
import InputField from "./components/InputField";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <main>
        <div className="container">
          <Header />
          <InputField />
          <Tasklist />
        </div>
      </main>
    </div>
  );
}

export default App;
