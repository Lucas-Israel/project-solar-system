import React from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class PlanetCardRender extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center flex-wrap">
        {planets.map(({ name, image }) => (<PlanetCard
          key={ name }
          planetName={ name }
          planetImage={ image }
        />))}
      </div>
    );
  }
}

export default PlanetCardRender;
