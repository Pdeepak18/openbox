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
  const [description, setDescription] = useState("");
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

  setDescription(result[0].description);
  console.log(result[0].description)

  setImage(result[0].subcategoryIcon);
  console.log(result[0].categoryIcon)
 
}
  return (
    <div className="categoryview">
      <Sidebar />
      <div className="categoryviewContainer">
        <Navbar />
        <div className="temp">
        <div className="camp1">
        <label> <strong> Name :     </strong></label>
        <input type="text" defaultValue={subcategoryName} disabled /> 
        </div>
        <div className="camp1">
        <label> <strong> Description :     </strong></label>
        <input type="text" defaultValue={description} disabled/>
        
        </div>
      
       
        <div className="camp1">
        <label> <strong> Image :     </strong></label>
        </div>
        <div className="campimg">
        

        {/* <input type="file" defaultValue={image}/> <br /> <br /> */}
        <img src="https://images.news18.com/ibnlive/uploads/2021/09/flipkart_sale_bigbillion.jpg?impolicy=website&width=0&height=0"   alt="image" /> <br /> <br />
        </div>
        
        <button > <Link to="/banner" style={{ textDecoration: 'none', color: '#FFF' }}> Done</Link></button>

        </div>
      </div>

    </div>
  )
}

export default Subcategoryview