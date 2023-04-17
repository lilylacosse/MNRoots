import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>MNRoots is an application that helps Minnesota residents determine which local native plants are best for the environment they live in based on the plant hardiness zone and ecosystem of their area. Users are served a list of plants that are appropriate for the conditions they select. They can then save the plants they find aesthetically pleasing or offer benefits they desire; for example, deep roots for soil conservation or attracting certain pollinators. </p>
      </div>
    </div>
  );
}

export default AboutPage;
