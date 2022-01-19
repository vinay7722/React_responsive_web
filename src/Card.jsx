import React from "react";
import { NavLink } from "react-router-dom";
import img from "../src/Images/image1.jpg";
import './index.scss'

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                  <div className="card" >
                      <img src={props.imgsrc} className="card-img-top img" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">as</p>
                        <NavLink to="" className="btn btn-primary">button name</NavLink>
                      </div>
                    </div>
                  </div>
        </>
    );
}

export default Card;