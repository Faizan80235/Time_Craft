import React from 'react';
import '../Styles/style.css'; // Optional: for custom styling
import AboutSection from '../Components/AboutSection';
import OurFeatures from '../Components/OurFeatures';
import Headers from "../Components/Header"
import Footer from "../Components/Footer"
const About = () => {
  return (
    <div>
      <AboutSection>
      </AboutSection>
      <OurFeatures></OurFeatures>
      <Footer></Footer>
    </div>
  );
};

export default About;
