import "./product.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Dataprod from "../../components/datatable/Dataprod"

function Product() {
  return (
    <div className="product">
      <Sidebar />
      <div className="pcontainer">
        <Navbar />
        
        <Dataprod />
      </div>
    </div>
  )
}

export default Product;