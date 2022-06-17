import React from "react";
import "./newtax.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const Newtax = ({  title }) => {
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
      axios.post("http://localhost:8000/api/tax/addTax",{
        name:data.taxName,
        value:parseInt(data.taxValue)
      })
      .then(res => {
        console.log(res.data )
      })


    };

  return (
    <div className="new">
     <div className="nsidebar">
            <Sidebar />
            </div>
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <form>
          <div className="forminput">
            <label>
              <strong> Taxname: &nbsp; &nbsp;</strong>
              <input type="text" name="name" onChange={(e) => handle(e)} placeholder="Name...." size="22" id="taxName" value={data.taxName}/>
            </label>
              </div>
              <div className="forminput1">
              <label >
              <strong> TaxValue: &nbsp; &nbsp;</strong>
                <input type="number" name="value" id="taxValue" onChange={(e) => handle(e)} size="42" value={data.taxValue} />
              </label>

          </div>

          <button onClick={(e) => taxx(e)}> <Link to="/taxmaster" style={{ textDecoration: 'none', color: '#FFF' }}> Send </Link></button>
        </form>
      </div>
    </div>
  );
};

export default Newtax;
