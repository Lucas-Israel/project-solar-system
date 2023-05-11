import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2
        className="border d-flex justify-content-center rounded-3 m-5 p-3
        bg-black bg-opacity-50"
      >
        {headline}
      </h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
