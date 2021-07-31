import React from "react";
import Image from "next/image";
import { FaBars, FaSearch, FaClock } from "react-icons/fa";

import styles from "../../../styles/admin/Navbar.module.css";

const Navbar = ({ handleToggle }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_icon} onClick={() => handleToggle}>
        <FaBars className="i" />
      </div>
      <div className={styles.navbar__left}>
        <a href="#">Churches</a>
        <a href="#">Churches Management</a>
        <a href="#" className={styles.active__link}>
          Admin
        </a>
      </div>
      <div className={styles.navbar__right}>
        <a href="#">
          <FaSearch className={styles.icons} />
        </a>
        <a href="#">
          <FaClock className={styles.icons} />
        </a>
        <a href="#">
          <Image src="/avatar.svg" alt="avatar" width={30} height={30} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
