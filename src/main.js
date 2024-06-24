import React, { useEffect, useState } from "react";
import axios from "axios";
import image from "../src/assets/1.jpg";
import "./main.css";

function Main({ category, darkMode }) {
  const [valueFromApi, SetValueFromApi] = useState([]);

  useEffect(() => {
    async function apiCall() {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=5067406ab57340b9a6184676af7c6160`;

      try {
        let apiData = await axios.get(url);
        SetValueFromApi(apiData.data.articles);
      } catch (err) {
        console.error(err);
      }
    }

    apiCall();
  }, [category]);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <div
      className={`container mt-5 p-5 ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="row">
        {valueFromApi
          .filter((item) => item.author !== null)
          .map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div
                className={`card h-100 ${
                  darkMode ? "dark-mode" : "light-mode"
                }`}
              >
                <div className="image-container">
                  <img
                    className="card-img-top"
                    src={item.urlToImage ? item.urlToImage : image}
                    alt="News"
                    style={{ objectFit: "initial", height: "150px" }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    {item.title
                      ? item.title.length > 200
                        ? item.title.slice(0, 200) + "...."
                        : item.title
                      : ""}
                  </h5>
                  <a
                    href={item.url}
                    target="_blank"
                    className="btn btn-secondary mt-auto"
                    style={{ width: "150px" }}
                    rel="noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Main;
