import React from 'react'
import './Header.scss'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from 'src/firebase';

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        } else {
            history.push('/login');
        }
    }

    return (
        <div className="header">
            <Link to='/'>
                <img className="header__logo" 
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt="Amazon Logo"/>
            </Link>
            <div className="header__search">
                <input type="text" className="header__search__input"/>
                <SearchIcon className="header__search__icon"></SearchIcon>
            </div>
            <div className="header__nav">
                <div onClick={handleAuthentication} className="header__nav__option">
                    <span className="header__nav__option__one">
                        Hello {user ? user.email : 'Guest'}
                    </span>
                    <span className="header__nav__option__two" >
                        {user ? 'Sign Out': 'Sign In'}
                    </span>
                    
                </div>
                <div className="header__nav__option">
                    <span className="header__nav__option__one">
                        Returns
                    </span>
                    <span className="header__nav__option__two">
                        & Orders
                    </span>
                </div>
                <div className="header__nav__option">
                    <span className="header__nav__option__one">
                        Your
                    </span>
                    <span className="header__nav__option__two">
                        Prime
                    </span>
                </div>
                <Link to='/checkout'>
                    <div className="header__basket">
                        <ShoppingBasketIcon />
                        <span className="header__nav__option__two header__basket__count">{ basket?.length }</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;
