import "./subcategary.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
//import Datatable from "../../components/datatable/Datatable"
import Datasub from "../../components/datatable/Datasub"

const Subcategary =() => {
  return (
      
      <div className="subcategary">
      <Sidebar/>
        <div className="SubCatContainer">
          <Navbar/>
          <div className="sub-categoryList">
          <Datasub/>
          </div>
        </div>
      </div>
    
    
  )
}

export default Subcategary
