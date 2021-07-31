import { useState } from "react";

import styles from "../../styles/admin/Role.module.css";

import { useDispatch, useSelector } from "react-redux";
import { createRole } from "../../action/role";
const Role = () => {
  const [name, setName] = useState("");

  const dataToSubmit = { name };

  const dispatch = useDispatch();
  const roleCreate = useSelector((state) => state.roleCreate);

  const {
    loading: loadingCreateRole,
    error: errorCreateRole,
    success: successCreateRole,
  } = roleCreate;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRole(dataToSubmit));
  };

  return (
    <>
      <div className={styles.role_container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.heading}>
            <h1>Create New Role</h1>
          </div>
          <div className={styles.wrapper2}>
            <label className={styles.label}>Role</label>
            <input
              type="text"
              required
              className={styles.input}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <span className={styles.focus_input2}></span>
          </div>
          {loadingCreateRole && <p>Loading...</p>}
          {errorCreateRole && <p style={{ color: "red" }}>{errorCreateRole}</p>}
          {successCreateRole && (
            <p style={{ color: "green" }}>Created Successfully</p>
          )}

          <button type="submit" className={styles.admin_btn}>
            Create role
          </button>
        </form>
      </div>
    </>
  );
};

export default Role;
