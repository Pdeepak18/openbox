import "./banner.scss"
import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { useState } from "react";
import 'react-dropzone-uploader/dist/styles.css'

import Databanner from "../../components/datatable/Databanner"

function Banner() {
    return(
        <div className="banner">
    <Sidebar/>
    <div className="bannerContainer">
      <Navbar/>
      <Databanner />
    </div>
  </div>
    )
}

export default Banner