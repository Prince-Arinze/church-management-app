import { useEffect, useState } from "react";

import styles from "../../styles/Register.module.css";

import { listRoles } from "../../action/action";

import { useDispatch, useSelector } from "react-redux";
import Bank from "../../action/bank";
import { createChurch } from "../../action/church";

const CreateChurch = () => {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");
  const [acct_name, setAcctName] = useState("");
  const [acct_no, setAcctNo] = useState("");
  const [bank_name, setBankName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const dataToSubmit = {
    email,
    city,
    state,
    street,
    acct_name,
    acct_no,
    bank_name,
    phone,
    password,
    role,
  };

  const dispatch = useDispatch();
  const listAdminRole = useSelector((state) => state.listAdminRole);
  const { loading: roleList, roles, error: roleError } = listAdminRole;
  const churchCreate = useSelector((state) => state.churchCreate);
  const {
    loading: createChurchLoading,
    success: createChurchSuccess,
    error: createChurchError,
  } = churchCreate;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createChurch(dataToSubmit));
  };

  useEffect(() => {
    dispatch(listRoles());
  }, [dispatch, listRoles]);

  return (
    <>
      <div className={styles.register_container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.heading}>
            <h1>Create a Church</h1>
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
            <label className={styles.label}>City</label>
            <input
              type="text"
              required
              className={styles.input}
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <span className={styles.focus_input2}></span>
          </div>
          <div className={styles.wrapper2}>
            <label className={styles.label}>State</label>
            <input
              type="text"
              required
              className={styles.input}
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
            <span className={styles.focus_input2}></span>
          </div>
          <div className={styles.wrapper2}>
            <label className={styles.label}>Street</label>
            <input
              type="text"
              required
              className={styles.input}
              onChange={(e) => setStreet(e.target.value)}
              value={street}
            />
            <span className={styles.focus_input2}></span>
          </div>
          <div className={styles.wrapper2}>
            <label className={styles.label}>Account Name</label>
            <input
              type="text"
              required
              className={styles.input}
              onChange={(e) => setAcctName(e.target.value)}
              value={acct_name}
            />
            <span className={styles.focus_input2}></span>
          </div>
          <div className={styles.wrapper2}>
            <label className={styles.label}>Account Number</label>
            <input
              type="text"
              required
              className={styles.input}
              onChange={(e) => setAcctNo(e.target.value)}
              value={acct_no}
            />
            <span className={styles.focus_input2}></span>
          </div>
          <div className={styles.wrapper2}>
            <label className={styles.label}>Bank name</label>
            <select
              className={styles.admin_role}
              onChange={(e) => setBankName(e.target.value)}
              value={bank_name}
            >
              <option disabled>Others</option>

              {Bank &&
                Bank.map((bank, index) => (
                  <>
                    <option value={bank.name} key={index}>
                      {bank.name}
                    </option>
                  </>
                ))}
            </select>
            <span className={styles.focus_input2}></span>
          </div>
          <div className={styles.wrapper2}>
            <label className={styles.label}>Phone number</label>
            <input
              type="text"
              required
              className={styles.input}
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <span className={styles.focus_input2}></span>
          </div>
          <div className={styles.wrapper2}>
            <label className={styles.label}>Role ID:</label>

            <select
              className={styles.admin_role}
              onChange={(e) => setRole(e.target.value)}
              value={role}
            >
              <option disabled>Others</option>
              {roles &&
                roles.results?.map((role, index) => (
                  <>
                    <option value={role._id} key={role._id}>
                      {role.name}
                    </option>
                  </>
                ))}
            </select>

            <span className={styles.focus_input2}></span>
            {roleList && <div>Fetching data..</div>}
            {roleError && <div>{roleError}</div>}
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
          {createChurchError && (
            <p style={{ color: "red" }}>{createChurchError}</p>
          )}
          {createChurchSuccess && (
            <p style={{ color: "green" }}>Successfully created</p>
          )}
          <button type="submit" className={styles.admin_btn}>
            {createChurchLoading ? "Loading...." : "Create Church"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateChurch;
