import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <div
        className="text-light d-flex justify-content-center"
      >
        <div>
          <Header />
          <SolarSystem />
          <Missions />
        </div>
      </div>
    );
  }
}

export default App;
