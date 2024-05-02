import React from "react";
import "./page13.css";
import HomeIcon from "@material-ui/icons/Home";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { PiArrowFatRightFill } from "react-icons/pi";
import { Link } from "react-router-dom";
// import "./review.css";
export default function page13() {
  return (
    <div>
      <div className="page13">
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

        <div className="group-1000000874">
          <div className="espaces-travail13">
            <div className="title">
              <span className="mes-espaces-de-travail">
                {" "}
                Gerer les utilisateurs de l'espace du travail
              </span>
            </div>
            <div className="frame-42731898322">
              <span className="inv">
                Invitez de nouvels utilisateurs de votre entreprise
              </span>
            </div>
         
              <button type="inviter" className="inviter">
                Inviter
              </button>
       
          </div>
          <div className="ligne1">
            <div className="nom">Nom</div>
            <div className="email-1">Email</div>
            <div className="votre-role">Votre role</div>
          </div>
          <div className="ligne2">
            <div className="frame-427318970">
              <span className="aaaaa"> AAAAAA </span>
            </div>
            <div className="frame-4273189701">
              <span className="email"> Email </span>
            </div>
            <div className="frame">
              <span className="admin1"> Admin </span>
            </div>
            <PiArrowFatRightFill className="fleche" />
            <IoMdPerson className="person" />
          </div>
          <div className="ligne3">
            <div className="frame-427318970">
              <span className="aaaaa"> AAAAAA </span>
            </div>
            <div className="frame-4273189705">
              <span className="email"> Email </span>
            </div>
            <div className="frame">
              <span className="admin1"> Admin </span>
            </div>
            <PiArrowFatRightFill className="fleche" />
            <IoMdPerson className="person" />
          </div>
          <div className="ligne4">
            <div className="frame-427318970">
              <span className="aaaaa"> AAAAAA </span>
            </div>
            <div className="frame-42731897014">
              <span className="email"> Email </span>
            </div>
            <div className="frame">
              <span className="admin1"> Admin </span>
            </div>
            <PiArrowFatRightFill className="fleche" />
            <IoMdPerson className="person" />
          </div>
        </div>
      </div>
    </div>
  );
}
