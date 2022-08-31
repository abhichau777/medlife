import React from "react";
import "./PeopleAlsoSearchFor.css";
import img1 from "./Images/posf1.png";
import img2 from "./Images/posf2.png";
import img3 from "./Images/posf3.png";
import img4 from "./Images/posf4.png";
import img5 from "./Images/posf5.png";

function PeopleAlsoSeachFor() {
  return (
    <div className="people-also-search-for">
      <h1 className="posf-heading">People Also Search For</h1>
      <div className="posf-row">
        <div className="posf-pro">
          <img src={img1} alt="" />
          <p>
            VINAURA Microfiber Beauty Blender, Latex free, Microfiber Velvet
            Sponge, Used as Wet and dry Sponge both, for Airbrushed Makeup
            Finish (Rose & Aqua, 1 pc each)
          </p>
        </div>
        <div className="posf-pro">
          <img src={img2} alt="" />
          <p>
            Maybelline New York Compact Powder, With SPF to Protect Skin from
            Sun, Absorbs Oil, Fit Me, 330 Tofee, 8g
          </p>
        </div>
        <div className="posf-pro">
          <img src={img3} alt="" />
          <p>
            Maybelline New York Fit Me Concealer, Liquid, Natural, 40 Caramel
          </p>
        </div>
        <div className="posf-pro">
          <img src={img4} alt="" />
          <p>
            Title - Maybelline New York Primer, Oils Absorbing, Moisturises and
            Smooths Skin, Long-lasting, Fit Me Matte + Poreless Finish{" "}
          </p>
        </div>
        <div className="posf-pro">
          <img src={img5} alt="" />
          <p>
            Maybelline New York Fit Me Matte Poreless Powder, 330 Toffee, 8.5g{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PeopleAlsoSeachFor;
