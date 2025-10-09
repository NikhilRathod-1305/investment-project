import { calculateInvestmentResults } from "../util/investment";

export default function InvestmentTable({input}) {
    const resultsData = calculateInvestmentResults(input);
    return (
        <>
            {console.log({resultsData})}
        </>
    )
}