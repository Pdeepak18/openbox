// import "./setting.scss"
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import { useState, useEffect } from "react";
// import axios from "axios"

// export default function Setting(){
//   const [fees, setFees] = useState("");
//   useEffect(async () => {
//     getPlatformcommision();
//   }, []);

//   const getPlatformcommision = async (id) => {
//     var result =  await fetch( "http://localhost:9000/api/platform/getPlatformFees" );
//     var result = await result.json();

//     setFees(result[0].fees);
//     console.log(result[0].name);
//   }
//   return(
//     <div className="Setting">


//       <Sidebar/>
//         <div className="containerSetting">
//           <Navbar/>
//           <div className="cardSetting">
//           <h3> <strong>Accounting</strong></h3>
//           <div className="row mt-3">
//             <div className="col-3">
//               <div className="row ">
//                 <div className="col">

//                 <span><strong> Platform Fee (%):</strong></span>
//                 <input type="number" disabled value={fees}className="mt-2"/>
//                 <button className="btn btn-sm btn-outline-warning mt-3">Edit</button>
//                 </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

// </div>



//   )
// }

import "./setting.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
export default function Setting() {
  const [fees, setFees] = useState("");
    useEffect(async () => {
      getPlatformcommision();
    }, []);
  
    const getPlatformcommision = async (id) => {
      var result =  await fetch( "http://localhost:8000/api/platform/getPlatformFees" );
      var result = await result.json();
  
      setFees(result[0].fees);
      console.log(result[0].name);
    }

    const updatePlatformcommision = async ()=>{
      var result =await axios.post("http://localhost:8000/api/platform/updatePlatformFees",
      {id:1,
      fees:fees})
      var result = await result.data;
      console.log(result)
    }
  return (
    <div className="Setting">
      <Sidebar />
      <div className="containerSetting">
        <Navbar />
        <div className="cardSetting">
          <h3> <strong>Accounting</strong></h3>
          <div className="row mt-3">
            <div className="col-3">
              <div className="row ">
                <div className="col">

                  <span><strong> Platform Fee (%):</strong></span>
                  <input type="number" disabled value={fees} className="mt-2" />
                  <button className="btn btn-sm btn-outline-warning mt-3" data-toggle="modal"
                    data-target="#platformFee">Edit</button>

                  {/* MODOL EDIT Platform Fee */}
                  <div className="modal fade platformModol " id="platformFee" tabindex="-1"
                    role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog " role="document">
                      <div className="modal-content">
                        {/* <!-- Modal heading --> */}
                        <div className="modal-header ">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Platform Fees
                          </h5>
                          <button type="button" className=" btn btn-outline-warning"
                            data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">
                              ×
                            </span>
                          </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="modal-body d-flex flex-column">
                            <form >

                              <span><strong> Platform Fee (%):</strong></span>
                
                              <input type="number"  value={fees} onChange={(e) => { setFees(e.target.value) }} className="platformFeeInput mt-3" />

                              <button className="btn btn-sm btn-outline-warning mt-3" onClick={(e)=>updatePlatformcommision()} data-dismiss="modal">Done</button>
                            </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





  )
}