import { useState } from "react";

import styles from "../../styles/Church.module.css";

import { useDispatch, useSelector } from "react-redux";
import { loginChurch } from "../../action/church";

const ChurchLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dataToSubmit = {
    email,
    password,
  };

  const dispatch = useDispatch();
  const churchLogin = useSelector((state) => state.churchLogin);
  const {
    loading: loginChurchLoading,
    success: loginChurchSuccess,
    error: loginChurchError,
  } = churchLogin;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginChurch(dataToSubmit));
  };

  return (
    <>
      <div className={styles.church_container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.heading}>
            <h1>Login</h1>
          </div>
          <div className={styles.wrapper2}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              required
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <span className={styles.focus_input2}></span>
          </div>

          <div className={styles.wrapper2}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              required
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <span className={styles.focus_input2}></span>
          </div>
          {loginChurchError && (
            <p style={{ color: "red" }}>{loginChurchError}</p>
          )}
          {loginChurchSuccess && (
            <p style={{ color: "green" }}>{loginChurchSuccess}</p>
          )}
          <button type="submit" className={styles.admin_btn}>
            {loginChurchLoading ? "Loading...." : "Church Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ChurchLogin;
