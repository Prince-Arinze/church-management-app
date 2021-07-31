import { useState, useEffect } from "react";

import styles from "../../styles/Church.module.css";

import { useDispatch, useSelector } from "react-redux";
import { createOffices } from "../../action/office";

const CreateOffice = () => {
  const [churchId, setChurchId] = useState("");
  const [name, setName] = useState("");
  const dataToSubmit = {
    name,
    churchId,
  };

  const dispatch = useDispatch();
  const officeCreate = useSelector((state) => state.officeCreate);
  const {
    loading: officeCreateLoading,
    success: officeCreateSuccess,
    error: officeCreateError,
  } = officeCreate;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createOffices(dataToSubmit));

    console.log(dataToSubmit);
  };
  useEffect(() => {
    const data =
      localStorage.getItem("adminInfo") &&
      JSON.parse(localStorage.getItem("adminInfo"));
    const res = data.results && data.results.church._id;
    setChurchId(res);
  }, [dispatch]);
  return (
    <>
      <div className={styles.church_container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.heading}>
            <h1>Create office</h1>
          </div>
          <div className={styles.wrapper2}>
            <label className={styles.label}>Name of office</label>
            <input
              type="text"
              required
              className={styles.input}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <span className={styles.focus_input2}></span>
          </div>

          {officeCreateError && (
            <p style={{ color: "red" }}>{officeCreateError}</p>
          )}
          {officeCreateSuccess && (
            <p style={{ color: "green" }}>Successfully created</p>
          )}
          <button type="submit" className={styles.admin_btn}>
            {officeCreateLoading ? "Loading...." : "Create Office"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateOffice;
