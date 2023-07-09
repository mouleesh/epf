import Header from './Header';
import MainPage from './MainPage';
import MemberTable from './MemberTable';
import LastPage from './LastPage';
import generalMembers from "./data/members.json";
// import akmMembers from "./data/arakkonam.json";
import akm2023Members from "./data/arakkonam2023.json";
// import wellingtonMembers from "./data/wellington_backup.json";
import wellingtonMembersFire from "./data/wellington_fire.json";
import wellingtonDsscUpkeep from "./data/wellington_dssc_upkeep.json";
// import lakshadweepMembers from "./data/lakshadweep.json";
// import hyderabadMembers from "./data/hyderabad.json";
import tirunelveliMembers from "./data/tirunelveli.json";
import { useState } from 'react';


const Epf = () => {

    const members = [
      ...generalMembers,
      // ...akmMembers,
      // ...wellingtonMembers,
      ...wellingtonMembersFire,
      // ...lakshadweepMembers,
      // ...hyderabadMembers,
      ...wellingtonDsscUpkeep,
      ...tirunelveliMembers,
      ...akm2023Members
    ]

    // const headerText = "EMPLOYEE'S PROVIDENT FUND";
    const [headerText, setHeaderText] = useState("EMPLOYEE'S PROVIDENT FUND")
    

    const monthlyVariables = [{
      wageMonth: "FEB-2022",
      uploadedDateTime: "07-MAR-2022 11:34",
      returnMonth: "MAR-2022",
      ecrId: "69915869",
      salaryDisbuDate: "01-MAR-2022"
    },{
      wageMonth: "JAN-2022",
      uploadedDateTime: "03-FEB-2022 16:06",
      returnMonth: "FEB-2022",
      ecrId: "68625862",
      salaryDisbuDate: "01-FEB-2022"
    },{
      wageMonth: "MAR-2022",
      uploadedDateTime: "07-APR-2022 14:25",
      returnMonth: "APR-2022",
      ecrId: "71216296",
      salaryDisbuDate: "01-APR-2022"
    },{
      wageMonth: "APR-2022",
      uploadedDateTime: "05-MAY-2022 12:14",
      returnMonth: "MAY-2022",
      ecrId: "72255249",
      salaryDisbuDate: "01-MAY-2022"
    },{
      wageMonth: "MAY-2022",
      uploadedDateTime: "03-JUN-2022 15:02",
      returnMonth: "JUN-2022",
      ecrId: "73632738",
      salaryDisbuDate: "01-JUN-2022"
    },{
      wageMonth: "JUN-2022",
      uploadedDateTime: "01-JUL-2022 20:18",
      returnMonth: "JUL-2022",
      ecrId: "74876630",
      salaryDisbuDate: "01-JUL-2022"
    },{
      wageMonth: "JUL-2022",
      uploadedDateTime: "08-AUG-2022 16:44",
      returnMonth: "AUG-2022",
      ecrId: "76563680",
      salaryDisbuDate: "01-AUG-2022"
    },{
      wageMonth: "AUG-2022",
      uploadedDateTime: "14-SEP-2022 10:55",
      returnMonth: "SEP-2022",
      ecrId: "78366287",
      salaryDisbuDate: "01-SEP-2022"
    }, {
      wageMonth: "SEP-2022",
      uploadedDateTime: "06-OCT-2022 10:11",
      returnMonth: "OCT-2022",
      ecrId: "79051950",
      salaryDisbuDate: "01-OCT-2022"
    }, {
      wageMonth: "OCT-2022",
      uploadedDateTime: "02-NOV-2022 10:46",
      returnMonth: "NOV-2022",
      ecrId: "80220618",
      salaryDisbuDate: "01-NOV-2022"
    }, {
      ref_id: 10,
      wageMonth: "NOV-2022",
      uploadedDateTime: "02-DEC-2022 09:42",
      returnMonth: "DEC-2022",
      ecrId: "81528614",
      salaryDisbuDate: "01-DEC-2022"
    }, {
      ref_id: 11,
      wageMonth: "DEC-2022",
      uploadedDateTime: "02-JAN-2023 13:04",
      returnMonth: "JAN-2023",
      ecrId: "82852301",
      salaryDisbuDate: "01-JAN-2023"
    }, {
      ref_id: 12,
      wageMonth: "JAN-2023",
      uploadedDateTime: "13-FEB-2023 11:52",
      returnMonth: "FEB-2023",
      ecrId: "84865630",
      salaryDisbuDate: "01-FEB-2023"
    }, {
      ref_id: 13,
      wageMonth: "FEB-2023",
      uploadedDateTime: "15-MAR-2023 13:16",
      returnMonth: "MAR-2023",
      ecrId: "86462539",
      salaryDisbuDate: "01-MAR-2023"
    }, {
      ref_id: 14,
      wageMonth: "MAR-2023",
      uploadedDateTime: "11-APR-2023 16:20",
      returnMonth: "APR-2023",
      ecrId: "87458883",
      salaryDisbuDate: "01-APR-2023"
    }, {
      ref_id: 15,
      wageMonth: "APR-2023",
      uploadedDateTime: "15-MAY-2023 15:40",
      returnMonth: "MAY-2023",
      ecrId: "89148198",
      salaryDisbuDate: "01-MAY-2023"
    }, {
      ref_id: 16,
      wageMonth: "MAY-2023",
      uploadedDateTime: "12-JUN-2023 14:45",
      returnMonth: "JUN-2023",
      ecrId: "90142105",
      salaryDisbuDate: "01-JUN-2023"
    }]

    const establishmentId = "TBVLR1805908000";

    const refId = 14;
    const { wageMonth, uploadedDateTime, returnMonth, salaryDisbuDate, ecrId } = monthlyVariables[refId];

    const totalPages = Math.ceil(members.length/19)


    const getMembersTable = () => {
      let result = []
      let start;
      let stop;
      
      for(let i = 0; i < totalPages; i++){
        start = i * 19;
        stop = (i+1) * 19;
        result.push(<MemberTable 
          key={i}
          uploadedDateTime={uploadedDateTime} 
          wageMonth={wageMonth} 
          start={start} 
          establishmentId={establishmentId} 
          members={members.slice(start, stop)}
          totalPages={totalPages} 
          pageNo={i+2}/>)
      } 
      return result;
    }
    
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

    let epfAmount = 0;
    let eps = 0;
    let er = 0;

    members.forEach(member => {
      const wagesPerDay = member.wagesPerDay ? member.wagesPerDay : 433.33
      const nonNCPDays = 30
      const wages = Math.round(wagesPerDay * nonNCPDays);
      epfAmount = epfAmount + Math.round(wages * 0.12);
      eps = eps + Math.round(wages * 0.0833);
      er = er + Math.round(wages * 0.0367);
    })

    return <div id="wrapper">
      <Header headerText={headerText} setHeaderText={setHeaderText}/>
      <MainPage 
          establishmentId={establishmentId} 
          wageMonth={wageMonth}
          uploadedDateTime={uploadedDateTime}
          returnMonth={returnMonth}
          salaryDisbuDate={salaryDisbuDate}
          ecrId={ecrId}
          epfAmount={epfAmount}
          eps={eps}
          er={er}
          totalMembers={members.length}
          totalPages={totalPages}
          />
      {getMembersTable()}
      <LastPage 
        uploadedDateTime={uploadedDateTime}
        wageMonth={wageMonth} 
        establishmentId={establishmentId} 
        totalPages={totalPages}
        page={totalPages+2}/>
    </div>
}

export default Epf;