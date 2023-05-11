import React from 'react';
import Title from './Title';
import PlanetCardRender from './PlanetCardRender';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>
          <PlanetCardRender />
        </div>
      </div>
    );
  }
}

export default SolarSystem;
