import EsiDetail from "./EsiDetail";
import EsiSummary from "./EsiSummary";
import chennaiMembers from "./data/chennai.json";
// import wellingtonFire from "./data/wellington_fire.json";
import arakkonam2023 from "./data/arakkonam2023.json";
import tirunelveli from "./data/Tirunelveli.json";
import membersJson from "./data/members.json";

const Esi = ({esiDocType}) => {
    let totalMonthlyWages = 0;
    let totalIpContribution = 0;
    let members = [
        ...chennaiMembers, 
        // ...wellingtonFire,
        ...arakkonam2023,
        ...tirunelveli,
        // ...membersJson
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
        challanNumber: "05123121398111",
        challanCreateDate: "12-06-2023 16:32:31",
        challanSubmittedDate: "13-06-2023 12:04:48",
        transactionNumber: "CPACVEOUT8"
    }, {
        ref_id: 15,
        challanPeriod: "Jun-2023",
        challanNumber: "05123124109923",
        challanCreateDate: "07-07-2023 17:16:35",
        challanSubmittedDate: "08-07-2023 14:21:56",
        transactionNumber: "CPACWWCRN7"
    }, {
        ref_id: 16,
        challanPeriod: "Jul-2023",
        challanNumber: "05123129860506",
        challanCreateDate: "14-08-2023 17:46:42",
        challanSubmittedDate: "14-08-2023 20:30:58",
        transactionNumber: "CPACZQBME4"
    }, {
        ref_id: 17,
        challanPeriod: "Aug-2023",
        challanNumber: "05123133936673",
        challanCreateDate: "14-09-2023 19:45:18",
        challanSubmittedDate: "15-09-2023 21:54:02",
        transactionNumber: "CPADCBAJS4"
    }, {
        ref_id: 18,
        challanPeriod: "Sep-2023",
        challanNumber: "05123138232813",
        challanCreateDate: "14-10-2023 22:24:00",
        challanSubmittedDate: "15-10-2023 12:58:56",
        transactionNumber: "CPADEFFXK9"
    }, {
        ref_id: 19,
        challanPeriod: "Oct-2023",
        challanNumber: "05123142258670",
        challanCreateDate: "14-11-2023 16:04:51",
        challanSubmittedDate: "14-11-2023 16:06:06",
        transactionNumber: "CPADGHXBZ9"
    }, {
        ref_id: 20,
        challanPeriod: "Nov-2023",
        challanNumber: "05123146418683",
        challanCreateDate: "15-12-2023 15:24:59",
        challanSubmittedDate: "15-12-2023 15:25:22",
        transactionNumber: "CPADITKRG2"
    }]

    const refId = 20;
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
