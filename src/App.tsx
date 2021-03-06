import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { initializeWeb3, getWeb3, getBlockNumber} from "./services/web3";

function App() {


  const initialize = async () => {
    await initializeWeb3();
    const web3 = await getWeb3();
    console.log(web3);

    // let accounts = await web3.eth.getAccounts();

  };

  initialize();

  getBlockNumber()
    .then( result => console.log(result))
    .catch(err => console.log(err));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
