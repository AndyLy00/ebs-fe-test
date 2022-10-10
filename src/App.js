import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './index.css'
import Navbar from './Navbar';
import Products from "./Products";
import Cart from "./Cart";

function App() {


    return (

        <Router>
            <div className="App">
                <div className="Navbar">
                    <Navbar/>
                </div>

                <div className="content">
                    <Routes>
                        <Route path='/' element={<Products/>} />
                        <Route path='/cart' element={<Cart/>} />
                    </Routes>
               </div>

            </div>
        </Router>

);
}

export default App;
