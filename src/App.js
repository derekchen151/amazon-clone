import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51I3RHNEn7CXL6hC7oMdIKY746W7qq5ZqbkExDaSwwcbkaMjCjON6ojpxXdtsSCMKqKjSSxUjFoiaULCtcMLWuOAC00ARUDFpAW');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component runs
    auth.onAuthStateChanged((authUser) => {
      console.log('the user is >>> ', authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);
  
  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
