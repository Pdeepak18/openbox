import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";
import "./details.scss"

function  Details() {
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
    getCustomerDetailsById(params.id);
  }, [])

  const getCustomerDetailsById = async (id) => {
    var result = await axios.post('http://localhost:8000/api/customermanagement/getCustomerDetailsById', { id })
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
            <span>{name}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <span><strong>Email:</strong></span>
          </div>
          <div className="col-6">
            <span>{email}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <span><strong>Phone:</strong></span>
          </div>
          <div className="col-6">
            <span>{phone}</span>
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
                <span>{lane} </span>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <span>City:</span>
              </div>
              <div className="col-6">
                <span>{city}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <span>State:</span>
              </div>
              <div className="col-6">
                <span>{state}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <span>Country:</span>
              </div>
              <div className="col-6">
                <span>{country}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <span>Pincode:</span>
              </div>
              <div className="col-6">
                <span> {pincode}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Details;