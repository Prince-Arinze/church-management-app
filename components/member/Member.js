import { useEffect, useState } from "react";

import styles from "../../styles/Register.module.css";

import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../../action/category";
import { createMember } from "../../action/member";

const CreateMember = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");

  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const memberCreate = useSelector((state) => state.memberCreate);
  const adminLogin = useSelector((state) => state.adminLogin);
  const info = adminLogin && adminLogin;

  const {
    loading: memberCreateLoading,
    error: memberCreateError,
    success: memberCreateSuccess,
  } = memberCreate;
  const {
    loading: categoryFetchLoading,
    error: categoryFetchError,
    category: categoryFetchSuccess,
  } = categoryList;

  const getCategory = categoryFetchSuccess && categoryFetchSuccess;

  const dataToSubmit = {
    first_name,
    last_name,
    email,
    phone,
    church: "",
    category,
    city,
    street,
    state,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createMember(dataToSubmit));
  };

  console.log("login: ", adminLogin);

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  return (
    <>
      <div className={styles.register_container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {memberCreateLoading && <p>Loading...</p>}
          {memberCreateError && (
            <p style={{ color: "red" }}>{memberCreateError}</p>
          )}
          {memberCreateSuccess && (
            <p style={{ color: "green" }}>{memberCreateSuccess}</p>
          )}
          <div className={styles.form_datas}></div>
          <div className={styles.heading}>
            <h1>Add Member</h1>
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
            <label className={styles.label}>Category:</label>

            <select
              className={styles.admin_role}
              onChange={(e) => setCategory(e.target.value)}
              value={category._id}
            >
              <option disabled>Others</option>
              {getCategory &&
                getCategory.category?.map((category, index) => (
                  <>
                    <option value={category._id} key={index}>
                      {category.name}
                    </option>
                  </>
                ))}
            </select>

            <span className={styles.focus_input2}></span>
            {categoryFetchLoading && <div>Fetching data..</div>}
            {categoryFetchError && <div>{categoryFetchError}</div>}
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
          <button type="submit" className={styles.admin_btn}>
            Add Member
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateMember;
