import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams, useNavigate } from 'react-router-dom'
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";


const Banneredit = () => {
  const [bannerFile, setFile] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  // const[data,setData] =useState("")
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setImage] = useState("");

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
      setFile(e.target.files[0]);
    }
  };

const editBanner = async () => {
  
    try {
        const formData = new FormData();
        formData.append("id",params.id)
        formData.append("image", bannerFile);
        formData.append("name", name);
        formData.append("description", description);
        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };
        const API = "banner/editBannerById";
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
              <input type="text" value={name}  onChange={(e) => {setName(e.target.value)}} /> 
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
            
          
          
            
           
            

             
            <button onClick={(e) => editBanner()} > <Link to="/banner" style={{ textDecoration: 'none', color: '#FFF' }}> Done</Link></button>

            
             
        </div>
        
      </div>
      

    </div>
  )
}

export default Banneredit;