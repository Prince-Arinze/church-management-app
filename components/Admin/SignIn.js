import { useState } from "react";

import { login } from "../../action/action";
import { useDispatch, useSelector } from "react-redux";

import styles from "../../styles/SignIn.module.css";
import { FaLock, FaUser } from "react-icons/fa";

import Image from "next/image";

const SignIn = () => {
  // Login states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const adminLogin = useSelector((state) => state.adminLogin);

  const { loading, error, success } = adminLogin;
  const [focus, setFocus] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const handleFocus = () => {
    setFocus(!focus);
  };
  const handleFocus2 = () => {
    setFocus2(!focus2);
  };

  const handleBlur = (e) => {
    if (e.target.value === "" && e.target.name === "email") {
      setFocus(false);
    }
  };
  const handleBlur2 = (e) => {
    if (e.target.value === "" && e.target.name === "password") {
      setFocus2(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login({ email, password }));
  };
  return (
    <div>
      <div className={styles.wave}>
        <Image src="/wave.png" alt="wave" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.container}>
        <div className={styles.img}>
          <Image
            src="/bible.svg"
            alt="image"
            layout="intrinsic"
            objectFit="contain"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.login_container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Image
              src="/avatar.svg"
              className={styles.avatar}
              alt="welcome"
              layout="intrinsic"
              objectFit="contain"
              width={100}
              height={100}
            />
            <h2>Welcome</h2>
            <div
              className={
                focus
                  ? `${styles.input_div}  ${styles.one}   ${styles.focus}`
                  : `${styles.input_div}  ${styles.one}`
              }
            >
              <div className={styles.icon}>
                <FaUser className={styles.i} />
              </div>
              <div>
                <h5>Email</h5>
                <input
                  type="email"
                  className={styles.input}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
            <div
              className={
                focus2
                  ? `${styles.input_div}  ${styles.two}  ${styles.focus}`
                  : `${styles.input_div}  ${styles.two}`
              }
            >
              <div className={styles.icon}>
                <FaLock className={styles.i} />
              </div>
              <div>
                <h5>Password</h5>
                <input
                  type="password"
                  className={styles.input}
                  onFocus={handleFocus2}
                  onBlur={handleBlur2}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
            <a href="#" className={styles.a}>
              Forgot Password?{" "}
            </a>
            {loading && <h3>Loading...</h3>}
            {error && <div style={{ color: "red" }}>{error}</div>}
            {success && <div style={{ color: "green" }}>{success}</div>}
            <input type="submit" className={styles.btn} value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
