import {
  FaBook,
  FaCalendar,
  FaTenge,
  FaThumbsUp,
  FaUser,
} from "react-icons/fa";
import styles from "../../../styles/admin/Main.module.css";
import Chart from "../chart/Chart";
import Image from "next/image";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.main__title}>
          <div
            style={{ borderRadius: "25px", width: "100px", height: "100px" }}
          >
            <Image
              src="/passport.png"
              alt="welcome"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div
            className={styles.main__greetings}
            style={{ marginLeft: "10px" }}
          >
            <h1>Hello Cypher</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        <div className={styles.main__cards}>
          <div className={styles.card}>
            <FaUser className={`text-lightblue  ${styles.icon}`} />
            <div className={styles.card__inner}>
              <p className="text-primary-p">Number of Churches</p>
              <span className="font-bold  text-title">100</span>
            </div>
          </div>
          <div className={styles.card}>
            <FaCalendar className={`text-red  ${styles.icon}`} />
            <div className={styles.card__inner}>
              <p className="text-primary-p">Times of watching</p>
              <span className="font-bold  text-title">2456</span>
            </div>
          </div>

          <div className={styles.card}>
            <FaTenge className={`text-yellow   ${styles.icon}`} />
            <div className={styles.card__inner}>
              <p className="text-primary-p">Upcoming Programmes</p>
              <span className="font-bold  text-title">300</span>
            </div>
          </div>

          <div className={styles.card}>
            <FaThumbsUp className={`text-green   ${styles.icon}`} />
            <div className={styles.card__inner}>
              <p className="text-primary-p">Audience Reached</p>
              <span className="font-bold  text-title">4500</span>
            </div>
          </div>
        </div>
        <div className={styles.charts}>
          <div className={styles.charts__left}>
            <div className={styles.charts__left__title}>
              <div>
                <h1>Daily Reports</h1>
                <p>Abuja, Lugbe</p>
              </div>
              <FaBook className={styles.icon} />
            </div>
            <Chart />
          </div>
          <div className={styles.charts__right}>
            <div className={styles.charts__right__title}>
              <div>
                <h1>Summary of Reports</h1>
                <p>Abuja, Lugbe</p>
              </div>
              <FaUser className={styles.icon} />
            </div>
            <div className={styles.charts__right__cards}>
              <div className={styles.card1}>
                <h1>Income</h1>
                <p>$800,00</p>
              </div>
              <div className={styles.card2}>
                <h1>Admins</h1>
                <p>400</p>
              </div>
              <div className={styles.card3}>
                <h1>Branches</h1>
                <p>200</p>
              </div>
              <div className={styles.card4}>
                <h1>Members</h1>
                <p>1000000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
