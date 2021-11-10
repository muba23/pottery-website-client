import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeReviews from '../HomeReviews/HomeReviews';
import Papers from '../Papers/Papers';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Papers></Papers>
            <HomeProducts></HomeProducts>
            <HomeReviews></HomeReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;