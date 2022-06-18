import React from 'react'
import "./categoryedit.scss"
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useParams, useNavigate } from 'react-router-dom'
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";


const Categoryedit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [bannerFile, setFile] = useState("");
  const [categoryName, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryIcon, setImage] = useState("");

  useEffect(async () => {
    
    getCategoryDetails(params.id);
}, [])

const getCategoryDetails = async (id) => {
  
  var result =await axios.post('http://localhost:8000/api/category/getCategory', 
  {id})
  var result = await result.data
  
  setName(result[0].categoryName);
  console.log(result[0].categoryName)

  setDescription(result[0].description);
  console.log(result[0].description)

  setImage(result[0].categoryIcon);
  console.log(result[0].categoryIcon)
 
}

const onFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const editCategory = async () => {
  
  try {
      const formData = new FormData();
      formData.append("id",params.id)
      formData.append("categoryIcon", bannerFile);
      formData.append("categoryName",categoryName );
      formData.append("description", description);
    
      const config = {
          headers: {
              "content-type": "multipart/form-data"
          }
      };
      const API = "category/editCategoryById";
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
              <input type="text" value={categoryName}  onChange={(e) => {setName(e.target.value)}} /> 
            </div>

            <div className="camp1">
                <label> <strong> Description :     </strong></label>
                  <input type="text" value={description}  onChange={(e) => {setDescription(e.target.value)} }/>
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
            
          
          
            
           
            

             
            <button onClick={(e) => editCategory()} > <Link to="/categary" style={{ textDecoration: 'none', color: '#FFF' }}> Done</Link></button>

            
             
        </div>
        
      </div>
      

    </div>
  )
}

export default Categoryedit