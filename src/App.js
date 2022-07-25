import { useState } from 'react';
import './App.css';
import Epf from './container/epf/Epf';
import Esi from './container/esi/Esi';
import DocPlanner from './container/DocPlanner';


const App = () => {
  const [docType, setDocType] = useState("epf");
  const [esiDocType, setEsiDocType] = useState("detail");
  const [showDocPlanner, setShowDocPlanner] = useState(false);

  return <>
    <button 
      onClick={() => setShowDocPlanner(!showDocPlanner)} 
      className="masterButton"></button>
    {showDocPlanner ? <DocPlanner 
      setShowDocPlanner={setShowDocPlanner} 
      docType={docType} 
      setDocType={setDocType}
      esiDocType={esiDocType}
      setEsiDocType={setEsiDocType}/> : null}
    {docType === "epf" ? <Epf /> : <Esi esiDocType={esiDocType}/>}
  </>
};


export default App;
