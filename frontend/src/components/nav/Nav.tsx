import React from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';


const Nav: React.FC<{}> = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles["logo-container"]}>
            <span>Lawrence Beds</span>
        </div>
        <div className={styles["page-1"]}>
          <Link to='/page1'>
            <h1>Page1</h1>
          </Link>
        </div>

        <div className={styles["page-2"]}>
          <Link to='/page2'>
            <h1>Page2</h1>
          </Link>
        </div>
    </nav>
  )
}

export default Nav;
