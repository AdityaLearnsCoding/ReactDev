const ProductDetails = ({ imageSrc, productName, price, discountedPrice }) => {
    return (
        <>
            <div><img src={imageSrc} alt={productName} width="40" /></div>
            <div>
                <span>{productName}</span>
                {discountedPrice? (
                    <div><del>Price: ${price}</del></div>
                    ) : (
                    <div><span>Price: ${price}</span></div>
                )}
                {discountedPrice && (
                    <div><span>Discount price: {discountedPrice}</span></div>
                )}
            </div>
            <div><button>Add to cart</button></div>
            </>
        );
}
export default ProductDetails;