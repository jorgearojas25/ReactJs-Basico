import React from "react";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import Badge from '../components/Badge'
import './styles/BadgeNew.css'
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge firstName="Jorge" lastName="Rojas" jobTitle="Fronend Engenieer" twitter="jorgearojas25" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
