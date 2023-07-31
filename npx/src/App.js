import { Component } from 'react';
import Mycars from './components/Mycars';

import './App.css';

class App extends Component {

  state = {
    titre: 'Mon catalogue Voitures ',
    color: 'green',
    cars: ["Ford", "Mercedes", "Peugeot"]
  }

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre} mb={this.state.color} car={this.state.cars} />
      </div>
    );
  }

}

export default App;
