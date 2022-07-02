import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./customerprofile.scss";
import DataCustomerOrderList from "../../components/datatable/DataCustomerOrderList";
import Profile from "../../components/customer/Profile"
import Details from "../../components/customer/Details"
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom'


export default function CustomerProfile(){
  const params = useParams();
  const [name, setName] = useState("");
  useEffect(async () => {
    getCustomerDetailsById(params.id);
  }, [])

  const getCustomerDetailsById = async (id) => {
    var result = await axios.post('http://localhost:8000/api/customermanagement/getCustomerDetailsById', { id })
    var result = await result.data
    setName(result[0].name);
  }

  return(
    <div className="customerProfile">
      <Sidebar/>
      <div className="customerProfileContainer">
        <Navbar/>
        <div className="customerProfileCard">

        <div className="top">
          <Profile
            name={name}
            productsBuyed="800"
          ></Profile>
          {/* <div className="right">
            <Chart1 aspect={3 / 1} title="Product Sold/Month" />
          </div> */}
          <div className="right bottom border rounded-3">
            <Details aspect={3/1}/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title"><strong>Order Details</strong></h1>
          <DataCustomerOrderList />
        </div>
      </div>
    </div>
    </div>
    
  );
}