import Footer from "./Footer";

// const wagesPerDay = 496.66;
const MemberTable = ({establishmentId, members, pageNo, uploadedDateTime, wageMonth, start, totalPages}) => (<div className="members-table-div">
        {pageNo == 1 ? <p className="ml5">Member Details:- </p> : null}
        {members.length ? <table className="table-1" style={{marginBottom: "50px"}}>
            <thead>
                <tr>
                    <th width="4%" rowSpan={2}>SI. No.</th>
                    <th width="8%" rowSpan={2}>UAN</th>
                    <th width="18%" colSpan={2}>Name as per</th>
                    <th colSpan={4}>Wages</th>
                    <th colSpan={4}>Contribution Remitted</th>
                    <th width="4%" rowSpan={2}>Refunds</th>
                    <th colSpan={3}>PMRPY / ABRY Benefit</th>
                    <th width="7%" rowSpan={2}>Posting Location of the Member</th>
                </tr>
                <tr>
                    <th>ECR</th>
                    <th>UAN Repository</th>

                    <th>Gross</th>
                    <th>EPF</th>
                    <th>EPS</th>
                    <th>EDLI</th>

                    <th>EE</th>
                    <th>EPS</th>
                    <th>ER</th>
                    <th>NCP Days</th>

                    <th>Pension Share</th>
                    <th>ER PF Share</th>
                    <th>EE Share</th>
                </tr>
            </thead>
            <tbody>
                {
                    members.map((member, index) => {
                        const wagesPerDay = member.wagesPerDay ? member.wagesPerDay : 433.33
                        const wages = Math.round(wagesPerDay * 30);
                        const epfAmount = Math.round(wages * 0.12);
                        const eps = Math.round(wages * 0.0833);
                        const er = Math.round(wages * 0.0367);

                        return <tr key={`members-table-${index+start}`}>
                            <td style={{textAlign: "center"}}>{index+1+start}</td>
                            <td>{member.uan}</td>
                            <td style={{wordWrap: "break-word"}}>{member.name.toUpperCase()}</td>
                            <td style={{wordWrap: "break-word"}}>{member.name.toUpperCase()}</td>
                            <td style={{textAlign: "right"}}>{wages.toLocaleString()}</td>
                            <td style={{textAlign: "right"}}>{wages.toLocaleString()}</td>
                            <td style={{textAlign: "right"}}>{wages.toLocaleString()}</td>
                            <td style={{textAlign: "right"}}>{wages.toLocaleString()}</td>
                            <td style={{textAlign: "right"}}>{epfAmount.toLocaleString()}</td>
                            <td style={{textAlign: "right"}}>{eps.toLocaleString()}</td>
                            <td style={{textAlign: "right"}}>{er.toLocaleString()}</td>
                            <td style={{textAlign: "right"}}>{0}</td>
                            <td style={{textAlign: "right"}}>{0}</td>
                            <td style={{textAlign: "right"}}>{"ABRY"}</td>
                            <td style={{textAlign: "right"}}>{"ABRY"}</td>
                            <td style={{textAlign: "right"}}>{"ABRY"}</td>
                            <td style={{textAlign: "right"}}>{"N.A."}</td>
                        </tr>
                    })
                }
            </tbody>
        </table> : null}
        <Footer 
            establishmentId={establishmentId}
            wageMonth={wageMonth}
            uploadedDateTime={uploadedDateTime}
            page={pageNo} 
            totalPages={totalPages}
            footerTopMargin={pageNo !== totalPages+1 ? "10px" : "550px"}/>
    </div>
);

export default MemberTable;