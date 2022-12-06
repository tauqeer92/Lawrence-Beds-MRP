import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Homepage from '../homepage/homepage.tsx';
import Page1 from '../page1/page1.tsx';


const App: React.FC = () => {
    return (
        
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/page1" element={<Page1/>}/>
        </Routes>
    )
}

export default App;