import "./taxmaster.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatax from "../../components/datatable/Datatax"


function Taxmaster() {
  return (
    <div className="taxMaster">
    <Sidebar/>
    <div className="TaxContainer">
      <Navbar/>
      <div className="taxList">
      <Datatax/>
      </div>
    </div>
  </div>
  )
}

export default Taxmaster
