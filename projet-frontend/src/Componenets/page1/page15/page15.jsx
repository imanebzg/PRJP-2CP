import React from "react";
import "./page15.css";
import HomeIcon from "@material-ui/icons/Home";
import { MdExpandMore } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

// import "./review.css";
export default function page15() {
  return (
    <div>
      <div className="page15">
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
        <div className="sagit">
          <div className="sagit1">
            <div className="a7">
              <div className="frame-427318983">
                <div className="de-quoi-sagit-it"> De quoi s’agit-it? </div>
                <MdExpandMore className="expand_more" />
              </div>
              <div className="frame-427318984">
                <div className="crer-un-nouveau-bilan-de-carbone">
                  Créer un nouveau bilan de carbone
                </div>
                <FaCirclePlus className="plus" />
              </div>
              <div className="frame-427318985">
                <span className="comparer-les-bilans-carbones-calcules">
                  Comparer les bilans carbones calcules
                </span>
              </div>
            </div>
            <div className="rectangleb"></div>
          </div>
        </div>
        <div className="tableau">
          <div className="ligne1">
            <div className="annee">Annee</div>
            <div className="avancement">Avancement</div>
            <div className="emissions">Emissions</div>
            <div className="actions">Actions</div>
          </div>
          <div className="ligne2">
            <div className="frame-4273189703">
              <span className="aaaaaa-4"> 2018 </span>
            </div>
            <div className="frame-4273189705">
              <span className="email-6"> 02% </span>
            </div>
            <div className="frame-4273189707">
              <span className="admin-8"> 1039tKgCo2e </span>
            </div>
            <div className="ic-forward-48-px-10">
              {/* <img className="vector-26" /> */}
            </div>
            <div className="ic-person-48-px-9">
              {/* <img className="vector-25" /> */}
            </div>
          </div>
          <div className="ligne2">
            <div className="frame-4273189703">
              <span className="aaaaaa-4"> 2018 </span>
            </div>
            <div className="frame-4273189705">
              <span className="email-6"> 02% </span>
            </div>
            <div className="frame-4273189707">
              <span className="admin-8"> 1039tKgCo2e </span>
            </div>
            <div className="ic-forward-48-px-10">
              {/* <img className="vector-26" /> */}
            </div>
            <div className="ic-person-48-px-9">
              {/* <img className="vector-25" /> */}
            </div>
          </div>
          <div className="ligne2">
            <div className="frame-42731897012">
              <span className="aaaaaa-13"> 2018 </span>
            </div>
            <div className="frame-42731897014">
              <span className="email-15"> 02% </span>
            </div>
            <div className="frame-42731897016">
              <span className="admin-17"> 1039tKgCo2e </span>
            </div>
            <div className="ic-forward-48-px-19">
              {/* <img className="vector-28" /> */}
            </div>
            <div className="ic-person-48-px-18">
              {/* <img className="vector-27" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
