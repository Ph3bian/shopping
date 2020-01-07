import React from 'react'
import { Link } from 'react-router-dom'
import ProgressiveImage from "react-progressive-image"
import styles from './authLayout.module.scss'
import { Logo } from 'assets/svg'
import Cart from 'assets/images/cart.jpg'
import CartTiny from 'assets/images/cart-tiny.jpg'

const AuthLayout = ({ instruction, children, bigText, mediumText }) => {
    return (
        <div className={styles.container}>
            <div className={styles.containerHolder}>
                <Link to="/">
                    <Logo />
                </Link>
                <div className={styles.form}>
                    {instruction && (
                        <div className={styles.formCard}>
                            <p className={styles.instruction}>{instruction}</p>
                            {children}
                        </div>
                    )}
                    {bigText && (
                        <div className={styles.content}>
                            <p className={styles.bigText}>{bigText}</p>
                            <p className={styles.mediumText}>{mediumText}</p>
                            {children}
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.bg}>
            <ProgressiveImage src={Cart} placeholder={CartTiny}>
            {src =>   <img src={src} alt="Shop" />}
          </ProgressiveImage>
              
            </div>
        </div>
    )
}
export default AuthLayout
