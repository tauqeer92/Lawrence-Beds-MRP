import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Homepage from '../homepage/homepage.tsx';
import Mattress_builder from '../mattress_builder/mattress_builder.tsx';
import Mattresses from '../mattresses/mattresses.tsx';
import Page1 from '../page1/page1.tsx';


const App: React.FC = () => {
    return (
        
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/page1" element={<Page1/>}/>
            <Route path="/mattress-builder" element={<Mattress_builder/>}/>
            <Route path="/mattresses" element={<Mattresses/>}/>
        </Routes>
    )
}

export default App;