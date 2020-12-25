import React from 'react'
import './Product.scss';
import StarIcon from '@material-ui/icons/Star';

function Product({title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__info__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__info__rating">
                    {Array(rating).fill().map((rating, i) => (
                        <StarIcon></StarIcon>
                    ))}
                </div>
            </div>
            <img src={image} alt={title} className="product__info__image"/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
