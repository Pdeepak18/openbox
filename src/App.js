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
import Productedit from './pages/product/productedit/Productedit';
import Productview from './pages/product/productview/Productview';
import Categoryview from './pages/list/categoryview/Categoryview';
import Categoryedit from './pages/list/categoryedit/Categoryedit';
import Subcategoryview from './pages/list/subcategoryview/Subcategoryview';
import Subcategoryedit from './pages/list/subcategoryedit/Subcategoryedit';

// Vendor
import Vendor from "./pages/Vendor/Vendor";
import VendorProfile from "./pages/Vendor/VendorProfile"
// Customer
import Customer from "./pages/Customer/customer"

// Bootstarp
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'

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
              
              <Route path="view/:id" element={<Categoryview  />} /> 
              <Route path="edit/:id" element={<Categoryedit />} />
              <Route
                path="new"
                element={<New  title="Add New Category" />}
              />
            </Route>

              {/* subcategory */}
            <Route path="subcategary">
              <Route index element={<Subcategary />} />
              <Route path="view/:id" element={<Subcategoryview  />} /> 
              <Route path="edit/:id" element={<Subcategoryedit />} />
              <Route
                path="new"
                element={<Newsub  title="Add New Sub-Category" />}
              />
            </Route>

              {/* Product */}
            <Route path="Product" >
              <Route index element={<Product />} />
              <Route path="view/:id" element={<Productview  />} /> 
              <Route path="edit/:id" element={<Productedit />} />

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
              <Route path="edit/:id" element={<Banneredit />} />
              
              <Route
                path="new"
                element={<Newbanner  title="Add New Banner-Details" />}
              />
            
            </Route>
            {/* Vendor */}
            <Route path="Vendor">
            <Route index element={<Vendor />} />
            <Route path="VendorProfile" element={<VendorProfile />} />
            </Route>

            {/* Customer */}
            <Route path="Customer" >
              <Route index element={<Customer />} />
              
              </Route>

              
            

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
