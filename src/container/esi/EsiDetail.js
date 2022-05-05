const EsiDetail = ({challanPeriod}) => {
    
    const members = [
        {
            ipNumber: "5131305041" ,
            name: "BANDU VITTHAL DARSHANWAR ",
            daysWorked: 26,
            monthlyWages: "15096.00",
            ipContribution: "114.00"
        },
        {
            ipNumber: "5182431302" ,
            name: "DODLA MADHU SUDHAN ROA ",
            daysWorked: 26,
            monthlyWages: "18336.00",
            ipContribution: "138.00"
        },
        {
            ipNumber: "5182431300" ,
            name: "DODLA JITHENDRA ",
            daysWorked: 26,
            monthlyWages: "18336.00",
            ipContribution: "138.00"
        },
        {
            ipNumber: "5131305053" ,
            name: "ETTA BOINA SAI BABA ",
            daysWorked: 26,
            monthlyWages: "18336.00",
            ipContribution: "138.00"
        },
        {
            ipNumber: "5182431311",
            name: "GANESAN MUNUSWAMY ",
            daysWorked: 26,
            monthlyWages: "15096.00",
            ipContribution: "114.00"
        },
        {
            ipNumber: "5182431307",
            name: "GOPI M ",
            daysWorked: 26,
            monthlyWages: "18336.00",
            ipContribution: "138.00"
        },
        {
            ipNumber: "5131305062" ,
            name: "KOLCHARAM LAXMI ",
            daysWorked: 26,
            monthlyWages: "15096.00",
            ipContribution: "114.00"
        },
        {
            ipNumber: "5183825110", 
            name: "KURRI VIJAYA ",
            daysWorked: 26,
            monthlyWages: "15096.00",
            ipContribution: "114.00"
        },
        {
            ipNumber: "5182431299", 
            name: "KUSHAL KUMAR ",
            daysWorked: 26,
            monthlyWages: "15096.00",
            ipContribution: "114.00"
        },
        {
            ipNumber: "5182431276",
            name: "MADHAVI ",
            daysWorked: 26,
            monthlyWages: "15096.00",
            ipContribution: "114.00"
        },
        {
            ipNumber: "5131305070",
            name: "MAILUGARI YADHAMMA ",
            daysWorked: 26,
            monthlyWages: "15096.00",
            ipContribution: "114.00"
        },
        {
            ipNumber: "5182431324",
            name: "MALATHI",
            daysWorked: 26,
            monthlyWages: "18336.00",
            ipContribution: "138.00"
        },
        {
            ipNumber: "5182431301",
            name: "MD MOHSIN ",
            daysWorked: 26,
            monthlyWages: "15096.00",
            ipContribution: "114.00"
        },
        {
            ipNumber: "5182431266",
            name: "MOHAMMED EHTESHAM SAMEER",
            daysWorked: 26,
            monthlyWages: "18336.00",
            ipContribution: "138.00"
        },
        {
            ipNumber: "5182431312",
            name: "PRAKASH ",
            daysWorked: 26,
            monthlyWages: "15096.00",
            ipContribution: "114.00"
        },
        {
            ipNumber: "5183825109",
            name: "RAMA ANJENAYULU ",
            daysWorked: 26,
            monthlyWages: "15096.00",
            ipContribution: "114.00"
        },
        {
            ipNumber: " 5182431303",
            name: "RENUKA ",
            daysWorked: 26,
            monthlyWages: "15096.00",
            ipContribution: "114.00"
        },
        {
            ipNumber: "5182431325", 
            name: "SABA NAAZ",
            daysWorked: 26,
            monthlyWages: "18336.00",
            ipContribution: "138.00"
        },
        {
            ipNumber: "5182431309",
            name: "SARAVANAN ",
            daysWorked: 26,
            monthlyWages: "15096.00",
            ipContribution: "114.00"
        },
        {
            ipNumber: "5182431336",
            name: "STIFAN",
            daysWorked: 26,
            monthlyWages: "15096.00",
            ipContribution: "114.00"
        },
        {
            ipNumber: "5182431310",
            name: "SUGUMAR ",
            daysWorked: 26,
            monthlyWages: "15096.00",
            ipContribution: "114.00"
        },
        {
            ipNumber: "5182431304", 
            name: "SUSHMASREE",
            daysWorked: 26,
            monthlyWages: "18336.00",
            ipContribution: "138.00"
        },
        {
            ipNumber: "5182431293",
            name: "SYED MUSTAFA ",
            daysWorked: 26,
            monthlyWages: "18336.00",
            ipContribution: "138.00"
        }
    ];

    let totalMonthlyWages = 0;
    let totalIpContribution = 0;
    members.forEach((member) => {
        totalMonthlyWages = parseInt(member.monthlyWages) + totalMonthlyWages
        totalIpContribution = parseInt(member.ipContribution) + totalIpContribution
    })

    return <div>
        <p style={{textAlign: "center"}}>
            <b>{`Monthly Contribution Details (Contractor-wise) for the month of ${challanPeriod}`}</b>
        </p>
        <table style={{marginLeft: "auto", marginRight: "auto"}}>
            <thead>
                <tr>
                    <th style={{border: "1px solid white", textAlign: "left", paddingRight: "400px"}}>Employer Code: 51001345080001099</th>
                    <th style={{border: "1px solid white"}}></th>
                    <th style={{border: "1px solid white"}}></th>
                    <th style={{border: "1px solid white"}}></th>
                    <th style={{border: "1px solid white"}}></th>
                    <th style={{border: "1px solid white"}}></th>
                    <th style={{border: "1px solid white", textAlign: "right"}}>Employer Name: M G Swamy & Co.</th>
                </tr>
            </thead>
        </table>
        <table className="esi-table" style={{border: "2px solid black", marginLeft: "auto", marginRight: "auto"}}>
            <thead>
                <tr>
                    <th style={{borderRightColor: "white"}}> S.No </th>
                    <th style={{borderRightColor: "white"}}> Employee IP Number </th>
                    <th style={{borderRightColor: "white"}}> Employee Name </th>
                    <th style={{borderRightColor: "white"}}> Days Worked </th>
                    <th style={{borderRightColor: "white"}}> Monthly Wages </th>
                    <th width={"20%"} style={{borderRightColor: "white"}}> Is Disable </th>
                    <th> IP Contribution </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{borderBottom: "2px solid black", borderTop: "2px solid black"}} colSpan={7}> <b>Name: </b>{`    M G Swamy & Co.-`}</td>
                </tr>
                {members.map((member, index) => <tr key={index}>
                    <td style={{borderRightColor: "white", borderBottomColor: members.length-1 !== index ? "white" : "black", paddingLeft: "10px"}}>{index+1}</td>
                    <td style={{borderRightColor: "white", borderBottomColor: members.length-1 !== index ? "white" : "black"}}>{member.ipNumber}</td>
                    <td style={{borderRightColor: "white", borderBottomColor: members.length-1 !== index ? "white" : "black"}}>{member.name}</td>
                    <td style={{borderRightColor: "white", borderBottomColor: members.length-1 !== index ? "white" : "black", textAlign: "center"}}>{member.daysWorked}</td>
                    <td style={{borderRightColor: "white", borderBottomColor: members.length-1 !== index ? "white" : "black", textAlign: "right"}}>{member.monthlyWages}</td>
                    <td style={{borderRightColor: "white", borderBottomColor: members.length-1 !== index ? "white" : "black", textAlign: "right"}}>{"-"}</td>
                    <td style={{borderBottomColor: members.length-1 !== index ? "white" : "black", textAlign: "right"}}>{member.ipContribution}</td>
                </tr>)}
                <tr>
                    <td style={{borderTop: "2px solid black", borderRightColor: "white", textAlign: "right"}} colSpan={4}>
                        <b>
                            {`Total Monthly Wages:`}
                        </b>
                    </td>
                    <td style={{borderTop: "2px solid black", borderRightColor: "white", textAlign: "right"}}>
                        <b>
                            {`376,368.00`}
                        </b>
                    </td>
                    <td style={{borderTop: "2px solid black", borderRightColor: "white", textAlign: "right"}}>
                        <b>
                            {`Total IP Contribution:`}
                        </b>
                    </td>
                    <td style={{borderTop: "2px solid black", textAlign: "right"}}>
                        <b>
                            {`${totalIpContribution}.00`}
                        </b>
                    </td>
                </tr>
            </tbody>
        </table>
        <table style={{marginTop: "20px", border: "2px solid black", marginLeft: "auto", marginRight: "auto"}}>
            <thead>
                <tr>
                    <th style={{borderRightColor: "white"}}>Total IP Contribution</th>
                    <th style={{borderRightColor: "white"}}>Total Employer Contribution</th>
                    <th style={{borderRightColor: "white"}}>Total Contribution</th>
                    <th style={{borderRightColor: "white"}}>Total Government Contribution</th>
                    <th>Total Monthly Wages</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{borderRightColor: "white"}}>{"2838.00"}</td>
                    <td style={{borderRightColor: "white"}}>{"12,950.00"}</td>
                    <td style={{borderRightColor: "white"}}>{"15,788.00"}</td>
                    <td style={{borderRightColor: "white"}}>{"0.00"}</td>
                    <td>{"376,368.00"}</td>
                </tr>
            </tbody>
        </table>
        <p style={{textAlign: "center", marginTop: "2px"}}>{`-- End of Report --`}</p>
    </div>
}

export default EsiDetail;