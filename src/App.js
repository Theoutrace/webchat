import logo from "./logo.svg";
import "./App.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [searchParams] = useSearchParams();
  const [clientName, setClientName] = useState("");
  const [parentUrl, setParentUrl] = useState("");

  useEffect(() => {
    window.addEventListener("message", function (event) {
      // Check if the message is from an allowed origin
      if (event.origin === "http://127.0.0.1:5500") {
        var parentSiteURL = event.data;
        setParentUrl(`Parent URL : ${parentSiteURL}`);
      }
    });
    setClientName(searchParams.get("client").toUpperCase());
  }, [searchParams]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Hello</h1>
          <h5>from {clientName}</h5>
          <h5>{parentUrl}</h5>
        </div>
      </header>
    </div>
  );
}

export default App;
