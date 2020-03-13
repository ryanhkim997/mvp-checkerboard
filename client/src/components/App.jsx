import React from 'react';
import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home'
    }
  }

  render() {
    return (
      <div>
        {this.state.view === 'home' 
        ?
        <div>
          Hello! Wanna play checkers?
          <form>
            <input onClick={() => this.setState({ view: 'board'})} name="yes" type="button" value="yes"></input>
            <input onClick={() => alert("Sorry, you can't choose that option!")} name="no" type="button" value="no"></input>
          </form>
        </div>
        :
        <Board view={this.state.view}/>
        }

      </div>
    );
  }
}
export default App;