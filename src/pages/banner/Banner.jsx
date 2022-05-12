import "./banner.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { useState } from "react";

function Banner() {
    const [file, setFile] = useState([]);

    function uploadSingleFile(e) {
        let ImagesArray = Object.entries(e.target.files).map((e) =>
            URL.createObjectURL(e[1])
        );
        console.log(ImagesArray);
        setFile([...file, ...ImagesArray]);
        console.log("file", file);
    }

    function upload(e) {
        e.preventDefault();
        console.log(file);
    }

    function deleteFile(e) {
        const s = file.filter((item, index) => index !== e);
        setFile(s);
        console.log(s);
    }
    return (
        <div className="bannerMaster">
            <Sidebar />
            <div className="bannerContainer">
                <Navbar />

                <div className="imagess">
                    <form>
                        <div className="form-group preview">
                            {file.length > 0 &&
                                file.map((item, index) => {
                                    return (
                                        <div key={item}>
                                            <img src={item} alt="" />
                                            <button type="button" onClick={() => deleteFile(index)}>
                                                delete
                                            </button>
                                        </div>
                                    );
                                })}
                        </div>

                        <div className="form-group">
                            <input
                                type="file"
                                disabled={file.length === 5}
                                className="form-control"
                                onChange={uploadSingleFile}
                                multiple
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary btn-block"
                            onClick={upload}
                        >
                            Upload
                        </button>
                    </form>
                    </div>
                </div>
            </div>
            )
}

            export default Banner