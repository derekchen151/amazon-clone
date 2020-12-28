import React, { useState, useEffect } from 'react';
import './Payment.scss'
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import instance from '../../axois';
import axios from 'axios';

function Payment() {

	const [{user, basket, subtotal}, dispatch] = useStateValue();
	const [disabled, setDisabled] = useState(true);
	const [error, setError] = useState(null)
	const [processing, setProcessing] = useState(false);
	const [succseeded, setSuccseeded] = useState(false);
	const [clientSecret, setClientSecret] = useState('');
	const history = useHistory();

	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: 'post',
				url: `/payments/create?total=${subtotal * 100}`
			});
			setClientSecret(response.data.clientSecret);
		}
		getClientSecret();
	}, [basket])

	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async(e) => {
		e.preventDefault();
		setProcessing(true);
		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement)
			}
		}).then(({paymentIntent}) => {
			setSuccseeded(true);
			setError(null);
			setProcessing(false);
			history.replace('/orders');
		}).catch();

	}

	const handleChange = e => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : '')
	}

	return (
		<div className='payment'>
			<div className="payment__container">
				<h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>

				<div className="payment__container__section">
					<div className="payment__container__section__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__container__section__address">
						<p>{user?.email}</p>
						<p>123 Home Lane</p>
						<p>Toronto, Ontario</p>
					</div>
				</div>
				<div className="payment__container__section">
					<div className="payment__container__section__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__container__section__basket">
						{basket.map((item, index) => (
							<CheckoutProduct
								id = {item.id}
								title = {item.title}
								image = {item.image}
								price = {item.price}
								rating = {item.rating}/>
						))}
					</div>
				</div>
				<div className="payment__container__section">
					<div className="payment__container__section__title">
						<h3>Payment Method</h3>
					</div>	
					<div className="payment__container__section__details">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange}></CardElement>
							<div className="payment__container__section__details__price">
							<CurrencyFormat
								renderText = {(value) => (
									<h3>Order Total: {value}</h3>
								)}
								decimalScale = {2}
								value = {subtotal}
								displayType = {"text"}
								thousandSeparator = {true}
								prefix = {"$"}
							/>
							<button disabled={processing || disabled || succseeded}><span>{processing ? 'Processing' : 'Buy Now'}</span></button>
							</div>
							{error && <div>error</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

const PaymentPropTypes = {
	// always use prop types!
};

Payment.propTypes = PaymentPropTypes;

export default Payment;
