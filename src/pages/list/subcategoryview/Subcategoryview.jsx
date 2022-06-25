import React from 'react'
import "./subcategoryview.scss"
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useParams, useNavigate } from 'react-router-dom'
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


const Subcategoryview = () => {
    const params = useParams();
  const navigate = useNavigate();
  const [subcategoryName, setName] = useState("");
  const [descripition, setDescription] = useState("");
  const [subcategoryIcon, setImage] = useState("");

  useEffect(async () => {
    
    getSubCategoryDetails(params.id);
}, [])

const getSubCategoryDetails = async (id) => {
  
  var result =await axios.post('http://localhost:8000/api/subcategory/getsubCategory', 
  {id})
  var result = await result.data
  
  setName(result[0].subcategoryName);
  console.log(result[0].categoryName)

  setDescription(result[0].descripition);
  console.log(result[0].descripition)

  setImage(result[0].subcategoryIcon);
  console.log(result[0].categoryIcon)
 
}
  return (
    <div className="sub-categoryview">
      <Sidebar />
      <div className="sub-categoryviewContainer">
        <Navbar />
        <div className="temp-sub">
        <div className="camp1">
        <h1 className='d-flex justify-content-center mt-2 mb-4'>Sub-Category: <strong> {subcategoryName}</strong></h1>
        <div className="row">
          <div className="col-4 d-flex flex-row-reverse">
          <img className='previewImage img-thumbnail' src="https://images.news18.com/ibnlive/uploads/2021/09/flipkart_sale_bigbillion.jpg?impolicy=website&width=0&height=0" alt="image" />  
          </div>
          <div className="col-8">
          <div className="details mb-4">
                  <h5 className="field" >
                    Sub-Category Name:
                  </h5>
                  <input
                    type="text"
                    name="Name"

                    size="80"
                    defaultValue={subcategoryName}
                    disabled
                  />
          </div>
          <div className="details mb-4">
                  <h5 className="field">
                    Sub-Category Description:
                  </h5>
                  <div  className='parsedHTMLforSub' dangerouslySetInnerHTML={{__html: descripition}}></div>
                </div>
                <Link to="/subcategary" ><button className='buttonN' >  Done</button></Link>
        </div> 
        </div>
        </div>
      </div>

    </div>
    </div>
  );
}

export default Subcategoryview