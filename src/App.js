import './App.css';
import Epf from './container/epf/Epf';
import Esi from './container/esi/Esi';


const App = () => {
  const doc = "epf";
  return doc === "epf" ? <Epf /> : <Esi />;
};

export default App;
