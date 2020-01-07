import React from 'react'

import { SideNav } from '../SideNav'
import styles from './layout.module.scss'

export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <div className={styles.layoutSide}>
                <SideNav />
            </div>

            <div className={styles.layoutContent}>{children}</div>
        </div>
    )
}
