import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  return (
    <div className="container">
      <div className="con">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img className="logo-card-css" src={props.imgl} />
            </div>
            <div className="col-8">
              <div className="logo-name-div-css"><h3 className="logo-name-card-css">{props.cname}</h3></div>
            </div> 
          </div>
          <div className="row mt-3">
            <div className="container">
              <div className="row">
                <p className="text-1">
                  recent valuation :
                  {props.ev}
                </p>
              </div>
              <div className="row mt-2">
                <p className="text-1">
                  Top Investors :  
                  {props.in}
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4 btn-card-css">
          <div className="col">

          </div>
            <div className="col">
              <NavLink to={`/company/${props.cname}`} style={{ textDecoration: 'none' }} ><Button name="sell/buy" /></NavLink>
            </div>
            <div className="col">

          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
