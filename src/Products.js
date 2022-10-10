import React from "react";
import {useState, useEffect} from "react";
import ProductList from "./ProductList";

const Products = () => {

    const [products, setProduct] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/data")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProduct(data)
            });
    }, []);

    return (
        <div id="products">

            <div className="table">
                <div className="container">
                    <div className="table_menu">
                        <div className="table_item table_item_name"> Name</div>
                        <div className="table_item table_item_category"> Category</div>
                        <div className="table_item table_item_description"> Description</div>
                        <div className="table_item table_item_price"> Price</div>
                    </div>

                    {products && <ProductList products={products}/> }

                    <div className="table_element"></div>
                </div>
            </div>
        </div>
    );
}

export default Products;