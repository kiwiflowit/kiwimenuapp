import React from "react";
import { Product } from "../Product/Product";

export const ProductsContainer = () => {
  return (
    <div className="card main mg-bottom-64px">
      <div className="section hero-default wf-section">
        <div className="container-default w-container">
          <div className="w-dyn-list">
            <div
              role="list"
              className="grid-1-column gap-row-24px gap-row-80px-mbl w-dyn-items"
            >
              <div role="listitem" className="w-dyn-item">
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
