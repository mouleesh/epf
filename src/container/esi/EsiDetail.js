const EsiDetail = ({challanPeriod, members, totalMonthlyWages, totalIpContribution}) => {

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
                    <td style={{borderRightColor: "white", borderBottomColor: members.length-1 !== index ? "white" : "black"}}>{member.name.toUpperCase()}</td>
                    <td style={{borderRightColor: "white", borderBottomColor: members.length-1 !== index ? "white" : "black", textAlign: "center"}}>{member.daysWorked}</td>
                    <td style={{borderRightColor: "white", borderBottomColor: members.length-1 !== index ? "white" : "black", textAlign: "right"}}>{member.monthlyWages}</td>
                    <td style={{borderRightColor: "white", borderBottomColor: members.length-1 !== index ? "white" : "black", textAlign: "right"}}>{"-"}</td>
                    <td style={{borderBottomColor: members.length-1 !== index ? "white" : "black", textAlign: "right"}}>{`${Math.round(member.monthlyWages * 0.0075)}.00`}</td>
                </tr>)}
                <tr>
                    <td style={{borderTop: "2px solid black", borderRightColor: "white", textAlign: "right"}} colSpan={4}>
                        <b>
                            {`Total Monthly Wages:`}
                        </b>
                    </td>
                    <td style={{borderTop: "2px solid black", borderRightColor: "white", textAlign: "right"}}>
                        <b>
                            {`${totalMonthlyWages}.00`}
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
                    <td style={{borderRightColor: "white"}}>{`${totalIpContribution}.00`}</td>
                    <td style={{borderRightColor: "white"}}>{`${totalMonthlyWages*0.0325}.00`}</td>
                    <td style={{borderRightColor: "white"}}>{`${totalIpContribution + (totalMonthlyWages*0.0325)}.00`}</td>
                    <td style={{borderRightColor: "white"}}>{"0.00"}</td>
                    <td>{`${totalMonthlyWages}.00`}</td>
                </tr>
            </tbody>
        </table>
        <p style={{textAlign: "center", marginTop: "2px"}}>{`-- End of Report --`}</p>
    </div>
}

export default EsiDetail;