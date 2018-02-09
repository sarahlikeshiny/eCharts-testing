import * as React from 'react';
import './App.css';
import { Chart } from './components/chart';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">eCharts Demo</h1>
        </header>
        <Chart />
      </div>
    );
  }
}

export default App;
