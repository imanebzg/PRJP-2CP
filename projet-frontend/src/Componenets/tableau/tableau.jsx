import React from "react";
import "./tableau.css";

// import "./review.css";
export default function page15() {
  return (
    <div>
      <div class="tableau-affichage">
        <div class="vector-785"></div>
        <br />
        <br />
        <br />
        <div class="ligne1">
          <span class="type-poste"> Type poste </span>
          <span class="co-2"> CO2 </span>
          <span class="ch-4-f"> CH4f </span>
          <span class="ch-4-d"> CH4d </span>
          <span class="n-2-o"> N2O </span>
          <span class="autre"> Autre </span>
          <span class="total"> Total </span>
          <span class="co-2-b"> CO2b </span>
        </div>

        <div class="ligne">
          <span class="case1"> Combustion </span>
          <span class="case2">50.2 </span>
          <span class="case3"> </span>
          <span class="case4"> </span>
          <span class="case5"> </span>
          <span class="case6"> 0</span>
          <span class="case7"> </span>
          <span class="case8"> </span>
        </div>
        <div class="ligne">
          <span class="case1"> Amont </span>
          <span class="case2">50.2 </span>
          <span class="case3"> </span>
          <span class="case4"> </span>
          <span class="case5"> </span>
          <span class="case6"> 0</span>
          <span class="case7"> </span>
          <span class="case8"> </span>
        </div>
        <div class="ligne last">
          <span class="case1"> Total </span>
          <span class="case2 lastcase">50.2 </span>
          <span class="case3"> </span>
          <span class="case4"> </span>
          <span class="case5"> </span>
          <span class="case6"> 0</span>
          <span class="case7"> </span>
          <span class="case8"> </span>
        </div>
      </div>
    </div>
  );
}
