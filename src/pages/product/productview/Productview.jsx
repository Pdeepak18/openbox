import React from 'react'
import "./productview.scss"
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import iPhone from "../../../components/order/iphone.jpg"


const Productview = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [productName, setName] = useState("");
  const [productDescription, setDescription] = useState("");
  const [highlightFeature, setFeature] = useState("")
  const [file, setImage] = useState([]);
  const [color, setColor] = useState([]);
  
  const [taxId, setTaxId] = useState("");
  const [taxName, setTaxName] = useState("");


  useEffect(async () => {


    getProductDetails(params.id);
    // taxDetails();
    
  }, [])

  // const taxDetails = async()=>{
  //   var result1 = await axios.post('http://localhost:8000/api/tax/getTaxById',
  //     { id:taxId })
  //   var result1 = await result1.data

  //   setTaxName(result1[0].name);
  //   console.log(result1[0].name)

  // }

  const getProductDetails = async (id) => {

    var result = await axios.post('http://localhost:8000/api/product/getProduct',
      { id })
    var result = await result.data


    setName(result[0].productName);
    console.log(result[0].productName)

    setDescription(result[0].productDescription);
    console.log(result[0].productDescription)

    setImage(result[0].image);
    console.log(result[0].image)

    setColor(result[0].color);
    console.log(result[0].color)

    setFeature(result[0].highlightFeature);
    console.log(result[0].highlightFeature)
    
    
    setTaxId(result[0].taxId);
    console.log(result[0].taxId)

    // taxDetails()
    

  }

  return (
    <div className="productview">
      <Sidebar />
      <div className="productviewContainer">
        <Navbar />
        <div className="temp">
          <div className="camp1">
            <h1 className='d-flex justify-content-center mt-2 mb-4'><strong> {productName}</strong></h1>


            <div className="row d-flex justify-content-center">
              <div className="col d-flex justify-content-center">
                <img className='previewImageProduct img-thumbnail' src={iPhone} />

              </div>
            </div>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8 d-flex justify-content-center">
                <div>

                
                <div className="details mb-4">
                  <h5 className="field" >
                    Product Name:
                  </h5>
                  <input
                    type="text"
                    name="Name"

                    size="80"
                    defaultValue={productName}
                    disabled
                  />
                </div>
                {/* tax field */}
                <div className="details mb-4">
                  <h5 className="field" >
                   Tax:
                  </h5>
                  <input
                    type="text"
                    name="Name"

                    size="80"
                    defaultValue={taxId}
                    disabled
                  />
                </div>
                <div className="details mb-4">
                  <h5 className="field">
                    Product Description:
                  </h5>
                  <div className='parsedHTML' dangerouslySetInnerHTML={{ __html: productDescription }}></div>
                </div>
                <div className="details mb-4">
                  <h5 className="field">
                  Highlight Feature:
                  </h5>
                  <div className='parsedHTML' dangerouslySetInnerHTML={{ __html: highlightFeature }}></div>
                </div>
                <div className="details mb-4">
                  <h5 className="field" >
                    Colors:
                  </h5>
                  <input
                    type="text"
                    name="Name"

                    size="80"
                    defaultValue={color}
                    disabled
                  />
                </div>
        
                <Link to="/product" ><button className='buttonN' >  Done</button></Link>
              </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>



        </div>
      </div>

    </div >
  )
}

export default Productview