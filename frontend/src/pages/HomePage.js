import React from 'react'
import "../assets/css/style.css";
import "../assets/css/bulk-style.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css/animate.min.css';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from '../components/Header'
import Loader from '../components/Loader'

const HomePage = () => {
  return (
    <div>
      {/* <Loader /> */}
      <Header />
    </div>
  )
}

export default HomePage