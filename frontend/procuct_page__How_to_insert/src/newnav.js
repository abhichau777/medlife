import React from "react";
import "./newnav.css";
import Map from "./Logos/map.png";
import Search from "./imgs/search.png";
import User from "./Logos/user1.svg";
import Cart from "./Logos/cart1.svg";

function Navbar() {
  return (
    <div>
      {/* <nav className="header_main">
                <img src={require(".̉/imgs/Medlife.png")} alt="logo" className="header-logo" />
                
                <div className="city-select">
̉
                </div>



                <div className="search">
                    <input type="search" placeholder="Search for medicine and wellness products" className="header-input"/>
                    <img src={require("./imgs/search.png")} alt="search" className="header-seach-icon"/>
                </div>
            </nav> */}
      <nav className="header_main">
        <img
          src={require("./imgs/Medlife.png")}
          alt="logo"
          className="header-logo"
        />

        <img src={Map} alt="map" className="map-icon" />

        <div className="sel-city">
          <div className="del-main">
            <div
              style={{
                fontSize: "12px",
              }}
            >
              Deliver At
            </div>
            {/* <select className="select-city">
              <option value="0">Select City</option>
              <option value="1">Bangalore</option>
              <option value="2">Mumbai</option>
              <option value="3">Chennai</option>
              <option value="4">Pune</option>
            </select> */}
            <input type="text" placeholder="Select City" className="select-city" />
          </div>
        </div>

        <div className="search-bar">
          <select className="search-select">
            <option value="0">All</option>
            <option value="1">Medicine</option>
            <option value="2">wellness</option>
            <option value="2">Labtest</option>
            <option value="2">Beauty</option>
            <option value="2">HealthCare</option>
          </select>
          <input
            type={"search"}
            placeholder="Search for medicine and wellness products"
            className="header-input"
          />
          <div>
            <button className="search-button">
              <img src={Search} />
            </button>
          </div>
        </div>

        <div className="profile">P</div>

        <div className="nav-btn">
          <button>
            <div className="cart-btn">
              <img src={Cart} />
              Cart
            </div>
          </button>

          <button>
            <div className="logout-btn">
              <img src={User} />
              Logout
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
