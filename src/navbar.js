import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar({ setCategory, darkMode, setDarkMode }) {
  function onChangeSelectoptions(e) {
    setCategory(e.target.value);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <h3>India Daily News</h3>

        <span>
          <i
            onClick={() => setDarkMode(!darkMode)}
            className="bi bi-circle-half"
            style={{
              position: "absolute",
              left: "70%",
              top: "15%",
              fontSize: "25px",
            }}
          ></i>
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  justify-content-end"
          id="navbarNav"
        >
          <div className="d-flex align-items-center ms-3">
            <label htmlFor="select" className="me-2 h5 mb-0">
              Category
            </label>
            <select
              name="select"
              id="select"
              className="form-select me-3"
              style={{ width: "auto" }}
              aria-label="Default select example"
              onChange={onChangeSelectoptions}
            >
              <option value="General" className="selected">
                General
              </option>
              <option value="Business">Business</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Health">Health</option>
              <option value="Science">Science</option>
              <option value="Sports">Sports</option>
              <option value="Technology">Technology</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
