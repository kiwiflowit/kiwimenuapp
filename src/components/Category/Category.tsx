import React from "react";
import "./style.css"
export const Category = () => {
  return (
    <div role="listitem" className="w-dyn-item btn-secondary" style={{backgroundColor: "transparent", borderColor: "transparent"}}>
      <div className="container">
        <a
          href="/category/breakfast"
          className="link-content menu-category w-inline-block"
        >
          <div className="mg-bottom-24px">
            <div className="image-wrapper border-radius-26px">
              <img
                src="https://assets.website-files.com/61e0a7ab0e57e943a15f3b14/61e1ccbeabd595382756e6a8_image-1-categories-qrcode-template.svg"
                loading="eager"
                alt="Breakfast"
                className="image cover"
              />
            </div>
          </div>
          <div className="inner-container _330px center-element">
            <div className="text-center">
              <h3 className="heading-h3-size">Breakfast</h3>
              <p className="mg-bottom-18px">Lorem ipsum.</p>
              <div className="link-wrapper color-primary text-200 extra-bold">
                <div className="link-text">Mostra</div>
                <div className="line-rounded-icon link-icon-right"></div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
