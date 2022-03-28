import "./categary.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const Categary = () => {
  return (
    <div className="Categary">
      <Sidebar/>
      <div className="CatContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default Categary