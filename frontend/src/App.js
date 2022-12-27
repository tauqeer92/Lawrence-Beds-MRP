import './App.css';
import MattressIndex from './components/mattress_index/mattress_index';
import MaterialIndex from './components/material_index/material_index';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MattressIndex/>}/>
      <Route path='/materials' element={<MaterialIndex/>}/>
    </Routes>
  );
}

export default App;
