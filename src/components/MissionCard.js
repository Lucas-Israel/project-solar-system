import React from 'react';
import PropTypes from 'prop-types';

class MissionsCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div
        data-testid="mission-card"
        className="card text-white bg-black mb-3 bg-opacity-50 border-light m-3"
        style={ { maxWidth: '18rem', minWidth: '18rem' } }
      >
        <h6
          data-testid="mission-name"
          className="card-header bg-transparent border-light"
        >
          { name }

        </h6>
        <div className="card-body">
          <p data-testid="mission-year" className="card-text">{ year }</p>
          <p data-testid="mission-country" className="card-text">{ country }</p>
          <p data-testid="mission-destination" className="card-text">
            { destination }
          </p>
        </div>

      </div>
    );
  }
}

MissionsCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionsCard;
