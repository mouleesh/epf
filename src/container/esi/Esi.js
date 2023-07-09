import EsiDetail from "./EsiDetail";
import EsiSummary from "./EsiSummary";
import chennaiMembers from "./data/chennai.json";
import wellingtonFire from "./data/wellington_fire.json";
import arakkonam2023 from "./data/arakkonam2023.json";

const Esi = ({esiDocType}) => {
    let totalMonthlyWages = 0;
    let totalIpContribution = 0;
    let members = [
        // ...chennaiMembers, 
        ...wellingtonFire,
        ...arakkonam2023
    ];
    
    members.sort(function(a, b) {
        const nameA = a.name.toUpperCase(); 
        const nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    members.forEach((member) => {
        totalMonthlyWages = parseInt(member.monthlyWages) + totalMonthlyWages
        totalIpContribution = Math.round(member.monthlyWages * 0.0075) + totalIpContribution
    })

    // let challanPeriod = "Oct-2021";
    // let challanNumber = "07245211174123";
    // let challanCreateDate = "04-11-2021 11:45:02";
    // let challanSubmittedDate = "04-11-2021 12:02:21";
    // let amountPaid = "15788.00";
    // let transactionNumber = "UTWQKJEXL1";

    const monthlyVariables = [{
        ref_id: 0,
        challanPeriod: "Mar-2022",
        challanNumber: "09225812175120",
        challanCreateDate: "02-04-2022 12:32:06",
        challanSubmittedDate: "02-04-2022 13:09:54",
        transactionNumber: "EXLPQYVRFJ2"
    },{
        ref_id: 1,
        challanPeriod: "Apr-2022",
        challanNumber: "09225812184164",
        challanCreateDate: "04-05-2022 11:49:01",
        challanSubmittedDate: "04-05-2022 12:20:32",
        transactionNumber: "SQDFKYPEWG1"
    },{
        ref_id: 2,
        challanPeriod: "May-2022",
        challanNumber: "09225812192320",
        challanCreateDate: "05-06-2022 16:15:11",
        challanSubmittedDate: "05-06-2022 16:36:07",
        transactionNumber: "XGPLZOINRF2"
    },{
        ref_id: 3,
        challanPeriod: "Jun-2022",
        challanNumber: "09225812210823",
        challanCreateDate: "03-06-2022 10:31:22",
        challanSubmittedDate: "03-06-2022 11:10:56",
        transactionNumber: "CMQESDLEBB6"
    },{
        ref_id: 4,
        challanPeriod: "Jul-2022",
        challanNumber: "09225615231040",
        challanCreateDate: "04-08-2022 12:02:34",
        challanSubmittedDate: "04-08-2022 12:32:06",
        transactionNumber: "IUHJASNMDS6"
    },{
        ref_id: 5,
        challanPeriod: "Aug-2022",
        challanNumber: "09225615292381",
        challanCreateDate: "05-09-2022 09:54:47",
        challanSubmittedDate: "05-09-2022 10:08:12",
        transactionNumber: "PKWIERHJGF3"
    },{
        ref_id: 6,
        challanPeriod: "Sep-2022",
        challanNumber: "09225615341263",
        challanCreateDate: "06-10-2022 11:32:12",
        challanSubmittedDate: "05-09-2022 12:04:37",
        transactionNumber: "BTSVQDUCMB5"
    },{
        ref_id: 7,
        challanPeriod: "Oct-2022",
        challanNumber: "09225615372201",
        challanCreateDate: "05-09-2022 09:54:47",
        challanSubmittedDate: "05-09-2022 10:08:12",
        transactionNumber: "KWCHZQRJAJ1"
    },{
        ref_id: 8,
        challanPeriod: "Nov-2022",
        challanNumber: "09272514362431",
        challanCreateDate: "02-12-2022 10:12:36",
        challanSubmittedDate: "02-12-2022 10:48:11",
        transactionNumber: "HGFVBJYMGH7"
    },{
        ref_id: 9,
        challanPeriod: "Dec-2022",
        challanNumber: "09272514116532",
        challanCreateDate: "03-01-2023 09:54:03",
        challanSubmittedDate: "03-01-2023 10:15:41",
        transactionNumber: "POLKJHERHB5"
    },{
        ref_id: 10,
        challanPeriod: "Jan-2023",
        challanNumber: "09272289413521",
        challanCreateDate: "06-02-2023 13:00:54",
        challanSubmittedDate: "06-02-2023 13:28:03",
        transactionNumber: "TREMNBVRIG5"
    }, {
        ref_id: 11,
        challanPeriod: "Feb-2023",
        challanNumber: "09272438761543",
        challanCreateDate: "15-03-2023 14:32:17",
        challanSubmittedDate: "15-03-2023 14:41:53",
        transactionNumber: "DKIFGUHJI98"
    }, {
        ref_id: 12,
        challanPeriod: "Mar-2023",
        challanNumber: "09272443132422",
        challanCreateDate: "02-04-2022 12:32:06",
        challanSubmittedDate: "02-04-2022 12:32:06",
        transactionNumber: "EXLPQYVRFJ2"
    }, {
        ref_id: 13,
        challanPeriod: "Apr-2023",
        challanNumber: "09272451234232",
        challanCreateDate: "04-05-2022 11:49:01",
        challanSubmittedDate: "04-05-2022 12:20:32",
        transactionNumber: "SQDFKYPEWG1"
    }, {
        ref_id: 14,
        challanPeriod: "May-2023",
        challanNumber: "09272456321525",
        challanCreateDate: "12-06-2023 16:32:31",
        challanSubmittedDate: "13-06-2023 12:04:48",
        transactionNumber: "CPACVEOUT8"
    }]

    const refId = 12;
    const { challanPeriod, challanNumber, challanCreateDate, challanSubmittedDate, transactionNumber } = monthlyVariables[refId];

    return esiDocType === "detail" ? 
        <EsiDetail 
            challanPeriod={challanPeriod}
            members={members}
            totalMonthlyWages={totalMonthlyWages}
            totalIpContribution={totalIpContribution}/> 
        : <EsiSummary 
            challanPeriod={challanPeriod} 
            challanNumber={challanNumber}
            challanCreateDate={challanCreateDate}
            challanSubmittedDate={challanSubmittedDate}
            amountPaid={`${(totalIpContribution + (totalMonthlyWages*0.0325)).toFixed(2)}`}
            transactionNumber={transactionNumber} />
}

export default Esi;
