const ProductList = (props) => {
    const products = props.products;

    return (
        <div className="product-list">
            {products.map((product) => (
                <div className="product-preview" key={product.id}>
                    <div className="table_menu2">
                        <div className="table_item table_item_name"> {product.name}</div>
                        <div className="table_item table_item_category"> {product.category}</div>
                        <div className="table_item table_item_description"> {product.description}</div>
                        <div className="table_item table_item_price">{product.price}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ProductList;