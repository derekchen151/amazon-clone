import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './Subtotal.scss';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from 'src/Reducer';
import { useHistory, Link } from 'react-router-dom';

function Subtotal() {

	const [{basket, subtotal}, dispatch] = useStateValue();
	const history = useHistory();

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText = {(value) => (
					<>
						<p>
							Subtotal ({basket.length} items):
							<strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" / >This order contains a gift.
						</small>
					</>
				)}
				decimalScale = {2}
				value = {getBasketTotal(basket)}
				displayType = {"text"}
				thousandSeparator = {true}
				prefix = {"$"}
			/>
			<Link to='/payment'>
				<button>Proceed to Checkout</button>
			</Link>
		</div>
	)
}

export default Subtotal
