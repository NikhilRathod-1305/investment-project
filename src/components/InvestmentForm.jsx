import { useState } from "react"
export default function InvestmentForm() {

const [userInput,setUserInput] = useState({
    "initialInvestment": 15000,
    "annualInterestRate": 7,
    "expectedReturn": 10,
    "duration": 5
})

function handleChange(inputIdentifier , newValue) {
    setUserInput(prevUserInput => {
        return {...prevUserInput, [inputIdentifier]: newValue}
    });
}

    return (
        <section id="user-input">
            <div className="input-group">
            <p>
                <label>Initial Investment:</label>
                <input type="number" value={userInput.initialInvestment} onChange={(event) => handleChange("initialInvestment", event.target.value)}/>
            </p>
            <p>
                <label>Annual Interest Rate:</label>
                <input type="number" value={userInput.annualInterestRate} onChange={(event) => handleChange("annualInterestRate", event.target.value)}/>
            </p>
            </div>
            <div className="input-group">
            <p>
                <label>Expected Return:</label>
                <input type="number" value={userInput.expectedReturn} onChange={(event) => handleChange("expectedReturn", event.target.value)}/>
            </p>
            <p>
                <label>Duration:</label>
                <input type="number" value={userInput.duration} onChange={(event) => handleChange("duration", event.target.value)}/>
            </p>
            </div>
        </section>
    )
}