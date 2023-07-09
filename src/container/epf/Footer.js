const Footer = ({establishmentId, wageMonth, uploadedDateTime, page, footerTopMargin, totalPages}) => (<div className="footer" style={{marginTop: footerTopMargin, marginBottom: page === totalPages+1 ? "740px": "500px"}}>
        <p style={{display: "inline", float: "left"}}>{`${establishmentId} / ${wageMonth} / ${uploadedDateTime}`}</p>
        <p style={{display: "inline", float: "right", marginRight: "200px"}}>{`${page} / ${totalPages + 2}`}</p>
    </div>
);

export default Footer;