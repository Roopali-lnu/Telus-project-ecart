import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../json-api/products-api.json'
import subCat from '../json-api/sub-cat-api.json'
import mainCat from '../json-api/category-api.json'

const Products = () => {
  const params = useParams();
  const [filter,setFilter]=useState(false)
  const [filterData,setFilterData]=useState()
  const { id } = params;
  const subcategory = subCat
  const catNames=mainCat
  const prod = products
  const catName=catNames.filter((newVal) => {
    return newVal.cat_id == id;
  });
  const pro = prod.filter((newVal) => {
    return newVal.cat_id == id;
  });
  const sub = subcategory.filter((newVal) => {
    return newVal.cat_id == id;
  });
  
  const filterClick=(id)=>{
     let filterPro=prod.filter((newVal) => {
      return newVal.sub_cat_id == id;
    });
    setFilter(true);
    setFilterData(filterPro)
  }
  return (
    <div className="container-fluid mt-3">

      <div class="container overflow-hidden">
        <div class="row gy-1">
          <div class="col-12">
            <div class="p-1 border bg-light">
              <h3 className="text-center">{catName[0].cat_name}</h3>
              <p className="text-center">{prod.length} Products</p>
            </div>

          </div>
          <div class="col-2 sm-3">
            <div class="p-3 border bg-light">
              <ul class="navbar-nav">
                {
                  sub.map(s => {
                    return (
                      <li class="nav-item" onClick={()=>{filterClick(s.sub_cat_id)}}>
                        <div className='rounded mx-auto d-block '>
                          <img src={s.sub_cat_image} className="img-fluid img-thumbnail rounded-circle" alt='freshveg' />
                          <p className='text-center'>{s.sub_cat_name}</p>
                        </div>
                      </li>
                    )
                  })
                }

              </ul>
            </div>
          </div>
          <div class="col-10" style={{ background: "#F4F9F2", borderRadius: "30px" }}>
            <div className="row" >

              
                 {filter? filterData.map(product => {
                  return (
                    <div className="col-4 col-sm-3">
                      <div className='rounded float-start mt-4 w-75' style={{ background: "#ffffff" }}>
                        <img src={product.pro_image} className="img-fluid img-thumbnail" alt='sweettooth' />
                        <p className='text-center'>{product.pro_name}</p>
                        <button className='float-end fw-bold' style={{ borderRadius: "10px", backgroundColor: "#ecffec", color: "#2B8000", border: "1px solid #2B8000", width: "100px" }}>ADD</button>
                      </div>
                    </div>
                  )
                })
              :
              pro.map(product => {
                return (
                  <div className="col-4 col-sm-3">
                    <div className='rounded float-start mt-4 w-75' style={{ background: "#ffffff" }}>
                      <img src={product.pro_image} className="img-fluid img-thumbnail" alt='sweettooth' />
                      <p className='text-center'>{product.pro_name}</p>
                      <button className='float-end fw-bold' style={{ borderRadius: "10px", backgroundColor: "#ecffec", color: "#2B8000", border: "1px solid #2B8000", width: "100px" }}>ADD</button>
                    </div>
                  </div>
                )
              })}
              


            </div>


          </div>

        </div>
      </div>
    </div>

    // </div>
  )
}

export default Products