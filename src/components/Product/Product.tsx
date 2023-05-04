import React from "react";
import { ChipsTypes } from "../ChipsTypes/ChipsTypes";

export const Product = () => {
  return (
    <a href="/menu/classNameic-burger" className="link-content menu w-inline-block">
      <div className="flex-horizontal align-center flex-vertical-mbl">
        <div className="mg-right-35px mg-right-0px-mbl mg-bottom-44px-mbl">
          <div className="inner-container _240px max-w-100-mbl">
            <div className="image-wrapper border-radius-16px">
              <img
                src="https://assets.website-files.com/61e0a7ab0e57e943a15f3b14/61e1c88e4a174865fe2a9046_image-6-thumbnail-menu-qrcode-template.jpg"
                loading="eager"
                alt="classNameic Burger"
                className="image cover"
              />
            </div>
          </div>
        </div>
        <div className="inner-container _430px max-w-100-mbl">
          <div className="mg-bottom-11px">
            <div className="flex-horizontal space-between align-center children-wrap">
              <div className="mg-right-16px">
                <h2 className="heading-h3-size mg-bottom-0">Title</h2>
              </div>
              <div className="heading-h5-size">€ 10,99</div>
            </div>
          </div>
          <p className="mg-bottom-32px mg-bottom-18px-mbl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod dolor
          </p>
          <ChipsTypes />
        </div>
      </div>
    </a>
  );
};
