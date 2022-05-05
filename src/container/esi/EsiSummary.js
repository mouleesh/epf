const EsiSummary = ({challanPeriod, challanNumber, challanCreateDate, challanSubmittedDate, amountPaid, transactionNumber}) => (<div style={{width: "1300px",border: "1px solid black", borderBottomColor: "white", margin: "auto", position: "relative"}}>
        <div style={{
            height: "180px", 
            background: "rgb(116,41,7)",
            background: "linear-gradient(0deg, rgba(116,41,7,1) 0%, rgba(152,49,0,1) 100%)"
            }}>
            <img style={{margin: "10px 0 0 10px"}} src="./esi.png" height="160px"/>
            <div style={{position: "absolute", top: "25px", left: "180px", color: "#f1faf0"}}>
                <p style={{marginBottom: "0px", fontSize: "200%"}}>ESIC</p>
                <p style={{marginTop: "0px", fontSize: "180%"}}>Employee's State Insurance Corporation</p>
            </div>
            <div style={{
                height: "182px", 
                background: "white",
                width: "200px",
                position: "absolute",
                left: "720px", 
                top: -1
                }}>

            </div>
            <div className="ins" style={{
                color: "#f1faf0",
                position: "absolute",
                left: "980px", 
                top: "25px",
                fontFamily: "cardo",
                }}>
                    <h1 style={{fontSize: "2.9em", fontWeight: "normal"}}>I n s u r a n c e</h1>
            </div>
        </div>
        <p style={{padding: "20px", color: "orange"}}>{`Monthly Contribution > Online Challan Form`}</p>
        <table width="98%" style={{margin: "10px", color: "rgba(152,49,0,1)"}}>
            <tbody>
                <tr>
                    <td style={{padding: "10px", borderRightColor: "white", }}><p>Transaction Details</p></td>
                    <td style={{color: "red", textAlign: "right"}}>*Required Fields</td>
                </tr>
                <tr>
                    <td width="30%" >Transaction Status:</td>
                    <td style={{color: "green"}}>Completed successfully.</td>
                </tr>
                <tr>
                    <td>Employer's Code No:</td>
                    <td>51001345080001099</td>
                </tr>
                <tr>
                    <td>Employer's Name:</td>
                    <td>M G Swamy & Co.</td>
                </tr>
                <tr>
                    <td>Challan Period:</td>
                    <td>{challanPeriod}</td>
                </tr>
                <tr>
                    <td>Challan Number:</td>
                    <td>{challanNumber}</td>
                </tr>
                <tr>
                    <td>Challan Created Date</td>
                    <td>{challanCreateDate}</td>
                </tr>
                <tr>
                    <td>Challan Submitted Date</td>
                    <td>{challanSubmittedDate}</td>
                </tr>
                <tr>
                    <td>Amount Paid:</td>
                    <td>{amountPaid}</td>
                </tr>
                <tr>
                    <td>Transaction Number:</td>
                    <td>{transactionNumber}</td>
                </tr>
                <tr>
                    <td colSpan={2} style={{textAlign: "center"}}>
                        <button style={{background: "rgb(226,225,200)",
                                        background: "linear-gradient(0deg, rgba(226,225,200,1) 2%, rgba(253,251,198,1) 55%)", padding: "5px 25px", marginRight: "5px", color: "rgba(152,49,0,1)"}}>Print</button>
                        <button style={{background: "rgb(226,225,200)",
                                        background: "linear-gradient(0deg, rgba(226,225,200,1) 2%, rgba(253,251,198,1) 55%)", 
                                        padding: "5px 25px", color: "rgba(152,49,0,1)"}}>Close</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p style={{textAlign: "center"}}>DISCLAIMER: Content owned, maintained and updated by Employee's State Insurance Corporation. Copyright © 2009, ESIC, India. All Rights Reserved. Best viewed in 1024 x 768 pixels, Designed and Developed by Wipro LTD.IP Address :</p>
    </div>
);

export default EsiSummary;