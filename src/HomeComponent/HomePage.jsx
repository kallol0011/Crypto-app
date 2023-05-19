import AboutUs from "../Homecomponents/AboutUs";
import DailyPrices from "../Homecomponents/DailyPrices";
import Footer from "../Homecomponents/Footer";
import Home from "../Homecomponents/HomeSection";
import Navbar from "../Homecomponents/Navbar";
import Newsletter from "../Homecomponents/Newsletter";
import Roadmap from "../Homecomponents/Roadmap";
import ScrollToTop from "../Homecomponents/ScrollToTop";
import Services from "../Homecomponents/Services";

import SignUp from "../Homecomponents/SignUp";

export default function HomePage() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <DailyPrices />
      <AboutUs />
      <Services />
      <SignUp />
      <Roadmap />
      <Newsletter />
      <Footer />
    </div>
  );
}