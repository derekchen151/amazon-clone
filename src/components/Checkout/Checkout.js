import React from 'react';
import PropTypes from 'prop-types';
import './Checkout.scss';
import Subtotal from '../Subtotal/index';

const Checkout = props => (
	<div className="checkout">
		<div className="checkout__left">
			<img 
				src="https://static.theceomagazine.net/wp-content/uploads/2019/05/13090414/McDonalds-Arches-campaign.jpg" 
				alt="Amazon Ads" 
				className="checkout__left__ad"/>
			<div>
				<h2 className="checkout__left__title">
					Your Shopping Basket
				</h2>
				{/* BasketItem */}
			</div>
		</div>
		<div className="checkout__right">
			<Subtotal />
		</div>
	</div>
);

const CheckoutPropTypes = {
	// always use prop types!
};

Checkout.propTypes = CheckoutPropTypes;

export default Checkout;
