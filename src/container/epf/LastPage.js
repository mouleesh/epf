import Footer from "./Footer";

const LastPage = ({establishmentId, page, uploadedDateTime, wageMonth, totalPages}) => (<div style={{marginTop: "100px"}}>
    <div>
        <b className="ml5 note-sec"> <i>Note: UANs are prefixed with Asterisk sign (*) in case AADHAAR is not seeded /unverified</i></b>
    </div>
    <div className="container-section">
        <div className="section1">
            <p className="ml5">PMRPY Benefit Not Given Remarks :-</p>
            <table className="table-1">
                <thead>
                    <tr>
                        <th width="20%">Reason Code</th>
                        <th>Reason Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{textAlign: "center"}}>EC10001</td>
                        <td>ECR already filed for this member</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "center"}}>EC10002</td>
                        <td>Parallel Employment: ECR already filed for this</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "center"}}>EC10003</td>
                        <td>Benefit already availed for this member </td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "center"}}>EC10004</td>
                        <td>Gross/EPF wages greater than 15,000/- </td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "center"}}>EC10005</td>
                        <td>Mismatch in EPF and EPS wages</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "center"}}>EC10006</td>
                        <td>Mismatch in Due and Remitted values</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "center"}}>EC10007</td>
                        <td>UAN Deactivated</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="section2">
            <p className="ml5">ABRY Benefit Not Given Remarks :-</p>
            <table className="table-1">
                <thead>
                    <tr>
                        <th width="20%">Reason Code</th>
                        <th>Reason Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{textAlign: "center"}}>GK10001 </td>
                        <td>EPF wages are greatter than or equal to 15,000/-</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "center"}}>GK10002 </td>
                        <td>Mismatch in EPF and EPS wages</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "center"}}>GK10003 </td>
                        <td>EPF contribution remitted is greatter than due remittance</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "center"}}>GK10004 </td>
                        <td>EPS contribution remitted is greatter than due remittance</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "center"}}>GK10005 </td>
                        <td>(EPF - EPS) diffrence contribution remitted is greatter than due </td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "center"}}>GK10006 </td>
                        <td>EPS contribution remitted is greatter than due remittance</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "center"}}>GK10007</td>
                        <td>Aadhaar not seeded</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <Footer 
        establishmentId={establishmentId}
        wageMonth={wageMonth}
        uploadedDateTime={uploadedDateTime}
        page={page} 
        totalPages={totalPages}
        footerTopMargin={"700px"}/>
</div>
);

export default LastPage;