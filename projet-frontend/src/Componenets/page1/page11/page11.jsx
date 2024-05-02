import React from "react";
import "./page11.css";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function page11() {
  return (
    <div>
      {" "}
      <div className="pg1">
        <div className="container-page11">
          <div className="top-bar">
            <div className="container-4">
              <IoMenu className="menu" />
              <div className="rectangle-4137"></div>
            </div>

            <div className="container-4">
              <IoNotifications className="not" />
              <FaEarthAmericas className="earth" />
            </div>
          </div>
          <div className="rectangle-4171"></div>
          <span className="bienvenu">
            Bienvenu dans notre site web, ou vous pourrez calculer le bilan
            carbone de votre entreprise.
            <br />
            <br />
          </span>
          <Link to={"/espace-de-travail"}>
            <span className="appuyez-pour-continuer">
              {" "}
              Appuyez pour continuer ...{" "}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
