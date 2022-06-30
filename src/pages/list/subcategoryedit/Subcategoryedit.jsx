import React from 'react'
import "./subcategoryedit.scss"
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import UploadIcon from '@mui/icons-material/Upload';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Subcategoryedit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [bannerFile, setFile] = useState("");
  const [subcategoryName, setName] = useState("");
  const [descripition, setDescripition] = useState("");
  const [subcategoryIcon, setImage] = useState("");

  

  useEffect(async () => {

    getSubCategoryDetails(params.id);
  }, [])

  const getSubCategoryDetails = async (id) => {

    var result = await axios.post('http://localhost:8000/api/subcategory/getsubCategory',
      { id })
    var result = await result.data

    setName(result[0].subcategoryName);
    console.log(result[0].subcategoryName)

    setDescripition(result[0].descripition);
    console.log(result[0].descripition)

    setImage(result[0].subcategoryIcon);
    console.log(result[0].subcategoryIcon)

  }

  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const editSubCategory = async () => {

    try {
      const formData = new FormData();
      formData.append("id", params.id)
      formData.append("subcategoryIcon", bannerFile);
      formData.append("subcategoryName", subcategoryName);
      formData.append("descripition", descripition);

      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      const API = "subcategory/editSubcategoryById";
      const HOST = "http://localhost:8000/api";
      const url = `${HOST}/${API}`;

      const result = await axios.post(url, formData, config);



    } catch (error) {
      console.error(error);
    }
    window.location.reload()

  };

  return (
    <div className="bannerview">
      <Sidebar />
      <div className="bannerviewContainer">
        <Navbar />
        <div className="tempE">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8 d-flex justify-content-center">
              <div>
                <div className="camp1">
                  <h1 className=' d-flex justify-content-center mt-2 mb-4'>Sub-Category: <strong> {subcategoryName}</strong></h1>
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
                  <div className="forInput mt-4 mb-4 d-flex justify-content-center" >
                    <label htmlFor="file" class="custom-file-upload">
                      <input type="file" />
                      <UploadIcon className="icon" />Upload Images
                    </label>
                  </div>
                  <div className="details  mb-4 ">
                    <h5 className="field" color="grey">
                      Sub-Category Name:
                    </h5>
                    <input
                      type="text"
                      name="Name"
                      id="categoryName"
                      size="100"
                      value={subcategoryName} onChange={(e) => { setName(e.target.value) }}
                    />
                    <div className="editorx  mt-4 mb-4">
                      <h5 className="field">Sub-Category Description:</h5>
                      <CKEditor
                  editor={ClassicEditor}
                  config={{
                    removePlugins: ["EasyImage", "ImageUpload"]
                  }}
                  data={descripition}
                  onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setDescripition(data);
                    //console.log( { event, editor, data } );
                } }/>
                    </div>
                    <Link to="/subcategary"><button className='buttonX' onClick={(e) => editSubCategory()} >  Done</button></Link>
                  </div>

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

export default Subcategoryedit