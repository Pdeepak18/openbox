import React from 'react'
import "./categoryedit.scss"
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



const Categoryedit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [bannerFile, setFile] = useState("");
  const [categoryName, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryIcon, setImage] = useState("");
  const [des, setDes] = useState("");

  useEffect(async () => {
    
    getCategoryDetails(params.id);
}, [])

const getCategoryDetails = async (id) => {
  
  var result =await axios.post('http://localhost:8000/api/category/getCategory', 
  {id})
  var result = await result.data
  
  setName(result[0].categoryName);
  console.log(result[0].categoryName)

  setDescription(result[0].description);
  console.log(result[0].description)

  setImage(result[0].categoryIcon);
  console.log(result[0].categoryIcon)

  setDes(result[0].description); 
}


const onFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const editCategory = async () => {
  
  try {
      const formData = new FormData();
      formData.append("id",params.id)
      formData.append("categoryIcon", bannerFile);
      formData.append("categoryName",categoryName );
      formData.append("description", description);
    
      const config = {
          headers: {
              "content-type": "multipart/form-data"
          }
      };
      const API = "category/editCategoryById";
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
      <div className="tempE " >
        <div className="row">
          <div className="col-2"></div>

          <div className="col-8 d-flex justify-content-center">
            <div>
              <div className="">
                <h1 className='d-flex  justify-content-center mt-2 mb-4'>Category: <strong> {categoryName}</strong></h1>
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
                    Category Name:
                  </h5>
                  <input
                    type="text"
                    name="Name"
                    id="categoryName"
                    size="100"
                    value={categoryName} onChange={(e) => { setName(e.target.value) }}
                  />
                
                {/* <label> <strong> Name :     </strong></label>
<input type="text" value={categoryName} onChange={(e) => { setName(e.target.value) }} /> */}
              

              {/* <div className="camp1">
<label> <strong> Description :     </strong></label>
<input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
</div> */}
              <div className="editorx  mt-4 mb-4">
                <h5 className="field">Category Description:</h5>
                <CKEditor
                  editor={ClassicEditor}
                  config={{
                    removePlugins: ["EasyImage", "ImageUpload"]
                  }}
                  data={description}
                  onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setDescription(data);
                    //console.log( { event, editor, data } );
                } }/>
                {/* <input type="text"size="100" value={description} onChange={(e) => { setDescription(e.target.value) }} /> */}
                  
              </div>
              <Link to="/categary"><button className='buttonX' onClick={(e) => editCategory()} >  Done</button></Link>
              </div>

            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>


    </div>


  </div>
  </div>
)
}

export default Categoryedit