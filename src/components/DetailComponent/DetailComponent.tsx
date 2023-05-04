import React from 'react'
import { ChipsTypes } from '../ChipsTypes/ChipsTypes'

export const DetailComponent = () => {
  return (
    <div className="card main mg-bottom-64px">
   <div className="image-wrapper position-relative">
      <img src="https://assets.website-files.com/61e0a7ab0e57e943a15f3b14/61e1c88e4a174865fe2a9046_image-6-thumbnail-menu-qrcode-template.jpg" loading="eager" alt="Regular Soda" sizes="(max-width: 767px) 100vw, (max-width: 991px) 93vw, 838px" srcSet="https://assets.website-files.com/61e0a7ab0e57e943a15f3b14/61e1c5e74a1748310f2a7f2f_image-1-menu-qrcode-template-p-500.jpeg 500w, https://assets.website-files.com/61e0a7ab0e57e943a15f3b14/61e1c5e74a1748310f2a7f2f_image-1-menu-qrcode-template-p-1080.jpeg 1080w, https://assets.website-files.com/61e0a7ab0e57e943a15f3b14/61e1c5e74a1748310f2a7f2f_image-1-menu-qrcode-template-p-1600.jpeg 1600w, https://assets.website-files.com/61e0a7ab0e57e943a15f3b14/61e1c5e74a1748310f2a7f2f_image-1-menu-qrcode-template.jpg 1680w" className="image cover"></img>
      <div className="position-absolute bottom">
         <div className="container-default w-container">
            <div className="mg-bottom-64px">
               <div className="inner-container _500px-mbl center-element">
                  <div className="inner-container _710px center-element">
                     <div className="badge-secondary large">
                        <div className="text-300 extra-bold color-neutral-800">€ 1,99</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="section pd-top-64px wf-section">
      <div className="container-default w-container">
         <div className="inner-container _500px-mbl center-element">
            <div className="inner-container _710px center-element">
               <div className="flex-horizontal space-between align-center flex-vertical-mbl">
                  <div className="mg-bottom-35px-mbl">
                     <h1 className="heading-h2-size">Title</h1>
                     <div className="hidden-on-desktop display-block-mbl">
                        <div className="inner-container _358px">
                           <p className="mg-bottom-28px">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod dolor</p>
                        </div>
                     </div>
                     <ChipsTypes />
                  </div>
                  <div><a href="/product/regular-soda" className="btn-primary w-button">Contatta</a></div>
               </div>
               <div className="divider _54px"></div>
               <div className="mg-bottom-24px">
                  <h2 className="heading-h3-size mg-bottom-16px">Informazioni</h2>
                  <div className="rich-text w-richtext">
                     <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aenean nisl mauris, iaculis nec purus et maximus condimentum leo fusce eget hendrerit sapien nam ullamcorper mattis suscipit.</p>
                  </div>
               </div>
               <div>
                  <h2 className="heading-h3-size mg-bottom-16px">Ingredienti</h2>
                  <div className="rich-text w-richtext">
                     <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aenean nisl mauris, iaculis nec purus et maximus condimentum.</p>
                     <ul role="list">
                        <li>In in nibh id libero pretium condimentum sed non mi.</li>
                        <li>Quisque condimentum tortor sed justo mattis ullamcorper.</li>
                        <li>Phasellus congue ante faucibus mi fringilla volutpat.</li>
                     </ul>
                  </div>
               </div>
               <div>
                  <h2 className="heading-h3-size mg-bottom-16px">Allergeni</h2>
                  <div className="rich-text w-richtext">
                     <ul role="list">
                        <li>In in nibh id libero pretium condimentum sed non mi.</li>
                        <li>Quisque condimentum tortor sed justo mattis ullamcorper.</li>
                        <li>Phasellus congue ante faucibus mi fringilla volutpat.</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
  )
}
