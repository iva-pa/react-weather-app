import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-7">
            <input
              type="search"
              className="form-control"
              placeholder="Search Location"
              id="search-city-input"
              autoComplete="off"
              onChange={updateCity}
            />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Your location"
              className="btn btn-primary"
              id="current-location"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
