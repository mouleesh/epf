import EsiDetail from "./EsiDetail";
import EsiSummary from "./EsiSummary";

const Esi = () => {

    let challanPeriod = "Oct-2021";
    let challanNumber = "07245211174123";
    let challanCreateDate = "04-11-2021 11:45:02";
    let challanSubmittedDate = "04-11-2021 12:02:21";
    let amountPaid = "15788.00";
    let transactionNumber = "UTWQKJEXL1";

    // let challanPeriod = "Nov-2021";
    // let challanNumber = "07245268290450";
    // let challanCreateDate = "02-12-2021 13:06:43";
    // let challanSubmittedDate = "02-12-2021 13:18:14";
    // let amountPaid = "15788.00";
    // let transactionNumber = "AHMEONCCQ8";

    const doc = "detail";
    return doc === "detail" ? <EsiDetail challanPeriod={challanPeriod}/> : <EsiSummary 
        challanPeriod={challanPeriod} 
        challanNumber={challanNumber}
        challanCreateDate={challanCreateDate}
        challanSubmittedDate={challanSubmittedDate}
        amountPaid={amountPaid}
        transactionNumber={transactionNumber} />
}

export default Esi;
