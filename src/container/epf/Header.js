const Header = ({headerText}) => {
    
    return <>
        <div className="header">
            <img height="100px" width="100px" margintop="50px" src="./logo.gif"/>
            <div className="header-text">
                <p style={{fontSize: "28px", marginBottom: "0px"}}><b>{headerText}</b></p>
                <p style={{fontSize: "23px", marginTop: "5px"}}><b>ELECTRONIC CHALLAN CUM RETURN (ECR)</b></p>
            </div>
        </div>
    </>};


export default Header;