import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Categary from "./pages/list/Categary";
import Subcategary from "./pages/list/Subcategary";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Category } from "@mui/icons-material";
import Newsub from "./pages/new/Newsub";
import Newprod from "./pages/new/Newprod";
import Product from "./pages/product/Product";
import Taxmaster from "./pages/taxmaster/Taxmaster.jsx";
import Banner from "./pages/banner/Banner";
import { EditorState } from "draft-js";
import {Editor} from "react-draft-wysiwyg";



function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="categary">
              <Route index element={<Categary />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Category" />}
              />
            </Route>
            <Route path="subcategary">
              <Route index element={<Subcategary />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<Newsub inputs={productInputs} title="Add New Sub-Category" />}
              />
            </Route>
            <Route path="Product" >
              <Route index element={<Product />} />
              <Route
                path="new"
                element={<Newprod inputs={productInputs} title="Add New Product" />}
              />
            </Route>
              <Route path="taxmaster" >
              <Route index element={<Taxmaster />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
              </Route>

              
              <Route path="Banner" >
              <Route index element={<Banner />} />
              
              </Route>
              
            

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
