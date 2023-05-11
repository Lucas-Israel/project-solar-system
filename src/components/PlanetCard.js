import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div
        data-testid="planet-card"
        className="d-flex flex-column"
      >
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          style={ { maxHeight: 100 } }
        />
        <p data-testid="planet-name" className="align-self-center">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
