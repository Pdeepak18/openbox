import React from 'react'
import "./subcategoryedit.scss"
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useParams, useNavigate } from 'react-router-dom'
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const Subcategoryedit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [bannerFile, setFile] = useState("");
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
  console.log(result[0].subcategoryName)

  setDescription(result[0].descripition);
  console.log(result[0].descripition)

  setImage(result[0].subcategoryIcon);
  console.log(result[0].subcategoryIcon)
 
}

const onFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const editSubCategory = async () => {
  
  try {
      const formData = new FormData();
      formData.append("id",params.id)
      formData.append("subcategoryIcon", bannerFile);
      formData.append("subcategoryName",subcategoryName );
      formData.append("description", descripition);
    
      const config = {
          headers: {
              "content-type": "multipart/form-data"
          }
      };
      const API = "subcategory/editSubcategoryById";
      const HOST = "http://localhost:8000/api";
      const url = `${HOST}/${API}`;

      const result = await axios.post(url, formData, config);



  } catch (error) {
      console.error(error);
  }
  window.location.reload()

};

  return (
    <div className="bannerview">
    <Sidebar />
    <div className="bannerviewContainer">
      <Navbar />
      <div className="temp">
        
          <div className="camp1">
      
            <label> <strong> Name :     </strong></label>
            <input type="text" value={subcategoryName}  onChange={(e) => {setName(e.target.value)}} /> 
          </div>

          <div className="camp1">
              <label> <strong> Description :     </strong></label>
                <input type="text" value={descripition}  onChange={(e) => {setDescription(e.target.value)} }/>
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
          
        
        
          
         
          

           
          <button onClick={(e) => editSubCategory()} > <Link to="/subcategary" style={{ textDecoration: 'none', color: '#FFF' }}> Done</Link></button>

          
           
      </div>
      
    </div>
    

  </div>
  )
}

export default Subcategoryedit