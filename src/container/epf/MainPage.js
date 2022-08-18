import Footer from "./Footer";

const MainPage = ({establishmentId, wageMonth, uploadedDateTime, returnMonth, salaryDisbuDate, ecrId, totalMembers, totalPages, epfAmount: totalEpf, eps: totalEps, er: totalEpfEps}) => (<>    
        <div className="main-content">
            <table className="table-1">
                <tbody>
                    <tr>
                        <td>Name of Establishment</td>
                        <td colSpan="3">M G Swamy & Co</td>
                    </tr>
                    <tr>
                        <td>Establishment Id</td>
                        <td>{`${establishmentId}`}</td>
                        <td>LIN</td>
                        <td>1901208803</td>
                    </tr>
                    <tr>
                        <td>Wage Month</td>
                        <td>{wageMonth}</td>
                        <td>Return Month</td>
                        <td>{returnMonth}</td>
                    </tr>
                    <tr>
                        <td>Contribution Rate (%)</td>
                        <td>12</td>
                        <td>ECR TYPE</td>
                        <td>ECR</td>
                    </tr>
                    <tr>
                        <td>Salary Disbursement Date</td>
                        <td>{salaryDisbuDate}</td>
                        <td>Uploaded Date Time</td>
                        <td>{uploadedDateTime}</td>
                    </tr>
                    <tr>
                        <td>Exemption Status</td>
                        <td>Unexempted</td>
                        <td>TRRN Number</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Remarks</td>
                        <td>{"NIL"}</td>
                        <td>ECR Id</td>
                        <td>{ecrId}</td>
                    </tr>
                    <tr>
                        <td>Total Members</td>
                        <td>{totalMembers}</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan="4"><b>Contribution and Remittance Details (In Rupees) :</b></td>
                    </tr>
                    <tr>
                        <td>Total EPF Contibution Remitted</td>
                        <td style={{textAlign: "right"}}>{totalEpf.toLocaleString()}</td>
                        <td>Total EPS Contibution Remitted</td>
                        <td style={{textAlign: "right"}}>{totalEps.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>Total EPF-EPS Contibution Remitted</td>
                        <td style={{textAlign: "right"}}>{totalEpfEps.toLocaleString()}</td>
                        <td>Total Refund Advance</td>
                        <td style={{textAlign: "right"}}>0</td>
                    </tr>
                    <tr>
                        <td colSpan="4"><b>PMRPY Upfront Benefit Details (In Rupees) :</b></td>
                    </tr>
                    <tr>
                        <td>Total PMRPY Upfront EPF Amount</td>
                        <td style={{textAlign: "right"}}>0</td>
                        <td>Total PMRPY Upfront EPS Amount</td>
                        <td style={{textAlign: "right"}}>0</td>
                    </tr>
                    <tr>
                        <td>PMRPY benefit remarks</td>
                        <td colSpan="3">NA</td>
                        
                    </tr>
                    <tr>
                        <td colSpan="4"><b>ABRY Upfront Benefit Details (In Rupees) :</b></td>
                    </tr>
                    <tr>
                        <td rowSpan="2">Total ABRY Upfront EPF Amount</td>
                        <td style={{textAlign: "center"}}>Employee EPF Share</td>
                        <td style={{textAlign: "center"}}>Employer EPS Share</td>
                        <td style={{textAlign: "center"}}>Employer EPF Share</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "right"}}>{totalEpf.toLocaleString()}</td>
                        <td style={{textAlign: "right"}}>{totalEps.toLocaleString()}</td>
                        <td style={{textAlign: "right"}}>{totalEpfEps.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>ABRY benefit remarks</td>
                        <td colSpan="3">Upfront benefit of EE and ER contribution rewarded</td>
                    </tr>
                </tbody>
            </table>

            <Footer 
            establishmentId={establishmentId}
            wageMonth={wageMonth}
            uploadedDateTime={uploadedDateTime}
            page={1} 
            totalPages={totalPages}
            footerTopMargin={"240px"}/>
        </div>
    </>
);

export default MainPage;