import React, { Component } from 'react';
import World from './components/World';
import Battle from './components/Battle';

class App extends Component {
  state = {
    isBattling: false,
  };

  battleUpdate = () => {
    this.setState({isBattling: !this.state.isBattling});
  }

  render() {
    if (this.state.isBattling){
      return(
        <Battle endBattle={this.battleUpdate}/>
      );
    }
    return (
      <World startBattle={this.battleUpdate}/>
    );
  }
}

export default App;