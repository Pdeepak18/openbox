import "./newsub.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const Newsub = ({ inputs, title }) => {
    const [file, setFile] = useState("");


    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <img
                        src={
                            file
                                ? URL.createObjectURL(file)
                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                        alt=""
                    />

                    <div className="forInput"> <label htmlFor="file">
                        Image: <DriveFolderUploadOutlinedIcon className="icon" />
                    </label>
                        <input
                            type="file"
                            id="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ display: "none" }}
                        /></div>


                    <form>


                        <div className="formInput">
                            <label><b> Name:</b></label>
                            <input type="textarea" placeholder="Name...."  size="50" />
                        </div>

                        <div className="formInput">
                            <label><b> Description:</b></label>
                            <textarea placeholder="About Product....."  rows="8"cols="50" width="10px" />
                        </div>




                        <button>Send</button>
                    </form>

                </div>

            </div>


        </div>






    );

};

export default Newsub;