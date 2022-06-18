import React from 'react'
import "./productview.scss"
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useParams, useNavigate } from 'react-router-dom'
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Productview = () => {
const params = useParams();
  const navigate = useNavigate();
  const [productName, setName] = useState("");
  const [productDescription, setDescription] = useState("");
  const[highlightFeature,setFeature] =useState("")
  const [file, setImage] = useState([]);
  const[color,setColor] = useState([]);

  useEffect(async () => {
    
    getProductDetails(params.id);
}, [])

const getProductDetails = async (id) => {
  
  var result =await axios.post('http://localhost:8000/api/product/getProduct', 
  {id})
  var result = await result.data

  
  setName(result[0].productName);
  console.log(result[0].productName)

  setDescription(result[0].productDescription);
  console.log(result[0].productDescription)

  setImage(result[0].image);
  console.log(result[0].image)

  setColor(result[0].color);
  console.log(result[0].color)

  setFeature(result[0].highlightFeature);
  console.log(result[0].highlightFeature)
 
}

  return (
    <div className="productview">
      <Sidebar />
      <div className="productviewContainer">
        <Navbar />
        <div className="temp">
        <div className="camp1">
        <label> <strong> Name :     </strong></label>
        <input type="text" defaultValue={productName}  disabled /> 
        </div>
        <div className="camp1">
        <label> <strong> Description :     </strong></label>
        <input type="text" defaultValue={productDescription} disabled />
        
        </div>
        <div className="camp1">
        <label> <strong> Feature :     </strong></label>
        <input type="text"  defaultValue={highlightFeature} disabled />
        
        </div>
        <div className="camp1">
        <label> <strong> Color :     </strong></label>
        <input type="text" defaultValue={color} disabled />
        
        </div>

      
       
        <div className="camp1">
        <label> <strong> Image :     </strong></label>
        </div>
        <div className="campimg">
        

        {/* <input type="file" defaultValue={image}/> <br /> <br /> */}
        <img src="https://rukminim1.flixcart.com/image/312/312/kqzj7gw0/washing-machine-new/k/t/a/7-p7020ngay-lg-original-imag4vnghhh5qzhq.jpeg?q=70"   alt="image" /> <br /> <br />
        </div>
        
        <button > <Link to="/product" style={{ textDecoration: 'none', color: '#FFF' }}> Done</Link></button>

        </div>
      </div>

    </div>
  )
}

export default Productview