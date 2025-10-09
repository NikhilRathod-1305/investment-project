import Header from "./components/Header";
import InvestmentForm from "./components/investmentForm";
import InvestmentTable from "./components/investmentTable";
import { useState } from "react";
function App() {

  const [userInput, setUserInput] = useState({
        "initialInvestment": 15000,
        "annualInvestment": 70000,
        "expectedReturn": 10,
        "duration": 5
    })


    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return { 
                ...prevUserInput,
                [inputIdentifier]: +newValue
            }
        });
    }

  return (
    <>
    <Header />
    <InvestmentForm userInput={userInput} onInputChange={handleChange} />
    <InvestmentTable input={userInput}/>
    </>
  )
}

export default App
