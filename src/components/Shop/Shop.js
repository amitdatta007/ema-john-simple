import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        const loadData = async() => {
            const res = await fetch('products.json');
            const data = await res.json();
            setProducts(data);
        };
        loadData();
    }, []);


    const addToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    };


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                        addToCart={addToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>cart</h3>
                <p>Cart Items: {cart.length}</p>
                
            </div>
        </div>
    );
};

export default Shop;