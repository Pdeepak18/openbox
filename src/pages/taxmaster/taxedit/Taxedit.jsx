import React from 'react'
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useParams, useNavigate } from 'react-router-dom'
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Taxedit = () => {
    const params = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [taxValue, setTaxValue] = useState("");

  useEffect(async () => {
    
    getTaxDetails(params.id);
}, [])


const getTaxDetails = async (id) => {
  
    var result =await axios.post('http://localhost:8000/api/tax/getTaxById', 
    {id})
    var result = await result.data
    
    setName(result[0].name);
    console.log(result[0].name)
  
    setTaxValue(result[0].value);
    console.log(result[0].value)
}


const editTax = async () => {
  
   
    axios.post("http://localhost:8000/api/tax/editTaxById",{
        id:params.id,
      name:name,
      value:parseInt(taxValue)
    })
    .then(res => {
      console.log(res.data )
    })

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
              <input type="text" value={name}  onChange={(e) => {setName(e.target.value)}} /> 
            </div>

            <div className="camp1">
                <label> <strong> TaxValue :     </strong></label>
                  <input type="text" value={taxValue}  onChange={(e) => {setTaxValue(e.target.value)} }/>
            </div>
      
            <button type='submit' onClick={(e) => editTax()} > <Link to="/taxmaster" style={{ textDecoration: 'none', color: '#FFF' }}> Done</Link></button>

            
             
        </div>
        
      </div>
      

    </div>
  )
}

export default Taxedit