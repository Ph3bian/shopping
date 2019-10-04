import React from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";

import styles from "./sideNav.module.scss";
import { Logo, Menu } from "../../assets/svg";

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

SubSideNav.propTypes = {};

export default SubSideNav;
