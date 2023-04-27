import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import BenefitsAccordian from '../BenefitsAccordian/BenefitsAccordian';

function LandingPage() {


  return (
    <center>
      <h1>Discover the unique Native Plants of Minnesota</h1>
      <h2>We live in interrelation with resilient, highly adapted Ecosystems</h2>
      <h3>Imagine if we embraced our Regional Ecology</h3>

      <BenefitsAccordian />

      <h3>I set out to provide regional and ecosystem specific Native Plant recommendations based on your environment</h3>
      <div className='information'>
        <p>I was disappointed to find out that information is not accessible. </p>
        <p>The lack of cataloged or publicly accessible information on plants native to our regions and ecosystems reinforces that we are deeply disconnected from our environmetns. </p>
      </div>
      <h3>In lieu of actionable data, please consider this experience</h3>
      <h2>A Meditation on Harmony between Humanity and the Environment</h2>
    </center >
  );
}

export default LandingPage;
