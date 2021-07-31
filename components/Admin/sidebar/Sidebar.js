import {
  FaRegCalendarCheck,
  FaChurch,
  FaHome,
  FaTimes,
  FaPowerOff,
  FaUserFriends,
} from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import styles from "../../../styles/admin/Sidebar.module.css";
import Image from "next/image";

const Sidebar = ({ sidebarToggle, handleToggle }) => {
  return (
    <div
      id={styles.sidebar}
      className={sidebarToggle ? `${styles.sidebar__responsive}` : ""}
    >
      <div className={styles.sidebar__title}>
        <div className={styles.sidebar__img}>
          <Image src="/bible.svg" alt="Logo" width={100} height={100} />
          <h1>Church app</h1>
        </div>
        <FaTimes id={styles.sidebar__icons} onClick={handleToggle} />
      </div>
      <div className={styles.sidebar__menu}>
        <div className={`${styles.sidebar__link}  ${styles.active_menu_link}`}>
          <FaHome className={styles.i} />
          <a href="#">Dashboard</a>
        </div>

        <h2>MNG</h2>
        <div className={styles.sidebar__link}>
          <FaUserFriends className={styles.i} />
          <a href="#">Admin Management</a>
        </div>
        <div className={styles.sidebar__link}>
          <FaChurch className={styles.i} />
          <a href="#">Church Management</a>
        </div>
        <div className={styles.sidebar__link}>
          <FiActivity className={styles.i} />
          <a href="#">Activities</a>
        </div>
        <h2>LEAVE</h2>
        <div className={styles.sidebar__link}>
          <FaRegCalendarCheck className={styles.i} />
          <a href="#">Special Days</a>
        </div>
        <div className={styles.sidebar__link}>
          <FaRegCalendarCheck className={styles.i} />
          <a href="#">Special Days</a>
        </div>
        <div className={styles.sidebar__link}>
          <FaRegCalendarCheck className={styles.i} />
          <a href="#">Special Days</a>
        </div>
        <div className={styles.sidebar__link}>
          <FaRegCalendarCheck className={styles.i} />
          <a href="#">Special Days</a>
        </div>
        <div className={styles.sidebar__logout}>
          <FaPowerOff className={styles.i} />
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
