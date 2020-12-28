import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.scss';
import { auth } from '../../firebase';

function Login() {
	const hisotry = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signIn = e => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email, password)
			.then((authObject) => {
				hisotry.push('/');
			}).catch((error) => {
				alert(error.message);
			});
	}

	const signUp = e => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email, password)
			.then((authObject) => {
				console.log(authObject);
				if (authObject) {
					hisotry.push('/');
				}
			}).catch((error) => {
				alert(error.message);
			});
	}

    return (
		<div className="login">
			<Link to="/">
				<img 
					src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204" 
					className="login__logo"
					alt="Amazon"/>
			</Link>
			<div className="login__container">
				<h1>Sign In</h1>
				<form>
					<h5>Email</h5>
					<input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
					<h5>Password</h5>
					<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
					<button onClick={signIn} className="login__container__signinButton">Sign In</button>
				</form>
				<p>
				By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.
				</p>
				<button onClick={signUp} className="login__container__signupButton">Sign Up</button>
			</div>
		</div>
	)
}

const LoginPropTypes = {
	// always use prop types!
};

Login.propTypes = LoginPropTypes;

export default Login;
