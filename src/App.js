import { useEffect } from "react";
import "./App.css";
import Tasklist from "./components/Tasklist";
import InputField from "./components/InputField";
import Header from "./components/Header";
import { useGlobalContext } from "./context";

function App() {
  const { theme } = useGlobalContext();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

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
