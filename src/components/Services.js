import React from "react";
import corporate from "./Image/corporate-identity.png";
import design from "./Image/design.png";
import developing from "./Image/developing.png";
import mobile from "./Image/mobile-shopping.png";
import socialmedia from "./Image/social-media.png";
import shopping from "./Image/shopping.png";
import campaign from "./Image/campaign.png";
import sales from "./Image/sales.png"
const Services = () => {
  return (
    <div className="container">
      <div className="row g-2 mt-3">
        <h3 className="text-center">*******Our Services*******</h3>
        <br />
        <p className="text-center">“There are no traffic jams along the extra mile.”</p>
        <div className="col-3">
          <div className='rounded mx-auto d-block w-25'>
            <img src={corporate} className="img-fluid img-thumbnail" alt='corporate' />
            <b>Business</b>
          </div>
        </div>
        <div className="col-3">
          <div className='rounded mx-auto d-block w-25'>
            <img src={design} className="img-fluid img-thumbnail" alt='design' />
            <b>Web</b>
          </div>
        </div>
        <div className="col-3">
          <div className='rounded mx-auto d-block w-25'>
            <img src={developing} className="img-fluid img-thumbnail" alt='developing' />
            <b>Developing</b>
          </div>
        </div>
        <div className="col-3">
          <div className='rounded mx-auto d-block w-25'>
            <img src={mobile} className="img-fluid img-thumbnail" alt='mobile' />
            <b>Shopping</b>
          </div>
        </div>
        <div className="col-3">
          <div className='rounded mx-auto d-block w-25'>
            <img src={socialmedia} className="img-fluid img-thumbnail" alt='socialmedia' />
            <b>Social</b>
          </div>
        </div>
        <div className="col-3">
          <div className='rounded mx-auto d-block w-25'>
            <img src={shopping} className="img-fluid img-thumbnail" alt='shopping' />
            <b>Ecommerce</b>
          </div>
        </div>
        <div className="col-3">
          <div className='rounded mx-auto d-block w-25'>
            <img src={campaign} className="img-fluid img-thumbnail" alt='campaign' />
            <b>Campaign</b>
          </div>
        </div>
        <div className="col-3">
          <div className='rounded mx-auto d-block w-25'>
            <img src={sales} className="img-fluid img-thumbnail" alt='sales' />
            <b>Sales</b>
          </div>
        </div>
      </div>
      <br />
      <br />
      <p className="text-center">Earn your success based on service to others, not at the expense of others.The aim of marketing is to know and understand the customer so well the product or service fits him and sells itself.
        Know what your customers want most and what your company does best. … Focus on where those two meet.</p>
    </div>
  )

}

export default Services
