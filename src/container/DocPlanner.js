import { useState } from "react";

const DocPlanner = ({setShowDocPlanner, docType, setDocType, esiDocType, setEsiDocType}) => {
    const [docTypeLocal, setDocTypeLocal] = useState(docType);
    const [esiDocTypeLocal, setEsiDocTypeLocal] = useState(esiDocType);

    return <>
        <div >
            <input onChange={e => {setDocTypeLocal("esi")}} type="radio" name="docType" value={"esi"} />
            <label >ESI</label>

            <input onChange={e => {setDocTypeLocal("epf")}} type="radio" name="docType" value={"epf"} />
            <label >EPF</label><br/>
        </div>

        {docTypeLocal === "esi" ? <div >
            <input onChange={e => {setEsiDocTypeLocal("summary")}} type="radio" name="esiDocType" value={"summary"} />
            <label >Summary</label>
    
            <input onChange={e => {setEsiDocTypeLocal("detail")}} type="radio" name="esiDocType" value={"detail"} />
            <label >Detail</label><br/>
        </div> : null }
        
        <button onClick={() => {
            setDocType(docTypeLocal);
            setEsiDocType(esiDocTypeLocal);
            setShowDocPlanner(false);}}>Udpate</button>
    </>};


export default DocPlanner;