import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import breakfast from "./Image/Breakfast.png";
import munchies from "./Image/Munchies.png";
import colddrink from "./Image/Colddrink.png";
import tea from "./Image/Tea.png";
import bakery from "./Image/Bakery.png";
import instantfood from "./Image/Instantfood.png";
import sweettooth from "./Image/Sweettooth.png";
import vegtablesfruits from "./Image/Vegtablesfruits.png"
import freshfruits from "./Image/freshfruits.png"
import freshveg from "./Image/freshveg.png"
import sprouts from "./Image/sprouts.png"

const Vegtablesfruits = () => {
    return (
        <div className="container-fluid mt-3">

            <div class="container overflow-hidden">
                <div class="row gy-1">
                    <div class="col-12">
                        <div class="p-1 border bg-light">
                            <h3 className="text-center">Vegtables & Fruits</h3>
                            <p className="text-center">8 Products</p>                            
                        </div>

                    </div>
                    <div class="col-2 sm-3">
                        <div class="p-3 border bg-light">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <div className='rounded mx-auto d-block '>
                                        <img src={freshveg} className="img-fluid img-thumbnail rounded-circle" alt='freshveg' />
                                        <p className='text-center'>Fresh Vegtables</p>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div className='rounded mx-auto d-block '>
                                        <img src={freshfruits} className="img-fluid img-thumbnail rounded-circle" alt='freshfruits' />
                                        <p className='text-center'>Fresh Fruits</p>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div className='rounded mx-auto d-block'>
                                        <img src={sprouts} className="img-fluid img-thumbnail rounded-circle" alt='sprouts' />
                                        <p className='text-center'>Fresh cuts and Sprouts</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-10" style={{ background: "#F4F9F2", borderRadius: "30px" }}>
                        <div className="row" >
                            <div className="col-12 col-sm-3">
                                <div className='rounded float-start mt-4 w-75' style={{ background: "#ffffff" }}>
                                    <img src={vegtablesfruits} className="img-fluid img-thumbnail" alt='vegtablesfruits' />
                                    <p className='text-center'>Vegtables & Fruits</p>
                                    <button className='float-end fw-bold' style={{ borderRadius: "10px", backgroundColor: "#ecffec", color: "#2B8000", border: "1px solid #2B8000", width: "100px" }}>ADD</button>
                                </div>
                            </div>
                            <div className="col-4 col-sm-3">
                                <div className='rounded float-start mt-4 w-75' style={{ background: "#ffffff" }}>
                                    <img src={breakfast} className="img-fluid img-thumbnail" alt='breakfast' />
                                    <p className='text-center'> Dairy & Breakfast</p>
                                    <button className='float-end fw-bold' style={{ borderRadius: "10px", backgroundColor: "#ecffec", color: "#2B8000", border: "1px solid #2B8000", width: "100px" }}>ADD</button>
                                </div>
                            </div>
                            <div className="col-4 col-sm-3">
                                <div className='rounded float-start mt-4 w-75' style={{ background: "#ffffff" }}>
                                    <img src={munchies} className="img-fluid img-thumbnail" alt='munchies' />
                                    <p className='text-center'>Munchies</p>
                                    <button className='float-end fw-bold' style={{ borderRadius: "10px", backgroundColor: "#ecffec", color: "#2B8000", border: "1px solid #2B8000", width: "100px" }}>ADD</button>
                                </div>
                            </div>
                            <div className="col-4 col-sm-3">
                                <div className='rounded float-start mt-4 w-75' style={{ background: "#ffffff" }}>
                                    <img src={colddrink} className="img-fluid img-thumbnail" alt='colddrink' />
                                    <p className='text-center'>Cold Drinks & Juices</p>
                                    <button className='float-end fw-bold' style={{ borderRadius: "10px", backgroundColor: "#ecffec", color: "#2B8000", border: "1px solid #2B8000", width: "100px" }}>ADD</button>
                                </div>
                            </div>

                            <div className="col-4 col-sm-3">
                                <div className='rounded float-start mt-4 w-75' style={{ background: "#ffffff" }}>
                                    <img src={instantfood} className="img-fluid img-thumbnail" alt='instantfood' />
                                    <p className='text-center'>Instant & Frozen Food</p>
                                    <button className='float-end fw-bold' style={{ borderRadius: "10px", backgroundColor: "#ecffec", color: "#2B8000", border: "1px solid #2B8000", width: "100px" }}>ADD</button>
                                </div>
                            </div>
                            <div className="col-4 col-sm-3">
                                <div className='rounded float-start mt-4 w-75' style={{ background: "#ffffff" }}>
                                    <img src={tea} className="img-fluid img-thumbnail" alt='tea' />
                                    <p className='text-center'>Tea, Coffee & Drinks</p>
                                    <button className='float-end fw-bold' style={{ borderRadius: "10px", backgroundColor: "#ecffec", color: "#2B8000", border: "1px solid #2B8000", width: "100px" }}>ADD</button>
                                </div>
                            </div>
                            <div className="col-4 col-sm-3">
                                <div className='rounded float-start mt-4 w-75' style={{ background: "#ffffff" }}>
                                    <img src={bakery} className="img-fluid img-thumbnail" alt='bakery' />
                                    <p className='text-center'>Bakery & Biscuits</p>
                                    <button className='float-end fw-bold' style={{ borderRadius: "10px", backgroundColor: "#ecffec", color: "#2B8000", border: "1px solid #2B8000", width: "100px" }}>ADD</button>
                                </div>
                            </div>
                            <div className="col-4 col-sm-3">
                                <div className='rounded float-start mt-4 w-75' style={{ background: "#ffffff" }}>
                                    <img src={sweettooth} className="img-fluid img-thumbnail" alt='sweettooth' />
                                    <p className='text-center'>Sweet Tooth</p>
                                    <button className='float-end fw-bold' style={{ borderRadius: "10px", backgroundColor: "#ecffec", color: "#2B8000", border: "1px solid #2B8000", width: "100px" }}>ADD</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Vegtablesfruits;
