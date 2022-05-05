import Header from './Header';
import MainPage from './MainPage';
import MemberTable from './MemberTable';
import LastPage from './LastPage';
import generalMembers from "./data/members.json";
import akmMembers from "./data/arakkonam.json";
import wellingtonMembers from "./data/wellington.json";
import { useState } from 'react';

const Epf = () => {

    const members = [
      ...generalMembers,
      ...akmMembers,
      ...wellingtonMembers
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
    }]

    const establishmentId = "TBVLR1805908000";
    const wagesPerDay = 433.33
    const wages = Math.round(wagesPerDay * 30);
    const epfAmount = Math.round(wages * 0.12);
    const eps = Math.round(wages * 0.0833);
    const er = Math.round(wages * 0.0367);
    const { wageMonth, uploadedDateTime, returnMonth, salaryDisbuDate, ecrId } = monthlyVariables[2]


    const totalPages = Math.ceil(members.length/19)


    const getMembersTable = () => {
      let result = []
      let start;
      let stop;
      
      for(let i = 0; i < totalPages; i++){
        start = i * 19;
        stop = (i+1) * 19;
        result.push(<MemberTable 
          wages={wages} 
          eps={eps}
          er={er}
          epfAmount={epfAmount} 
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

    return <div id="wrapper">
      <Header headerText={headerText} setHeaderText={setHeaderText}/>
      <MainPage 
          establishmentId={establishmentId} 
          wageMonth={wageMonth}
          uploadedDateTime={uploadedDateTime}
          returnMonth={returnMonth}
          salaryDisbuDate={salaryDisbuDate}
          ecrId={ecrId}
          totalMembers={members.length}
          epfAmount={epfAmount}
          eps={eps}
          er={er}
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