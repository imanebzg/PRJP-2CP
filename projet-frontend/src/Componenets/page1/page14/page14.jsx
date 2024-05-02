import React from "react";
import "./page14.css";

import { FaEarthAmericas } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
// import "./review.css";
export default function Page14() {
  return (
    <div>
      <div className="page14">
        <div className="cont">
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
          <div className="espaces-travail14">
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
          </div>
          <div className="part2">
            <div className="invite-a-new-user">Inviter un utilisateur</div>
            <div className="input-1">
              <label for="name" className="form-label f">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Enter your name"
              />
            </div>

            <div className="input-2">
              <label for="email" className="form-label f">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
              />
            </div>
            <div className="input-3">
              <label for="company" className="form-label f">
                Company name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="form-input"
                placeholder="Enter your company name"
              />
            </div>
            <div className="containerr">
              <div className="radio-group">
                <div className="radio-label f">Role</div>
                <div className="radio-cont">
                  <label className="custom-radio f">
                    Administrateur
                    <input
                      className="put"
                      type="radio"
                      name="role"
                      value="administrateur"
                    />
                  </label>
                  <label className="custom-radio simple-utilisateur">
                    Simple utilisateur
                    <input
                      className="put"
                      type="radio"
                      name="role"
                      value="utilisateur"
                    />
                  </label>
                </div>
              </div>
              <button className="inviter2">Inviter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
