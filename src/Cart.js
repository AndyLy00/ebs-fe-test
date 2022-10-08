import React from "react";

const Cart = () => {

    return (

        <div id="shopping_list">

            <div className="table">
                <div className="container">
                    <div className="table_menu">
                        <div className="table_item"> Category</div>
                        <div className="table_item"> Name</div>
                        <div className="table_item"> Quantity</div>
                        <div className="table_item"> Price</div>
                        <div className="table_item">Actions</div>
                    </div>
                    <div className="table_element"></div>
                </div>
            </div>

        </div>
    );
}

export default Cart;