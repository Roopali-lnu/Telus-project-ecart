import React from "react";
import category from '../json-api/category-api.json'
import { useNavigate } from "react-router-dom";
const Category = () => {
  const cat=category;
  const navigate=useNavigate();
  const handleClick=(id)=>{
    navigate(`/products/${id}`)
  }
  return (
    <div className="container">
      <div className="row mt-4">
      <h4>Shop by Category</h4>
        {
        cat.map(data=>{
          return (
            <div className="col-4 col-sm-3" key={data.cat_id} onClick={()=>{handleClick(data.cat_id)}}>
              <div className='rounded float-start mt-4 w-75'>
                <img src={data.cat_image} className="img-fluid img-thumbnail" alt='breakfast' style={{ backgroundColor: "#e1efef", borderRadius: "30px" }} />
                <b> {data.cat_name}</b>
              </div>
          </div>
          )
        })
        }
      </div>
    </div>

  )
}

export default Category;
