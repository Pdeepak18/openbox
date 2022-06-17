import React from "react";
import "./newbanner.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link } from 'react-router-dom';
import axios from "axios";

const Newbanner = ({  title }) => {
  const [bannerFile, setFile] = useState("");
  const [text , setText] = useState("");
  const [data, setData] = useState({
    name: "",
    
})

function handle(e) {
  const newdata = { ...data }
  newdata[e.target.id] = e.target.value
  setData(newdata)
  console.log(newdata)
}

  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const uploadImage = async () => {
    try {
        const formData = new FormData();
        formData.append("image", bannerFile);
        formData.append("name", data.name);
        formData.append("description", text);
        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };
        const API = "banner/addBanner";
        const HOST = "http://localhost:8000/api";
        const url = `${HOST}/${API}`;

        const result = await axios.post(url, formData, config);



    } catch (error) {
        console.error(error);
    }


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
        <div className="bottom12">
          <img
            src={
              bannerFile
                ? URL.createObjectURL(bannerFile)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
          </div>

          <div className="forInput">
            <label htmlFor="file">
              Image: <DriveFolderUploadOutlinedIcon className="icon" />
            </label>
          </div>
          <form>
            <input
              type="file"
              id="file"
              onChange={onFileChange}
              style={{ display: "none" }}
              name="categoryIcon"
            />

            <div className="formInput">
              <label>
                <b> Name:</b>
              </label>
              <input
                type="textarea"
                onChange={(e) => handle(e)}
                placeholder="Name...."
                size="88"
                id="name"
                value={data.name}
              />
            </div>

            <div className="editor">
              <label>
                <b>Description:</b>
              </label>

              <CKEditor
                editor={ClassicEditor}
                config={{
                  removePlugins: ["EasyImage", "ImageUpload"],
                }}
                data={text}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setText(data);
                }}
              />
            </div>

            <button onClick={(e) => uploadImage()}>
              {" "}
              <Link
                to="/banner"
                style={{ textDecoration: "none", color: "#FFF" }}
              >
                {" "}
                Send{" "}
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newbanner;
