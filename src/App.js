import './App.css';
import Main from './components/MainComponent';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
