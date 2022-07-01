import "./setting.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
export default function Setting(){
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
                <input type="number" disabled className="mt-2"/>
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