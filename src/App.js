import logo from "./logo.svg";
import "./App.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [searchParams] = useSearchParams();
  const [clientName, setClientName] = useState("");

  useEffect(() => {
    setClientName(searchParams.get("client").toUpperCase());
  }, [searchParams]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Hello</h1>
          <h5>from {clientName}</h5>
        </div>
      </header>
    </div>
  );
}

export default App;
