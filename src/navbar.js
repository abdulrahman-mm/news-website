import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar({ setCategory, darkMode, setDarkMode }) {
  function onChangeSelectoptions(e) {
    setCategory(e.target.value);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <h3 className="text-white">Your News Partner</h3>

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
            <label htmlFor="select" className="me-2 h5 mb-0 text-white">
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
              <option value="entertainment" className="selected">
                Entertainment
              </option>
              <option value="sports">Sports</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="business">Business</option>
              <option value="health">Health</option>
              <option value="finance">Finance</option>
              <option value="world">World</option>
              <option value="food">Food</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
