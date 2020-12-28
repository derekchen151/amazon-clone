import React from 'react';
import './Checkout.scss';
import Subtotal from '../Subtotal/index';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';


function Checkout() {
	
	const [{basket, subtotal, user}, dispatch] = useStateValue();
	
	return (
	<div className="checkout">
		<div className="checkout__left">
			<img 
				src="https://static.theceomagazine.net/wp-content/uploads/2019/05/13090414/McDonalds-Arches-campaign.jpg" 
				alt="Amazon Ads" 
				className="checkout__left__ad"/>
			<div>
				<h5>Hello, {user?.email}</h5>
				<h2 className="checkout__left__title">
					Your Shopping Basket
				</h2>
				<div>
					{basket.map((item, i) => (
						<CheckoutProduct
							id = {item.id}
							title = {item.title}
							image = {item.image}
							price = {item.price}
							rating = {item.rating}/>
					))}
				</div>
			</div>
		</div>
		<div className="checkout__right">
			<Subtotal />
		</div>
	</div>
	)
};

export default Checkout;
