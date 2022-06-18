
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

import { Description, Router } from "@mui/icons-material";
import axios from "axios";
import { upload } from "@testing-library/user-event/dist/upload";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Datatable from "../../components/datatable/Datatable";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import { height } from "@mui/system";




const New = ({  title }) => {
    const [categoryFile, setFile] = useState("");
   const [text , setText] = useState("");
    let navigate = useNavigate();

    const [data, setData] = useState({
        categoryName: "",
        
    })

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    const onFileChange = (e) => {
        console.log(e.target.files[0])
        if (e.target && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    }

    const uploadImage = async () => {
        try {
            const formData = new FormData();
            console.log(text)
            formData.append("categoryIcon", categoryFile);
            formData.append("categoryName", data.categoryName);
            formData.append("description", text);
            const config = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            };
            const API = "category/addCategory";
            const HOST = "http://localhost:8000/api";
            const url = `${HOST}/${API}`;

            const result = await axios.post(url, formData, config);



        } catch (error) {
            console.error(error);
        }
        window.location.reload()

    };



    return (
        <div className="new">
        <div className="nsidebar">
            <Sidebar />
            </div>
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <img
                        src={
                            categoryFile
                                ? URL.createObjectURL(categoryFile)
                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                        alt=""
                    />

                    <div className="forInput">
                        <label htmlFor="file">
                            Image: <DriveFolderUploadOutlinedIcon className="icon" />
                        </label>
                    </div>


                    <form >
                        <input
                            type="file"
                            id="file"
                            onChange={onFileChange}
                            style={{ display: "none" }}
                            name="categoryIcon"
                        />


                        <div className="formInput">
                            <label><b> Name:</b></label>
                            <input type="textarea" onChange={(e) => handle(e)} placeholder="Name...." size="88" id="categoryName" value={data.categoryName} />
                        </div>

                        {/* <div className="formInput">
                           
                            <textarea placeholder="About Product....." onChange={(e) => handle(e)} rows="8" cols="62.5" width="10px" border-radius="0.8px" id="description" value={data.description} />
                        </div> */}
                        
                        
                        
                        <div className="editor">
                        <label><b>Description:</b></label>
                        
                        <CKEditor
                       
                      
                        editor= {ClassicEditor }
                        config={{
                            removePlugins: ["EasyImage","ImageUpload"]
                        }}
                        data={text}
                      
                        onChange = {(event,editor) => {
                            const data= editor.getData()
                            setText(data)

                        }} />
                    </div>
                        
                        <button onClick={(e) => uploadImage()}> <Link to="/categary" style={{ textDecoration: 'none', color: '#FFF' }}> Send </Link></button>
                    </form>

                   

                </div>

            </div>


        </div>






    );

};

export default New;