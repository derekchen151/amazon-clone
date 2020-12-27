import React from 'react';
import styles from './CheckoutProduct.scss';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from 'src/StateProvider';

function CheckoutProduct({id, title, image, price, rating}) {

	const [{bakset, subtotal}, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			item: {
				id: id,
				price: price
			}
		});
	}
	
	return (
		<div className="checkoutProduct">
			<img src={image} alt={title} className="checkoutProduct"/>
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__info__title">
					{title}
				</p>
				<p className="checkoutProduct__info__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<p className="checkoutProduct__info__rating">
					{Array(rating).fill().map((rating, i) => (
                        <StarIcon></StarIcon>
                    ))}
				</p>
				<button onClick={removeFromBasket}>Remove from Basket</button>
			</div>
		</div>
	)
}

export default CheckoutProduct;
