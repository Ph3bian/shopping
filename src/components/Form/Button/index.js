import React from 'react'
import styles from './module.scss'

const Button = ({ children }) => (
    <button className={styles.Button}> {children}</button>
)
export default Button
