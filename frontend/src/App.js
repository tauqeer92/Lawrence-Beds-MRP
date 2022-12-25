import './App.css';
import MattressIndex from './components/mattress_index/mattress_index';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MattressIndex/>}/>
    </Routes>
  );
}

export default App;
