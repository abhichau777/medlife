import React from 'react'
import './SimilarProduct.css'
import img1 from './Images/img1.png'
import img2 from './Images/img2.png'
import img3 from './Images/img3.png'
import img4 from './Images/img4.png'

function SimilarProduct() {
  return (
      <div className='similar-products'>
          <h1 className='sim-pro-heading'>Similar Products</h1>
          <div className='sim-pro-row'>
              <div className='sim-pro'>
                  <img src={img1} alt="" />
                  <p>
                      Lakme Absolute Skin Natural Mousse, Ivory Fair 01, SPF 8 Natural Finish Matte Cream Foundation -Long Lasting Weightless Full Coverage Face Makeup, 25g
                  </p>
              </div>
              <div className='sim-pro'>
                  <img src={img2} alt="" />
                  <p>
                      LAKMÉ Face Sheer Highlighter, Sun Kissed, 4g

                  </p>
              </div>
              <div className='sim-pro'>
                  <img src={img3} alt="" />
                  <p>
                      Lakme 9 to 5 Flawless Matte Complexion Compact Powder, Almond, Absorbs Oil, Conceals & Gives Radiant Skin - All Day Matte Finish Face Makeup, 8 g
                  </p>
              </div>
              <div className='sim-pro'>
                  <img src={img4} alt="" />
                  <p>
                      Lakme Absolute White Intense Liquid Concealer, Ivory Fair, 5.4ml
                  </p>
              </div>
          </div>
    </div>
  )
}

export default SimilarProduct