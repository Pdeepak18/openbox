import "./newsub.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import UploadIcon from '@mui/icons-material/Upload'
import { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Cast, Description } from "@mui/icons-material";
import axios from "axios";
import { Dropdown } from 'semantic-ui-react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
import Richtexteditor from './Richtexteditor';
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import { useNavigate } from "react-router-dom";

const Newsub = ({ title }) => {
    const [subcategoryFile, setFile] = useState("");
    const [richtext, setRichText] = useState("");
    let navigate = useNavigate();
    const [value, setValue] = useState("");

    const [categoryId, setcategoryID] = useState()
    const handleChange = e => {
        setcategoryID(e.target.value)
        console.log(e.target)
        setValue(e.target.value);

    }


    const [data, setData] = useState({
        categoryName: "",



    })

    //const [subName , setSubName] =useState("")

    const [item, setItem] = useState([])

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    const onFileChange = (e) => {
        setFile(e.target.files[0])
        console.log(e.target.files[0])
        if (e.target && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
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




    const uploadImage = async () => {
        try {
            const formData = new FormData();
            console.log(richtext);
            formData.append("subcategoryIcon", subcategoryFile);
            formData.append("subcategoryName", data.categoryName);

            formData.append("categoryId", categoryId);
            formData.append("descripition", richtext);


            const config = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            };
            const API = "subCategory/addsubCategory";
            const HOST = "http://localhost:8000/api";
            const url = `${HOST}/${API}`;

            const result = await axios.post(url, formData, config);


        } catch (error) {
            console.error(error);
        }
        window.location.reload()
    };



    return (
        <div className="newSub">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="newCard">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="newTitle mt-2 mb-5 d-flex justify-content-center">

                                <h1> <strong>{title}</strong> </h1>
                            </div>
                            <div className="newForm">
                                <div className="d-flex justify-content-center ">
                                    <img
                                        className="img-thumbnail previewImage"
                                        src={
                                            subcategoryFile
                                                ? URL.createObjectURL(subcategoryFile)
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

                                <form className="d-flex justify-content-center">
                                    <div >
                                        <div className="bodycat mb-4">
                                            <h5 className='field'>Select the category</h5>
                                            <Box sx={{ minWidth: 100 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label" style={{ fontSize: 20 }}>Category</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={value}
                                                        label="Cat"
                                                       
                                                        onChange={handleChange}
                                                    >
                                                        {
                                                            item.map((i) => (
                                                                <MenuItem value={i.id}>{i.categoryName}</MenuItem>
                                                            ))
                                                        }


                                                    </Select>
                                                </FormControl>
                                            </Box>

                                        </div>
                                        <input
                                            type="file"
                                            id="file"
                                            onChange={onFileChange}
                                            style={{ display: "none" }}
                                            name="subcategoryIcon"
                                        />


                                        <div className="details mb-4">
                                            <h5 className="field" color="grey">
                                                Sub-Category Name:
                                            </h5>
                                            <input
                                                type="text"
                                                name="Name"
                                                id="categoryName"
                                                size="100"
                                                onChange={(e) => handle(e)}
                                                placeholder="Category Name"
                                                value={data.categoryName}
                                            />
                                        </div>

                                        {/* <div className="formInput">
                            <label><b> Description:</b></label>
                            <textarea placeholder="About Product....."  onChange={(e)=>handle(e)} rows="8"cols="62.5" width="10px" border-radius="0.8px" id="description" value={data.description} />
                        </div> */}

                                        <div className=" mb-4">
                                            <h5 className="field">Category Description:</h5>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                config={{
                                                    removePlugins: ["EasyImage", "ImageUpload"]
                                                }}
                                                data={richtext}
                                                onChange={(event, editor) => {
                                                    const data = editor.getData()
                                                    setRichText(data)

                                                }} />
                                        </div>


                                        <Link to="/subcategary"><button className="buttonN mb-3" onClick={(e) => uploadImage()}>  Add New Sub-Category  </button></Link>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>

            </div>


        </div>
    );

};

export default Newsub;