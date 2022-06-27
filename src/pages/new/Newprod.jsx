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
import UploadIcon from '@mui/icons-material/Upload';
import axios from "axios";
import _ from "lodash";
import { Link } from "react-router-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import MultiImageInput from "react-multiple-image-input";

export default function Newprod() {

  const [text, setText] = useState("");
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

   const [productDescription, setProductDescription] = useState();
   const [highlightFeature, setHighlightFeature] = useState();



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
    var result = await axios.post('http://localhost:8000/api/subcategory/getsubCategoryByCategoryId',
      { categoryId: id })
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
    <div className="newProduct">
      <Sidebar />
      <div className="subcontainer">
        <Navbar />
        <div className="form">
          <div className="top mb-5">
            <h1> <strong> Add New Product</strong></h1>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="bodycat ">
                <h5 className="field">Select the category</h5>
                <Box sx={{ minWidth: 100 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
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
                <h5 className="field">Select the Sub- category</h5>
                <Box sx={{ minWidth: 100 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sub-category</InputLabel>
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
                <h5 className="field" color="grey">
                  Product Name:
                </h5>
                <input
                  type="text"
                  name="Name"
                  id="productName"
                  size="100"
                  onChange={(e) => handle(e)}
                  placeholder="Product Name"
                  value={data.productName}
                />
              </div>

              {/* Description    */}

              <div className="details">
                <h5 className="field" color="grey">
                  Description:{" "}
                </h5>
                <div className="editor">
                  <CKEditor
                    editor={ClassicEditor}
                    config={{
                      removePlugins: ["EasyImage", "ImageUpload"]
                  }}
                    value={productDescription}
                    onChange={(event, editor) => {
                      const data = editor.getData()
                      setProductDescription(data)

                  }}
                  />
                </div>
                {/* <textarea
                  name="description"
                  id="productDescription"
                  cols="100"
                  rows="10"
                  onChange={(e) => handle(e)}
                  value={data.productDescription}
                ></textarea> */}
              </div>

              {/* Tags Input */}
              <div className="color details">
                <h5 className="field">Choose the color:</h5>

                {/* <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"></input> */}
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
                <h5 className="field" color="grey">
                  Highlight Features:
                </h5>
                <div className="editor">
                  <CKEditor
                    editor={ClassicEditor}
                    config={{
                      removePlugins: ["EasyImage", "ImageUpload"]
                  }}
                  value={highlightFeature}
                    onChange={(event, editor) => {
                      const data = editor.getData()
                      setHighlightFeature(data)

                  }}
                  />
                </div>
                {/* <textarea
                  name="" id="highlightFeature"
                  cols="100"
                  rows="10"
                  onChange={(e) => handle(e)}
                  value={data.highlightFeature}
                ></textarea> */}
              </div>

              {/* Upload images */}
              <div className="details1">

                <h5 className="field">Upload images:</h5>{" "}

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

                <div className="forInput mt-4 mb-4" >
                  <label htmlFor="file" class="custom-file-upload">
                    <input type="file" />
                    <UploadIcon className="icon" />Upload Images
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
                <div className="">
                  <img
                    className="img-thumbnail previewImage"
                    src={
                      file
                        ? URL.createObjectURL(file)
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                  />
                </div>
              </div>
              <Link
                to="/product"
                style={{ textDecoration: "none", color: "#FFF" }}
              >
                <button className="btn buttonP" onClick={(e) => uploadImage()}>
                  {" "}

                  Add Product{" "}

                </button>
              </Link>
            </div>
            <div className="col-2"></div>
          </div>
          {/* category dropdown */}

        </div>
      </div>
    </div>
  );
}
