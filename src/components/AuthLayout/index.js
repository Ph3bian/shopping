import React from "react";
import { Link } from 'react-router-dom';
import styles from "./authLayout.module.scss";
import Blazers from "../../assets/images/blazers.jpg";

const AuthLayout = ({ instruction, children, bigText, mediumText }) => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Link to="/"> Welcome</Link>

        {instruction &&
          <div className={styles.formCard}>
            <p className={styles.instruction}>{instruction}</p>
            {children}
          </div>
        }
        {
          bigText && <div className={styles.content}>
            <p className={styles.bigText}>
              {bigText}
            </p>
            <p className={styles.mediumText}>
              {mediumText}
            </p>
            {children}
          </div>
        }
      </div>

      <div className={styles.bg}>
     
          <img src={Blazers} alt="Shop" />
       	
      </div>


    </div>
  )
}
export default AuthLayout;