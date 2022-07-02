import React from "react";
import "./bannerview.scss";
//import  {withRouter}  from 'react-router-dom';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
//  import iPhonex from "../../Backend/Admin/src/upload/1656348258860.jpg"
// // let iPhonex ="../../Backend/Admin/src/upload/1656348258860.jpg" 

const Bannerview = () => {
  const params = useParams();
  const navigate = useNavigate();
  // const[data,setData] =useState("")
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setImage] = useState("");

  useEffect(async () => {
    getBannerDetails(params.id);
  }, []);

  const getBannerDetails = async (id) => {
    var result = await axios.post(
      "http://localhost:8000/api/banner/getBannerById",
      { id }
    );
    var result = await result.data;

    setName(result[0].name);
    console.log(result[0].name);

    setDescription(result[0].description);
    console.log(result[0].description);

    setImage(result[0].image);
    console.log(result[0].image);
  };

  return (
    <div className="bannerview">
      <Sidebar />
      <div className="bannerviewContainer">
        <Navbar />
        <div className="temp">
          <div className="camp1">
            <h1 className="d-flex justify-content-center mt-2 mb-4">
              <strong> {name}</strong>
            </h1>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <img className='previewImageBanner img-thumbnail' src="https://www.google.com/search?q=iphone+Se&rlz=1C1RXQR_enIN988IN989&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiu_Z_zu9T4AhVBR2wGHS_yBhgQ_AUoAnoECAIQBA&biw=1920&bih=1007&dpr=1#imgrc=QnmARfSZd9JAdM" alt="image" />
              </div>
            </div>
            <div className="row   mt-5">
              <div className="col-2"></div>
              <div className="col-8 d-flex justify-content-center">
                <div>
                  <div className="details mb-4">
                    <h5 className="field">Banner Name:</h5>
                    <input
                      type="text"
                      name="Name"
                      size="80"
                      defaultValue={name}
                      disabled
                    />
                  </div>
                  <div className="details mb-4">
                    <h5 className="field">Banner Category:</h5>
                    <div
                      className="parsedHTML"
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                  </div>

                  <Link to="/banner">
                    <button className="buttonN mb-5"> Done</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Bannerview;
