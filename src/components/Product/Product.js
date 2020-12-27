import React from 'react'
import './Product.scss';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../../StateProvider';

function Product({id, title, image, price, rating}) {
    
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch ({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

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
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
