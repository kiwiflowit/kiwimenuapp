import React from "react";
import { Category } from "../Category/Category";
import "../Categories/style.css";
export const Categories = () => {
  return (
    <div className="section wf-section">
      <div className="container-default w-container">
        <div className="inner-container _710px center-element">
          <h2 className="text-center mg-bottom-32px">
            Categorie
          </h2>
          <div className="w-dyn-list">
            <div
              role="list"
              className="menu-categories w-dyn-items scrollmenu"
            >
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
