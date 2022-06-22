import Accordion from 'react-bootstrap/Accordion';
import { useParams, useNavigate } from 'react-router-dom'
import { useState,useEffect } from "react";
import axios from "axios";

function VendorDetails() {
  const params = useParams();
  const navigate = useNavigate();
  //get vendor details
  const [name, setName] = useState("");
  const [phone , setPhone] =useState("")
  const [email ,setEmail] = useState("")
  const[ lane, setLane]=useState("")
  const[ city, setCity]=useState("")
  const[ state, setState]=useState("")
  const[ country, setCountry]=useState("")
  const[ pincode, setPincode]=useState("")

  useEffect(async () => {
    getVendorDetailsById(params.id);
}, [])

const getVendorDetailsById = async (id) => { 
  var result =await axios.post('http://localhost:8000/api/vendormanagement/getvendorDetailsbyId', {id})
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


//get storedetails
  const [businessname, setBusinessName] = useState("");
  const [gstNumber, setGstNumber] =useState("")
  const[ businesslane, setBusinessLane]=useState("")
  const[ businesscity, setBusinessCity]=useState("")
  const[ businessstate, setBusinessState]=useState("")
  const[ businesscountry, setBusinessCountry]=useState("")
  const[ businesspincode, setBusinessPincode]=useState("")

  useEffect(async () => {
    getStoreDetailsById(params.id);
}, [])

const getStoreDetailsById = async (id) => { 
  var result1 =await axios.post('http://localhost:8000/api/vendormanagement/getStoreDetailsbyId', {id})
  var result1 = await result1.data
  setBusinessName(result1[0].businessName);
  setGstNumber(result1[0].gstNumber)
  setBusinessLane(result1[0].lane)
  setBusinessCity(result1[0].city)
  setBusinessState(result1[0].state)
  setBusinessCountry(result1[0].country)
  setBusinessPincode(result1[0].pincode)
};


//bank details
  const [accountHolderName, setAccountHolderName] = useState("");
  const [ifscCode, setIfscCode] =useState("")
  const[ accountNumber, setAccountNumber]=useState("")
  const[ bankName, setBankName]=useState("")

useEffect(async () => {
    getBankDetailsById(params.id);
}, [])

const getBankDetailsById = async (id) => { 
  var result =await axios.post('http://localhost:8000/api/vendormanagement/getBankDetailsById', {id})
  var result = await result.data
  setAccountHolderName(result[0].accountHolderName);
  setAccountNumber(result[0].accountNumber)
  setIfscCode(result[0].ifscCode)
  setBankName(result[0].bankName)
  
};

  let GSTIN = "1028HDSAJ"
  return (

    <div className="row">

      <div>
        <h2>
          <strong>
            Vendor Details
          </strong>
        </h2>

      </div>


      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header><strong>Vendor Details</strong> </Accordion.Header>
          <Accordion.Body>
            <div className="row">
              <div className="col">
                <div className="VendorDetails">
                  <span><strong>Name :</strong> </span>
                </div>
                <div className="VendorDetails">
                  <span><strong>Phone No. :</strong> </span>
                </div>
                <div className="VendorDetails">
                  <span><strong>Email :</strong></span>
                </div>
                <div className="VendorDetails">
                  <span> <strong>Location :</strong> </span>
                </div>
              </div>
              <div className="col">
                <div className="VendorDetails">

                  <span>{name}</span>
                </div>
                <div className="VendorDetails">
                  <span>{phone}</span>
                </div>
                <div className="VendorDetails">
                  <span>{email}</span>
                </div>
                <div className="VendorDetails">
                  <span>{lane} {city} {state}</span> <br />
                  <span>{country} {pincode} </span>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="1" >
          <Accordion.Header ><strong>Store Details </strong></Accordion.Header>
          <Accordion.Body >
            <div class="row">
              <div class="col">
                <div class="StoreDetails"><span><strong>Store Name:</strong></span>  </div>
                <div class="StoreDetails"><span><strong>GSTIN: </strong></span> </div>
                <div class="StoreDetails"><span><strong>Address: </strong></span></div>
                {/* <div class="StoreDetails"><span><strong>Date of Joining: </strong></span></div> */}
              </div>
              <div class="col">
                <div class="StoreDetails"><span>{businessname}</span> </div> 
                <div class="StoreDetails"><span>{gstNumber} </span></div>
                <div class="StoreDetails"><span>{businesslane} {businesscity} {businessstate}</span> <br />
                  <span>{businesscountry} {businesspincode} </span></div>
                {/* <div class="StoreDetails"><span>14th June | 2022</span></div> */}
              </div>
            </div>

          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" >
          <Accordion.Header ><strong>Bank Details</strong></Accordion.Header>
          <Accordion.Body >
          <div class="row">
            <div class="col">
              <div class="bankDetails"><span><strong>Bank Account Holder Name: </strong></span>
              </div>
              <div class="bankDetails"><span><strong>Bank Account Number:</strong></span></div>
              <div class="bankDetails"><span><strong>IFSC Code:</strong></span></div>
              <div class="bankDetails"><span><strong>Bank Name:</strong></span></div>
              {/* <div class="bankDetails"><span><strong>Branch Name:</strong></span> </div> */}
              {/* <div class="bankDetails"><span><strong>City:</strong></span></div> */}
              {/* <div class="bankDetails"><span><strong>State:</strong></span></div> */}
            </div>
            <div class="col">
              <div class="bankDetails"><span>{accountHolderName}</span>
              </div>
              <div class="bankDetails"><span>{accountNumber} </span> </div>
              <div class="bankDetails"><span>{ifscCode}</span> </div>
              <div class="bankDetails"><span>{bankName}</span> </div>
              {/* <div class="bankDetails"><span>Getty Villa</span> </div> */}
              {/* <div class="bankDetails"><span>Malibu</span> </div> */}
              {/* <div class="bankDetails"><span>California</span> </div> */}
            </div>
          </div>

          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" >
          <Accordion.Header ><strong>Documents </strong></Accordion.Header>
          <Accordion.Body >
            <div class="row">
            <div class="row">
            <div class="col">
              {/* <div class="Documents"><span><strong>Address Proof: </strong></span></div> */}
              <div class="Documents"><span><strong>Signature:</strong></span></div>
              <div class="Documents"><span><strong>Cancelled Cheque</strong></span></div>              
            </div>
            <div class="col">
              {/* <div class="Documents"><button type="button" class="btn btn-sm btn-outline-warning">View</button></div> */}
              <div class="Documents"><button type="button" class="btn btn-sm btn-outline-warning">View</button></div>
              <div class="Documents"><button type="button" class="btn btn-sm  btn-outline-warning">View</button></div>
            </div>
          </div>
          </div>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      



    </div>
  );
}

export default VendorDetails;