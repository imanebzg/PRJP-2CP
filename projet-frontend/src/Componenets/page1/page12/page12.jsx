import React from "react";
import "./page12.css";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { PiArrowFatRightFill } from "react-icons/pi";
import { Link } from "react-router-dom";
// import "./review.css";
export default function page12() {
  const users = [{
    name:"test",
    email:"email@gmail.com"
    ,role:"admin"
  },
  {name:"test",
  email:"email@gmail.com",
  role:"admin"},
  {name:"test",
  email:"email@gmail.com",
  role:"admin"}]
  
  return (
    <div className="">
      <div className="page12">
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

        <div className="groupe12">
          <div className="espaces-travail12">
            <div className="title">
              <span className="mes-espaces-de-travail">
                {" "}
                Mes espaces de travail{" "}
              </span>
            </div>
            <div className="frame-42731898322">
              <span className="esp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
          </div>
          <div className="ligne1">
            <div className="nom">Nom</div>
            <div className="email-1">Email</div>
            <div className="votre-role">Votre role</div>
          </div>

        { users.map(user=>{ 

          return(<div className="ligne2">
            <div className="frame-427318970">
              <span className="aaaaa"> {user.name} </span>
            </div>
            <div className="frame-4273189701">
              <span className="email"> {user.email} </span>
            </div>
            <div className="frame">
              <span className="admin1"> {user.role} </span>
            </div>
            <PiArrowFatRightFill className="fleche" />
            <IoMdPerson className="person" />
          </div>)
        })
          }
          
        </div>

          <button type="gestion-de-comptes" className="gestion-de-comptes">
            Gestion de comptes
          </button>
       
      </div>
    </div>
  );
}
