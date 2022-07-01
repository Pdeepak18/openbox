import React from 'react'
import "./productedit.scss"
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useParams, useNavigate } from 'react-router-dom'
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import UploadIcon from '@mui/icons-material/Upload';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Productedit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [bannerFile, setFile] = useState("");
  const [productName, setName] = useState("");
  const [productDescription, setDescription] = useState("");
  const[highlightFeature,setFeature] =useState("")
  const [file, setImage] = useState([]);
  const[color,setColor] = useState([]);

  const [taxId, setTaxId] = useState("");
  const [taxName, setTaxName] = useState("");

  useEffect(async () => {
    
    getProductDetails(params.id);
}, [])

//api integrate to fetch details
const getProductDetails = async (id) => {
  
  var result =await axios.post('http://localhost:8000/api/product/getProduct', 
  {id})
  var result = await result.data

  
  setName(result[0].productName);
  console.log(result[0].productName)

  setDescription(result[0].productDescription);
  console.log(result[0].productDescription)

  setImage(result[0].image);
  console.log(result[0].image)

  setColor(result[0].color);
  console.log(result[0].color)

  setFeature(result[0].highlightFeature);
  console.log(result[0].highlightFeature)

  setTaxId(result[0].value);
    console.log(result[0].value)
 
}

const onFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const editProduct = async () => {
  
  try {
      const formData = new FormData();
      formData.append("id",params.id)
      console.log(params.id,bannerFile,productName,productDescription,taxId,color)
      formData.append("image", bannerFile);
      formData.append("productName",productName );
      formData.append("productDescription", productDescription);
      formData.append("highlightFeature", highlightFeature);
      formData.append("color", JSON.stringify(color));
      formData.append("value", parseInt(taxId));
      const config = {
          headers: {
              "content-type": "multipart/form-data"
          }
      };
      const API = "product/editProductById";
      const HOST = "http://localhost:8000/api";
      const url = `${HOST}/${API}`;

      const result = await axios.post(url, formData, config);



  } catch (error) {
      console.error(error);
  }
  navigate("/product")
  window.location.reload()


};


  return (
    <div className="productview">
      <Sidebar />
      <div className="productviewContainer">
        <Navbar />
        <div className="temp">
          <div className="camp1">
            <h1 className='d-flex justify-content-center mt-2 mb-4'><strong> {productName}</strong></h1>


            <div className="row d-flex justify-content-center">
              <div className="col d-flex justify-content-center">
              <div className="campimg d-flex justify-content-center">
                  <input
                    type="file"
                    id="file"
                    onChange={onFileChange}
                    style={{ display: "none" }}
                    name="categoryIcon"
                  />
                  <img
                    className="img-thumbnail previewImage"
                    src={
                      bannerFile
                        ? URL.createObjectURL(bannerFile)
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                  />
                </div>

              </div>
                <div className="forInput mt-4 mb-4 d-flex justify-content-center" >
                  <label htmlFor="file" class="custom-file-upload">
                    <input type="file" />
                    <UploadIcon className="icon" />Upload Images
                  </label>
                </div>
            </div>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8 d-flex justify-content-center">
                <div>

                
                <div className="details mb-4">
                  <h5 className="field" >
                    Product Name:
                  </h5>
                  <input
                    type="text"
                    name="Name"
                    size="80"
                    value={productName}  onChange={(e) => {setName(e.target.value)}}
                  />
                </div>

                {/* tax */}
                <div className="details mb-4">
                  <h5 className="field" >
                   Tax Value (%):
                  </h5>
                  <input
                    type="text"
                    name="Name"

                    size="80"
                    defaultValue={taxId}
                    onChange={(e) => { setTaxId(e.target.value) }}
                    
                  />
                </div>
                <div className="details mb-4">
                  <h5 className="field">
                    Product Description:
                  </h5>
                  {/* <input className='description' type="text" value={productDescription}  onChange={(e) => {setDescription(e.target.value)} }/> */}
                  <CKEditor
                      editor={ClassicEditor}
                      config={{
                        removePlugins: ["EasyImage", "ImageUpload"]
                      }}
                      data={productDescription}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setDescription(data);
                        //console.log( { event, editor, data } );
                      }} />
                </div>
                <div className="details mb-4">
                  <h5 className="field">
                  Highlight Feature:
                  </h5>
                  {/* <input className='description' type="text" value={highlightFeature}  onChange={(e) => {setFeature(e.target.value)} }/> */}
                  <CKEditor
                      editor={ClassicEditor}
                      config={{
                        removePlugins: ["EasyImage", "ImageUpload"]
                      }}
                      data={highlightFeature}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setFeature(data);
                        //console.log( { event, editor, data } );
                      }} />

                </div>
                <div className="details mb-4">
                  <h5 className="field" >
                    Colors:
                  </h5>
                  <input
                    type="text"
                    name="Name"

                    size="80"
                    value={color}  onChange={(e) => {setColor(e.target.value)} }
                  />
                </div>
        
                <Link to="/product" ><button className='buttonN' onClick={(e) => editProduct()}>  Done</button></Link>
              </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>



        </div>
      </div>

    </div >
  )
}

export default Productedit