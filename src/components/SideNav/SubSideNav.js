import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./sideNav.module.scss";

const SubSideNav = ({ header, menuItems, sectionBaseURL }) => {
  return (
    <div className={styles.subSideNav}>
      <div className={styles.subSideNavHeader}>
        <header>
          <h2>{header}</h2>
        </header>
      </div>
      <ul className={styles.subSideNavItems}>
        {menuItems &&
          menuItems.map(menuItem => (
            <li key={menuItem.title}>
              <NavLink
                to={`${sectionBaseURL}${menuItem.link}`}
                activeClassName={styles.subNavActive}
                exact
              >
                {menuItem.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};


export default SubSideNav;
