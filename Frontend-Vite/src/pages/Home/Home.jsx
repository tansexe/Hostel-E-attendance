import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/img-kiit.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* <div className="banner"> */}
        <div className="headerContainer">
          <h1>E-attendance System</h1>
          <p>KIIT Edition</p>
          <Link to="/Signup">
            <button className="custom-btn">Signup</button>
          </Link>
          <Link to="/Login">
            <button className="custom-btn">Login</button>
          </Link>
          <Link to="/Detection">
            <button className="custom-btn">Detection</button>
          </Link>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Home;
