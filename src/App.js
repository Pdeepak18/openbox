import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Categary from "./pages/list/Categary";
import Subcategary from "./pages/list/Subcategary";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { Category } from "@mui/icons-material";
import Newsub from "./pages/new/Newsub";
import Newprod from "./pages/new/Newprod";
import Newtax from "./pages/new/Newtax";
import Product from "./pages/product/Product";
import Taxmaster from "./pages/taxmaster/Taxmaster.jsx";
import Banner from "./pages/banner/Banner";
import { EditorState } from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import Newbanner from "./pages/new/Newbanner";
import Bannerview from "./pages/bannerview/Bannerview";
import Banneredit from "./pages/banneredit/Banneredit";



function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            {/* category */}
            <Route path="categary">
              <Route index element={<Categary />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New  title="Add New Category" />}
              />
            </Route>

              {/* subcategory */}
            <Route path="subcategary">
              <Route index element={<Subcategary />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<Newsub  title="Add New Sub-Category" />}
              />
            </Route>

              {/* Product */}
            <Route path="Product" >
              <Route index element={<Product />} />
              <Route
                path="new"
                element={<Newprod  title="Add New Product" />}
              />
            </Route>

              {/* Taxmaster */}
            <Route path="taxmaster" >
              <Route index element={<Taxmaster />} />
              <Route
                path="new"
                element={<Newtax  title="Add New Tax-Details" />}
              />
            </Route>

              {/* Banner */}
            <Route path="Banner" >
              
              <Route index element={<Banner />} />
              
              <Route path="view/:id" element={<Bannerview  />} /> 
              
              <Route
                path="new"
                element={<Newbanner  title="Add New Banner-Details" />}
              />
            <Route path="edit/:id" element={<Banneredit />} />
            </Route>
              
            

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
