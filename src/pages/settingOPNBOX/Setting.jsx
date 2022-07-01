import "./setting.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
export default function Setting() {
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
                  <input type="number" disabled className="mt-2" />
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
                
                              <input type="number" className="platformFeeInput mt-3" />

                              <button className="btn btn-sm btn-outline-warning mt-3" data-dismiss="modal">Done</button>
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