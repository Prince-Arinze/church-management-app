import { useEffect, useState } from "react";

import styles from "../../styles/Register.module.css";

import { listRoles, createAdmin } from "../../action/action";

import { useDispatch, useSelector } from "react-redux";
const Register = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const dataToSubmit = { first_name, last_name, email, password, role, phone };

  const dispatch = useDispatch();
  const listAdminRole = useSelector((state) => state.listAdminRole);
  const adminCreate = useSelector((state) => state.adminCreate);

  const { loading, error, success } = adminCreate;

  const {
    loading: loadingListRole,
    error: errorListRole,
    roles,
  } = listAdminRole;

  const getRoles = roles && roles.results;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAdmin(dataToSubmit));
  };

  console.log(dataToSubmit);
  useEffect(() => {
    dispatch(listRoles());
  }, [dispatch]);

  return (
    <>
      <div className={styles.register_container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>Created Successfully</p>}
          <div className={styles.form_datas}></div>
          <div className={styles.heading}>
            <h1>Create an Admin</h1>
          </div>
          <div className={styles.wrapper1}>
            <div className={styles.f1}>
              <label className={styles.label}>First Name</label>
              <input
                type="text"
                required
                className={styles.input}
                name="first_name"
                onChange={(e) => setFirstName(e.target.value)}
                value={first_name}
              />
              <span className={styles.focus_input}></span>
            </div>
            <div className={styles.f2}>
              <label className={styles.label}>Last Name</label>
              <input
                type="text"
                required
                className={styles.input}
                name="last_name"
                onChange={(e) => setLastName(e.target.value)}
                value={last_name}
              />
              <span className={styles.focus_input}></span>
            </div>
          </div>
          <div className={styles.wrapper2}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              required
              className={styles.input}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <span className={styles.focus_input2}></span>
          </div>
          <div className={styles.wrapper2}>
            <label className={styles.label}>Phone number</label>
            <input
              type="text"
              required
              className={styles.input}
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <span className={styles.focus_input2}></span>
          </div>
          <div className={styles.wrapper2}>
            <label className={styles.label}>Role ID:</label>

            <select
              className={styles.admin_role}
              name="role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            >
              <option disabled>Others</option>
              {getRoles &&
                getRoles.map((role, index) => (
                  <>
                    <option value={role._id} key={index}>
                      {role.name}
                    </option>
                  </>
                ))}
            </select>

            <span className={styles.focus_input2}></span>
            {loadingListRole && <div>Fetching data..</div>}
            {errorListRole && <div>{errorListRole}</div>}
          </div>
          <div className={styles.wrapper2}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              required
              className={styles.input}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <span className={styles.focus_input2}></span>
          </div>
          <button type="submit" className={styles.admin_btn}>
            Create account
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
