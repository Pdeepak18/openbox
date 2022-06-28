import React from "react";
import "./newtax.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Newtax = ({ title }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    taxName: "",
    taxValue: "",

  })

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }


  const taxx = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/tax/addTax", {
      name: data.taxName,
      value: parseInt(data.taxValue)
    })
      .then(res => {
        console.log(res.data)
      })
      navigate("/taxmaster")
    window.location.reload()
  };

  return (
    <div className="newTax">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="newCard">
          <div className="row">


            <div className="col-2"></div>
            <div className="col-8 d-flex justify-content-center">
              <div className="top">
                <h1 className="mt-2 mb-5 d-flex justify-content-center">{title}</h1>
                <form>
                  <div className="details mb-4">
                    <h5 className="field">
                      Tax Name:
                    </h5>
                    <input
                      type="text"
                      name="Name"
                      id="taxName"
                      size="100"
                      onChange={(e) => handle(e)}
                      placeholder="Tax Name"
                      value={data.taxName}
                    />

                  </div>
                  <div className="details mb-4 ">
                    <h5 className="field" >
                      Tax Value:
                    </h5>
                    <input
                      type="number"
                      name="value" id="taxValue"
                      onChange={(e) => handle(e)}
                      placeholder="% of Tax"
                      value={data.taxValue}
                    />
                  </div>
                  <Link to="/taxmaster" >
                    <button className="buttonN" onClick={(e) => taxx(e)}>  Add New Tax </button>
                  </Link>
                </form>
              </div>
            </div>
            <div className="col-2"></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Newtax;
