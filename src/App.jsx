import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    //pox o impostare 4 variabili di stato o una sola creando un oggetto//
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  //funzione che viene attivata ogni volta che cambiamo uno dei valori(pox scrivere 4 funzioni o una sola)//
  function handleChange(inputIdentifier, newValue) {
    //mi aspetto di ricevere da qst funzione inputidentifier e un un nuovo valore //
    setUserInput((prevUserInput) => {
      //prevUserInput è il vecchio valore cioè userInput( quando all'interno di setUserinput uso una funzione il primo argomento sarè sempre il valore di partenza a prescindere da come lo chiamo)
      return {
        ...prevUserInput, //prendi l'oggetto prevUserInput di partenza //
        [inputIdentifier]: +newValue, //prendi la chiave dell'oggetto che è stata cambiata inputIdentifier e sostituisci il suo valore con il nuovo//
      };
    });
  }
  return (
    <>
      <Header />

      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </>
  );
}

export default App;
