import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./sideNav.module.scss";
import menuItems from "./data.js";
import { Menu } from "../../assets/svg";

const SideNav = () => {
  return (
    <div className={styles.sideNav}>
      <div className={styles.sideNavHeader}>
        <header className={styles.sideNavBrand}>
          <Link to="/">
           Welcone
          </Link>
        </header>
      </div>
      <ul className={styles.sideNavItems}>
        {menuItems &&
          menuItems.map(menuItem => (
            <li key={menuItem.title}>
              {" "}
              <NavLink to={menuItem.link} activeClassName={styles.active}>
                {menuItem.icon}
                <span className={styles.tooltip}>{menuItem.title}</span>
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SideNav;
