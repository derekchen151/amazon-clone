import React from 'react'
import './Home.scss';
import Product from '../Product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__container__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Prime Video Banner"/>
            </div>

            <div className="home__row">
                <Product 
                    id='12850'
                    title='The Lean Startup'
                    price={1.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                    rating={1}/>
                <Product 
                    id='12852'
                    title='The Lean Startup'
                    price={2.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                    rating={3}/>
            </div>

            <div className="home__row">
                <Product 
                    id='12853'
                    title='The Lean Startup'
                    price={11.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                    rating={3}/>
                <Product 
                    id='12854'
                    title='The Lean Startup'
                    price={12.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                    rating={1}/>
                <Product 
                    id='12855'
                    title='The Lean Startup'
                    price={13.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                    rating={5}/>
            </div>

            <div className="home__row">
                <Product 
                    id='12856'
                    title='The Lean Startup'
                    price={39.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                    rating={4}/>
            </div>
        </div>
    )
}

export default Home
