import React from 'react';
import { Box , Container, Image , Text } from "@chakra-ui/react"
import Homeimg from "../image/btc.png" 
import { motion } from "framer-motion";
import Footer from './Footer';
import ScrollToTop from '../Homecomponents/ScrollToTop';
import Navbar from '../Homecomponents/Navbar';
import DailyPrices from '../Homecomponents/DailyPrices';
import AboutUs from '../Homecomponents/AboutUs';
import Services from '../Homecomponents/Services';
import SignUp from '../Homecomponents/SignUp';
import Roadmap from '../Homecomponents/Roadmap';
import Newsletter from '../Homecomponents/Newsletter';
import Homesection from '../Homecomponents/HomeSection';

// import Main from "../HomeComponent/Main"



const Home = () => {
    return (
        <>
             
             <ScrollToTop />
      <Navbar />
      <Homesection />
      <DailyPrices />
      <AboutUs />
      <Services />
      <SignUp />
      <Roadmap />
      <Newsletter />
      {/* <Footer /> */}

          

    </>
    );
};

export default Home;