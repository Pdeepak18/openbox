import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./VendorProfile.scss";
import ProfileCard from "../../components/vendor/profile"
import VendorDetails from "../../components/vendor/vendorDetail/vendorDetails"
import List from "../../components/table/ProductTable";
import Table from "../../components/table/Table";
import { useParams, useNavigate } from 'react-router-dom'
import { useState,useEffect } from "react";
import axios from "axios";
import Producttable from "../../components/vendor/Producttable";




function VendorProfile() {

  const params = useParams();
  const navigate = useNavigate();
  //vendor name
  const [name, setName] = useState("");
  useEffect(async () => {
    getVendorDetailsById(params.id);
}, [])
const getVendorDetailsById = async (id) => { 
  var result =await axios.post('http://localhost:8000/api/vendormanagement/getvendorDetailsbyId', {id})
  var result = await result.data
  setName(result[0].name);
}

  //vendor businessname
  const [businessname, setBusinessName] = useState("");
  useEffect(async () => {
    getStoreDetailsById(params.id);
}, [])

const getStoreDetailsById = async (id) => { 
  var result1 =await axios.post('http://localhost:8000/api/vendormanagement/getStoreDetailsbyId', {id})
  var result1 = await result1.data
  setBusinessName(result1[0].businessName);
}

  return (
    <div className="VendorDetail">
      <Sidebar />
      <div className="vdConatiner">
        <Navbar />
        <div className="top">
          <ProfileCard
            name={name}
            //age="32"
            storeName={businessname}
            dateRegistered="5-6-22"
            productsSold="800"
            rating="3.4/5"
          ></ProfileCard>
          {/* <div className="right">
            <Chart1 aspect={3 / 1} title="Product Sold/Month" />
          </div> */}
          <div className="right bottom">
            <VendorDetails aspect={3/1}/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title"><strong>Listed Products</strong></h1>
          <Producttable />
        </div>
        <div className="bottom">
          <h1 className="title"><strong>Transaction History</strong></h1>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default VendorProfile;