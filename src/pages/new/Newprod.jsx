import React from "react";
import "./newprod.scss";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Dropdown } from "semantic-ui-react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Input from "@mui/material/Input";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
import _ from "lodash";
import { Link } from "react-router-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import MultiImageInput from "react-multiple-image-input";




export default function Newprod() {
 
  const [text , setText] = useState("");
  const [images, setImages] = useState({});
  const [value, setValue] = useState("");
  const [categoryId, setcategoryID] = useState();
  const [item, setItem] = useState([]);
  const [subvalue, setsubValue] = useState("");
  const [subcategoryId, setsubcategoryID] = useState();
  const [subitem, setsubItem] = useState([]);
  const [state, setState] = useState([]);
  const [tags, setTags] = useState([]);
  const [temp, setFileImage] = useState([]);
  const [file, setFile] = useState("");

  const [data, setData] = useState({
    productName: "",
    productDescription: "",
    highlightFeature: "",
    //color: [],
  });




  //useeffect to fetch category and subcategory
  useEffect(() => {
    fetchCategory();
  }, []);
  
  // useEffect(() => {
  //   fetchsubCategory();
  // }, []);



  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  const handleChange = (e) => {
    setcategoryID(e.target.value);
    console.log(e.target);
    setValue(e.target.value);
    fetchsubCategory(e.target.value);
  };

  const handlesubChange = (e) => {
    setsubcategoryID(e.target.value);
    console.log(e.target);
    setsubValue(e.target.value);
  };

  

  const fetchCategory = async () => {
    var result = await fetch(
      "http://localhost:8000/api/category/getAllCategory"
    );
    var temp = await result.json();
    console.log(temp);
    setItem(temp);
  };

  

  const fetchsubCategory = async (id) => {
    var result =await axios.post('http://localhost:8000/api/subcategory/getsubCategoryByCategoryId', 
    {categoryId :id})
    var ans = await result.data
    setsubItem(ans)
    
  };

  

 

  //images upload
  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  

  //api integrate
  const uploadImage = async () => {
    try {
      const formData = new FormData();

      formData.append("categoryId", categoryId);
      formData.append("subCategoryId", subcategoryId);
      formData.append("productName", data.productName);
      formData.append("productDescription", data.productDescription);
      formData.append("highlightFeature", data.highlightFeature);
      formData.append("color", JSON.stringify(tags));
      formData.append("image", file);

      console.log(formData);

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const API = "product/addProduct";
      const HOST = "http://localhost:8000/api";
      const url = `${HOST}/${API}`;

      const result = await axios.post(url, formData, config);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    window.location.reload()

    
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="subcontainer">
        <Navbar />
        <div className="top">
          <h2>Add New Product</h2>
        </div>

        {/* category dropdown */}
        <div className="bodycat ">
          <h3 className="temp">Select the category</h3>
          <Box sx={{ minWidth: 100 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Cat</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label="Cat"
                style={{ width: 760 }}
                onChange={handleChange}
              >
                {item.map((i) => (
                  <MenuItem value={i.id} key={i.id}>
                    {i.categoryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>

        {/* subcategory dropdown       */}
        <div className="bodycat">
          <h3 className="temp">Select the Sub- category</h3>
          <Box sx={{ minWidth: 100 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sub</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subvalue}
                label="Sub"
                style={{ width: 760 }}
                onChange={handlesubChange}
              >
                {subitem.map((i) => (
                  <MenuItem value={i.id} key={i.id}>
                    {i.subcategoryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>

                  {/* product name */}
        <div className="details ">
          <h3 className="temp" color="grey">
            Name :
          </h3>
          <input
            type="text"
            name="Name"
            id="productName"
            size="90"
            onChange={(e) => handle(e)}
            placeholder="Name of the product..."
            value={data.productName}
          />
        </div>

               {/* Description    */}
               
        <div className="details">
          <h3 className="temp" color="grey">
            Description:{" "}
          </h3>
          <textarea
            name="description"
            id="productDescription"
            cols="105"
            rows="10"
            onChange={(e) => handle(e)}
            value={data.productDescription}
          ></textarea>
        </div>

          {/* Tags Input */}
        <div className="color details">
          <h3 className="temp">Choose the color:</h3>

          <ReactTagInput
            tags={tags}
            onChange={(e) => {
              setTags(e)
              //console.log(e);
              console.log(tags);
            }}
            value={data.color}
          />
        </div>

          {/* Highly features */}
        <div className="details">
          <h3 className="temp" color="grey">
            Highlight Features:
          </h3>
          <textarea
            name="" id="highlightFeature"
            cols="105"
            rows="10"
            onChange={(e) => handle(e)}
            value={data.highlightFeature}
          ></textarea>
        </div>
          
          {/* Upload images */}
        <div className="details1">
          <label>
            <b>Upload images:</b>{" "}
          </label>
          {/* <MultiImageInput
            max={6}
            images={images}
            setImages={setImages}
            cropConfig={{
              crop,
              ruleOfThirds: true,
              maxWidth: 1200,
              maxHeight: 1200
            }}
            theme="light"
            //onChange={onFilechange} */}
            
            <div className="forInput">
            <label htmlFor="file">
              Image: <DriveFolderUploadOutlinedIcon className="icon" />
            </label>
          </div>
          <input
              type="file"
              id="file"
              multiple
              onChange={onFileChange}
              style={{ display: "none" }}
              name="categoryIcon"
            />
            <div className="bottom12">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
          </div>

         
        </div>

        <button onClick={(e) => uploadImage()}>
          {" "}
          <Link
            to="/product"
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            Send{" "}
          </Link>
        </button>
      </div>
    </div>
  );
}
