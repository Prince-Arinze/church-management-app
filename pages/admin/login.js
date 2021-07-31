import SignIn from "../../components/Admin/SignIn";
import styles from "../../styles/Home.module.css";
// import style from "../../styles/SignIn.module.css";
export default function Login() {
  return (
    <div className={styles.container}>
      <SignIn />
    </div>
  );
}
