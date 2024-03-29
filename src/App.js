import Sidebar from "./components/sidebar/Sidebar";
import { React, useState } from "react";
import Topbar from "./components/topbar/Topbar.jsx";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/products/Product.jsx";
import CategoryP from "./pages/categoryP/CategoryP.jsx";
import ProductDrawer from "./components/Table/components/productDrawer/ProductDrawer";
import Customer from "./pages/Customers/Customer.jsx";
import Login from "./pages/Login/Login.jsx";
import ProductDetail from "./pages/products/ProductDetail";
import Sales from "./pages/SalesnOrders/Sales";
import Orders from "./pages/SalesnOrders/Orders";
import PrivateComponent from "./components/PrivateComponent";
import UpdateCategory from "./pages/categoryP/UpdateCategory";
import UpdateProduct from "./pages/products/UpdateProduct";

function App() {
  const [hide, setHide] = useState(false);
  return (
    <div className="App">
    <div className="AppGlass">
      <main>
        <>
          {/* <Topbar />
          <div style={{ display: "flex" }}>
          <Sidebar /> */}
          <Routes>
            {/* {hide ? null : <Topbar />} */}

            {/* {hide ? null : <Sidebar />} */}
            <Route element={<PrivateComponent />}>
              <Route
                path="/home"
                exact
                element={
                  <>
                    <Topbar />
                    <div style={{ display: "flex" }}>
                      <Sidebar /> <Home />
                    </div>
                  </>
                }
              />
              {/* <Route
                path="/"
                element={
                  <>
                    <Home />
                  </>
                }
              /> */}
              {/* 
              <Route
                path="/"
                element={
                  <>
                    <Home />
                  </>
                }
              /> */}
              <Route
                path="/sales&orders/sales"
                element={
                  <>
                    <Topbar />
                    <div style={{ display: "flex" }}>
                      <Sidebar /> <Sales />
                    </div>
                  </>
                }
              />
              <Route
                path="/sales&orders/orders"
                element={
                  <>
                    <Topbar />
                    <div style={{ display: "flex" }}>
                      <Sidebar /> <Orders />
                    </div>
                  </>
                }
              />
              <Route
                path="/customers"
                element={
                  <>
                    <Topbar />
                    <div style={{ display: "flex" }}>
                      <Sidebar /> <Customer />
                    </div>
                  </>
                }
              />
              <Route
                path="/products"
                exact
                element={
                  <>
                    <Topbar />
                    <div style={{ display: "flex" }}>
                      <Sidebar /> <Product />
                    </div>
                  </>
                }
              ></Route>
              <Route
                path="/products/Detail/:id"
                exact
                element={
                  <>
                    <Topbar />
                    <div style={{ display: "flex" }}>
                      <Sidebar /> <ProductDetail />
                    </div>
                  </>
                }
              ></Route>
              <Route
                path="/category"
               
                element={
                  <>
                    <Topbar />
                    <div style={{ display: "flex" }}>
                      <Sidebar /> <CategoryP />
                    </div>
                  </>
                }
              ></Route>
               <Route
                path="/updatecategory/:id"
               
                element={
                  
                   <UpdateCategory />
                 
                }
              ></Route>
                <Route
                path="/updateproduct/:id"
               
                element={
                  
                   <UpdateProduct />
                 
                }
              ></Route>
            </Route>
            <Route
              path="/"
              exact
              element={
                <>
                  <Login />
                  {/* {setHide(true)}; */}
                </>
              }
            ></Route>
          </Routes>
          {/* </div> */}
        </>
      </main>
      </div>
    </div>
  );
}

export default App;
