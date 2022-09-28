import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = ({product, addToCart}) => {
    const {name, price, img, seller, ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <div>
                    <p className="product-name">{name}</p>
                    <p className="product-price">Price: ${price}</p>
                </div>
                <div>
                    <p className="product-manufacturer">Manufacturer: {seller}</p>
                    <p className='product-rating'>Rating: {ratings}</p>
                </div>
            </div>
            
            <button className='add-to-cart-btn' onClick={ () => addToCart(product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>  </button>
        </div>
    );
};

export default Product;