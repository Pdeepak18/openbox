import React from 'react'
import './banneredit.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams, useNavigate } from 'react-router-dom'
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";


const Banneredit = () => {

  const params = useParams();
  const navigate = useNavigate();
  // const[data,setData] =useState("")
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(async () => {
    
    getBannerDetails(params.id);
}, [])

//api integrate to fetch details
const getBannerDetails = async (id) => {
  
  var result =await axios.post('http://localhost:8000/api/banner/getBannerById', 
  {id})
  var result = await result.data
  
  setName(result[0].name);
  console.log(result[0].name)

  setDescription(result[0].description);
  console.log(result[0].description)

  setImage(result[0].image);
  console.log(result[0].image)
 
}

const onFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

const uploadImage = async () => {
  
    try {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        formData.append("description", description);
        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };
        const API = "banner/addBanner";
        const HOST = "http://localhost:8000/api";
        const url = `${HOST}/${API}`;

        const result = await axios.post(url, formData, config);



    } catch (error) {
        console.error(error);
    }


};


return (
    <div className="bannerview">
      <Sidebar />
      <div className="bannerviewContainer">
        <Navbar />
        <div className="temp">
          
            <div className="camp1">
        
              <label> <strong> Name :     </strong></label>
              <input type="text" defaultValue={name}  /> 
            </div>

            <div className="camp1">
                <label> <strong> Description :     </strong></label>
                  <input type="text" defaultValue={description}/>
            </div>
      
              <div className="details1">

              

            <div className="forInput">
            <label htmlFor="file">
              Image: <DriveFolderUploadOutlinedIcon className="icon" />
            </label>
          </div>
            <input
              type="file"
              id="file"
              
              onChange={onFileChange}
              style={{ display: "none" }}
              name="categoryIcon"
            />
            <div className="bottom12">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
          </div>
          </div>
          
          
            
           
            

             
            <button onClick={(e) => uploadImage()} > <Link to="/banner" style={{ textDecoration: 'none', color: '#FFF' }}> Done</Link></button>

            
             
        </div>
        
      </div>
      

    </div>
  )
}

export default Banneredit