import "./taxedit.scss"
import React from 'react'
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
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

    var result = await axios.post('http://localhost:8000/api/tax/getTaxById',
      { id })
    var result = await result.data

    setName(result[0].name);
    console.log(result[0].name)

    setTaxValue(result[0].value);
    console.log(result[0].value)
  }


  const editTax = async () => {


    axios.post("http://localhost:8000/api/tax/editTaxById", {
      id: params.id,
      name: name,
      value: parseInt(taxValue)
    })
      .then(res => {
        console.log(res.data)
      })

    window.location.reload()
  };





  return (
    <div className="bannerview">
      <Sidebar />
      <div className="bannerviewContainer">
        <Navbar />
        <div className="tempE">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8 d-flex justify-content-center">
              <div>
                <div className="camp1">
                  <h1 className='d-flex  justify-content-center mt-2 mb-4'><strong> {name}</strong>&nbsp;Tax</h1>
                  <div className="details mb-4">
                    <h5 className="field">
                      Tax Name:
                    </h5>
                    <input
                      type="text"

                      size="100"
                      value={name} onChange={(e) => { setName(e.target.value) }}
                    />

                  </div>
                  <div className="details mb-4 ">
                    <h5 className="field" >
                      Tax Value:
                    </h5>
                    <input
                      type="number"
                      value={taxValue} onChange={(e) => { setTaxValue(e.target.value) }}
                    />
                  </div>
                  <div className=" d-flex justify-content-center">

                  <Link to="/taxmaster" >
                    <button className="buttonTax" onClick={(e) => editTax()}>Done</button>
                  </Link>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-2"></div>
          </div>




        </div>

      </div>


    </div>
  )
}

export default Taxedit