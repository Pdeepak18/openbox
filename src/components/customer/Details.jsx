import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";
import "./details.scss"

function Details() {
  const params = useParams();
  const navigate = useNavigate();
  //get vendor details
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [lane, setLane] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const [pincode, setPincode] = useState("")

  useEffect(async () => {
    getVendorDetailsById(params.id);
  }, [])

  const getVendorDetailsById = async (id) => {
    var result = await axios.post('http://localhost:8000/api/vendormanagement/getvendorDetailsbyId', { id })
    var result = await result.data
    setName(result[0].name);
    setPhone(result[0].phone);
    setEmail(result[0].email);
    setLane(result[0].lane)
    setCity(result[0].city)
    setState(result[0].state)
    setCountry(result[0].country)
    setPincode(result[0].pincode)
  };

  return (

    <div className="row p-1">
      <h2><strong> Customer Details</strong></h2>
      <div className="col">
        <div className="row">
          <div className="col-6">
            <span><strong>Name:</strong></span>
          </div>
          <div className="col-6">
            <span>Tony Stark</span>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <span><strong>Email:</strong></span>
          </div>
          <div className="col-6">
            <span>tony@strak.com</span>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <span><strong>Phone:</strong></span>
          </div>
          <div className="col-6">
            <span>212-970-4133</span>
          </div>
        </div>
        <div className="row mt-2">
          <span><strong>Address</strong></span>
          <div className="col ms-2">
            <div className="row">
              <div className="col-6">
                <span>Lane:</span>
              </div>
              <div className="col-6">
                <span>10880 Malibu Point</span>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <span>City:</span>
              </div>
              <div className="col-6">
                <span>Malibu</span>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <span>State:</span>
              </div>
              <div className="col-6">
                <span>California</span>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <span>Country:</span>
              </div>
              <div className="col-6">
                <span>USA</span>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <span>Pincode:</span>
              </div>
              <div className="col-6">
                <span>90265</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Details;