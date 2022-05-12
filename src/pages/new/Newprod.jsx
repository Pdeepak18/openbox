
import React from 'react'
import "./newprod.scss"
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import { Dropdown } from 'semantic-ui-react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
import Richtexteditor from './Richtexteditor';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
import _ from 'lodash';
import { Link } from 'react-router-dom';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";






export default function Newprod() {



    const [uploadedImgs, setUplodedImgs] = useState([]);
    const [isUploding, setUploding] = useState(false);
    const [value, setValue] = useState("");
    const [categoryId, setcategoryID] = useState()
    const [item, setItem] = useState([])
    const [subvalue, setsubValue] = useState("");
    const [subcategoryId, setsubcategoryID] = useState()
    const [subitem, setsubItem] = useState([])
    const [state, setState] = useState([])
    const [tags, setTags] = useState(["example tag"])

    const [data, setData] = useState({
        productName: "",
        productDescription: "",
        highlightFeature: "",
        color: ""
    })

    const handleChange = e => {
        setcategoryID(e.target.value)
        console.log(e.target)
        setValue(e.target.value);
    }

    const handlesubChange = e => {

        setsubcategoryID(e.target.value)
        console.log(e.target)
        setsubValue(e.target.value);
    }

    useEffect(() => {
        fetchCategory()
    }, [])

    const fetchCategory = async () => {
        var result = await fetch("http://localhost:8000/api/category/getAllCategory")
        var temp = await result.json()
        console.log(temp)
        setItem(temp)
    }

    useEffect(() => {
        fetchsubCategory()
    }, [])

    const fetchsubCategory = async () => {
        var result1 = await fetch("http://localhost:8000/api/subcategory/getAllsubCategory")
        var temp1 = await result1.json()
        console.log(temp1)
        setsubItem(temp1)
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    const [file, setFile] = useState([])

    const onFileChange = (e) => {
        setFile(e.target.files[0])
        console.log(e.target.files[0])
        let { files } = e.target;

        let formData = new FormData();
        _.forEach(files, file => {
            formData.append('files', file);
            console.log(files)
        }
        );
    }


    const handleImgChange = async e => {



    }

    const uploadImage = async () => {
        try {
            const formData = new FormData();

            formData.append("categoryId", categoryId)
            formData.append("subCategoryId", subcategoryId)
            formData.append("productName", data.productName)
            formData.append("productDescription", data.productDescription)
            formData.append("highlightFeature", data.highlightFeature)
            formData.append("color", "red")
            formData.append("image", file)

            console.log(formData)


            const config = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            };
            const API = "product/addProduct";
            const HOST = "http://localhost:8000/api";
            const url = `${HOST}/${API}`;

            const result = await axios.post(url, formData, config);
            console.log(result)
        } catch (error) {
            console.error(error);
        }
    }


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
                    <h3 className='temp'>Select the category</h3>
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
                                {
                                    item.map((i) => (
                                        <MenuItem value={i.id} key={i.id}>{i.categoryName}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Box>

                </div>



                {/* subcategory dropdown       */}
                <div className="bodycat">
                    <h3 className='temp'>Select the Sub- category</h3>
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
                                {
                                    subitem.map((i) => (
                                        <MenuItem value={i.id} key={i.id}>{i.subcategoryName}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Box>

                </div>


                <div className="details ">
                    <h3 className='temp' color='grey'>Name :</h3>
                    <input type="text" name="Name" id="productName" size="90" onChange={(e) => handle(e)} placeholder='Name of the product...' value={data.productName} />

                </div>

                <div className="details">
                    <h3 className='temp' color='grey'>Description: </h3>
                    <textarea name="description" id="productDescription" cols="105" rows="10" onChange={(e) => handle(e)} value={data.productDescription}></textarea>
                </div>

                <div className="color details">
                    <h3 className='temp' >Choose the color:</h3>
                   
                    <ReactTagInput
                        tags={tags}
                        onChange={(newTags) => setTags(newTags)}
                        
                    />

                </div>

                <div className="details">
                    <h3 className='temp' color='grey'>Highlight Features: </h3>
                    <textarea name="" id="highlightFeature" cols="105" rows="10" onChange={(e) => handle(e)} value={data.highlightFeature}></textarea>
                </div>

                <div className='details'>
                    <input multiple className="file-input" type="file" id="" onChange={onFileChange} />
                </div>




                <button onClick={(e) => uploadImage()} > <Link to="/categary" style={{ textDecoration: 'none', color: '#FFF' }}>Send </Link></button>
            </div>


        </div>
    )
}
