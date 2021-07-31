import { useState, useEffect } from "react";

import styles from "../../styles/Church.module.css";

import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../action/category";

const Category = () => {
  const [churchId, setChurchId] = useState("");
  const [name, setName] = useState("");
  const dataToSubmit = {
    name,
    churchId,
  };

  const dispatch = useDispatch();
  const categoryCreate = useSelector((state) => state.categoryCreate);
  const {
    loading: categoryCreateLoading,
    success: categoryCreateSuccess,
    error: categoryCreateError,
    category,
  } = categoryCreate;

  console.log(churchId, category);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCategory(dataToSubmit));
  };
  useEffect(() => {
    const data =
      localStorage.getItem("adminInfo") &&
      JSON.parse(localStorage.getItem("adminInfo"));
    const res = data.results ? data.results.church?._id : data.results.user._id;
    console.log(res);
    setChurchId(res);
  }, [dispatch]);
  return (
    <>
      <div className={styles.church_container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.heading}>
            <h1>Create category</h1>
          </div>
          <div className={styles.wrapper2}>
            <label className={styles.label}>Category</label>
            <input
              type="text"
              required
              className={styles.input}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <span className={styles.focus_input2}></span>
          </div>

          {categoryCreateError && (
            <p style={{ color: "red" }}>{categoryCreateError}</p>
          )}
          {categoryCreateSuccess && (
            <p style={{ color: "green" }}>Successfully created</p>
          )}
          <button type="submit" className={styles.admin_btn}>
            {categoryCreateLoading ? "Loading...." : "Create Category"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Category;
