import React from 'react'
import './bannerview.scss'
//import  {withRouter}  from 'react-router-dom';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams, useNavigate } from 'react-router-dom'
import { useState,useEffect } from "react";
import axios from "axios";

const Bannerview = () => {
  const params = useParams();
  const navigate = useNavigate();
  // const[data,setData] =useState("")
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");


 

  useEffect(async () => {
    
    getBannerDetails(params.id);
}, [])

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


  return (
    <div className="bannerview">
      <Sidebar />
      <div className="bannerviewContainer">
        <Navbar />
        <div className="temp">
        <div className="camp1">
        <label> <strong> Name :     </strong></label>
        <input type="text" defaultValue={name} /> 
        </div>
        <div className="camp1">
        <label> <strong> Description :     </strong></label>
        <input type="text" defaultValue={description}/>
        </div>
      
        <div className="campimg">
        <label> <strong> Image :     </strong></label>
        {/* <input type="file" defaultValue={image}/> <br /> <br /> */}
        <img src="https://images.news18.com/ibnlive/uploads/2021/09/flipkart_sale_bigbillion.jpg?impolicy=website&width=0&height=0"   alt="image" /> <br /> <br />
        </div>
        

        </div>
      </div>

    </div>
  )
}

export default Bannerview