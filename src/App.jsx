import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentForm";
import InvestmentTable from "./components/InvestmentTable";
import { useState } from "react";
function App() {

  const [userInput, setUserInput] = useState({
        "initialInvestment": 15000,
        "annualInvestment": 70000,
        "expectedReturn": 10,
        "duration": 5
    })

    const inputIsValid = userInput.duration >= 1;

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
    { !inputIsValid &&
      <p className="center">Please enter a valid duration (minimum 1 year)</p>
    }
    { inputIsValid &&
      <InvestmentTable input={userInput} />
    }
    </>
  )
}

export default App
