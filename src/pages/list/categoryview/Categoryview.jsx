import React from 'react'
import "./categoryview.scss"
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



const Categoryview = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [categoryName, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryIcon, setImage] = useState("");

  useEffect(async () => {

    getCategoryDetails(params.id);
  }, [])

  const getCategoryDetails = async (id) => {

    var result = await axios.post('http://localhost:8000/api/category/getCategory',
      { id })
    var result = await result.data

    setName(result[0].categoryName);
    console.log(result[0].categoryName)

    setDescription(result[0].description);
    console.log(result[0].description)

    setImage(result[0].categoryIcon);
    console.log(result[0].categoryIcon)

  }

  return (
    <div className="categoryview">
      <Sidebar />
      <div className="categoryviewContainer">
        <Navbar />
        <div className="temp">
          <div className="camp1">
            <h1 className='d-flex justify-content-center mt-2 mb-4'>Category: <strong> {categoryName}</strong></h1>
            <div className="row ">
              <div className="col-4 d-flex flex-row-reverse">
                <img className='previewImage img-thumbnail' src="https://images.news18.com/ibnlive/uploads/2021/09/flipkart_sale_bigbillion.jpg?impolicy=website&width=0&height=0" alt="image" />
              </div>
              <div className="col-8">
                <div className="details mb-4">
                  <h5 className="field" >
                    Category Name:
                  </h5>
                  <input
                    type="text"
                    name="Name"

                    size="80"
                    defaultValue={categoryName}
                    disabled
                  />
                </div>
                <div className="details mb-4">
                  <h5 className="field">
                    Category Description:
                  </h5>
                  <div  className='parsedHTML' dangerouslySetInnerHTML={{__html: description}}></div>
                </div>
                <button className='buttonN' > <Link to="/categary" style={{ textDecoration: 'none', color: '#FFF' }}> Done</Link></button>
              </div>
            </div>
          </div>



        </div>
      </div>

    </div>
  )
}

export default Categoryview