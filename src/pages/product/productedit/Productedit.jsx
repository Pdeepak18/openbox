import React from 'react'
import "./productedit.scss"
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useParams, useNavigate } from 'react-router-dom'
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const Productedit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [bannerFile, setFile] = useState("");
  const [productName, setName] = useState("");
  const [productDescription, setDescription] = useState("");
  const[highlightFeature,setFeature] =useState("")
  const [file, setImage] = useState([]);
  const[color,setColor] = useState([]);

  useEffect(async () => {
    
    getProductDetails(params.id);
}, [])

//api integrate to fetch details
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

const onFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const editProduct = async () => {
  
  try {
      const formData = new FormData();
      formData.append("id",params.id)
      formData.append("image", bannerFile);
      formData.append("productName",productName );
      formData.append("productDescription", productDescription);
      formData.append("highlightFeature", highlightFeature);
      formData.append("color", JSON.stringify(color));
      const config = {
          headers: {
              "content-type": "multipart/form-data"
          }
      };
      const API = "product/editProductById";
      const HOST = "http://localhost:8000/api";
      const url = `${HOST}/${API}`;

      const result = await axios.post(url, formData, config);



  } catch (error) {
      console.error(error);
  }


};


  return (
    <div className="productview">
      <Sidebar />
      <div className="productviewContainer">
        <Navbar />
        <div className="temp">
          
            <div className="camp1">
        
              <label> <strong> Name :     </strong></label>
              <input type="text" value={productName}  onChange={(e) => {setName(e.target.value)}} /> 
            </div>

            <div className="camp1">
                <label> <strong> Description :     </strong></label>
                  <input type="text" value={productDescription}  onChange={(e) => {setDescription(e.target.value)} }/>
            </div>

            <div className="camp1">
                <label> <strong> Features :     </strong></label>
                  <input type="text" value={highlightFeature}  onChange={(e) => {setFeature(e.target.value)} }/>
            </div>

            <div className="camp1">
                <label> <strong> Color :     </strong></label>
                  <input type="text" value={color}  onChange={(e) => {setColor(e.target.value)} }/>
            </div>
      

            <div className="campimg">
            <label htmlFor="file">
              Image: <DriveFolderUploadOutlinedIcon className="icon" />
            </label>
          </div>
          <div className="campimg">
            <input
              type="file"
              id="file"
              
              onChange={onFileChange}
              style={{ display: "none" }}
              name="categoryIcon"
            />
            <img
            src={
              bannerFile
                ? URL.createObjectURL(bannerFile)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            //style={{ width: "130px", justifyContent:'center', alignItems:'center' }}
            alt=""
          />
          </div>
            
          
          
            
           
            

             
            <button onClick={(e) => editProduct()} > <Link to="/product" style={{ textDecoration: 'none', color: '#FFF' }}> Done</Link></button>

            
             
        </div>
        
      </div>
      

    </div>
  )
}

export default Productedit