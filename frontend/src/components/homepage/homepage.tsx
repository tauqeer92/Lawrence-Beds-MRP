import React from 'react';
import Nav from '../nav/Nav.tsx';
import styles from './homepage.module.css';
import { Link } from 'react-router-dom';

const Homepage: React.FC <{}> = () => {
    return (
    <>
        <Nav/>
        <Link to="/mattress-builder">
            <div className={styles["mattress-builder-img"]}>
                <img src="https://c8.alamy.com/comp/M5CADK/cartoon-illustration-of-strong-mattress-lifting-weights-M5CADK.jpg" height="500"/>
            </div>
        </Link>
        <Link to="/mattresses">
            <div className={styles["view-all-mattresses-img"]}>
              <img src="https://www.shutterstock.com/shutterstock/photos/536160031/display_1500/stock-vector-cartoon-illustration-of-mattress-king-standing-with-crown-536160031.jpg" height="500"/>
            </div>
        </Link>
    </>
        
    )
    
}

export default Homepage;