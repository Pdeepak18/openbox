import React from 'react'
import "./product.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

function Product() {
  return (
    <div className="product">
         <Sidebar />
        
        <div className="container">
                <Navbar />
              <Datatable />
            

        </div>
    </div>
  )
}

export default Product