import Header from './Header';
import MainPage from './MainPage';
import MemberTable from './MemberTable';
import LastPage from './LastPage';
import generalMembers from "./data/members.json";
import akmMembers from "./data/arakkonam.json";
import wellingtonMembers from "./data/wellington.json";
import wellingtonMembersFire from "./data/wellington_fire.json";
import lakshadweepMembers from "./data/lakshadweep.json";
import hyderabadMembers from "./data/hyderabad.json";
import { useState } from 'react';

const Epf = () => {

    const members = [
      ...generalMembers,
      ...akmMembers,
      // ...wellingtonMembers,
      ...wellingtonMembersFire,
      ...lakshadweepMembers,
      ...hyderabadMembers
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
    }]

    const establishmentId = "TBVLR1805908000";
    
    const { wageMonth, uploadedDateTime, returnMonth, salaryDisbuDate, ecrId } = monthlyVariables[6]


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
      const wages = Math.round(wagesPerDay * 30);
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