import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <div className="row">
          <div className="col-7">
            <input
              type="text"
              className="form-control"
              placeholder="Search Location"
              id="search-city-input"
              autoComplete="off"
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
