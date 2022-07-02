import "./setting.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios"

export default function Setting(){
  const [fees, setFees] = useState("");
  useEffect(async () => {
    getPlatformcommision();
  }, []);

  const getPlatformcommision = async (id) => {
    var result =  await fetch( "http://localhost:9000/api/platform/getPlatformFees" );
    var result = await result.json();

    setFees(result[0].fees);
    console.log(result[0].name);
  }
  return(
    <div className="Setting">


      <Sidebar/>
        <div className="containerSetting">
          <Navbar/>
          <div className="cardSetting">
          <h3> <strong>Accounting</strong></h3>
          <div className="row mt-3">
            <div className="col-3">
              <div className="row ">
                <div className="col">

                <span><strong> Platform Fee (%):</strong></span>
                <input type="number" disabled value={fees}className="mt-2"/>
                <button className="btn btn-sm btn-outline-warning mt-3">Edit</button>
                </div>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
     
     
    
  )
}