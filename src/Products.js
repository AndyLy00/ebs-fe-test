import React from "react";

const Products = () => {

    return (
        <div id="products">

            <div className="table">
                <div className="container">
                    <div className="table_menu">
                        <div className="table_item"> Category</div>
                        <div className="table_item"> Name</div>
                        <div className="table_item"> Price</div>
                        <div className="table_item">Actions</div>
                    </div>
                    <div className="table_element"></div>
                </div>
            </div>
        </div>
    );
}

export default Products;