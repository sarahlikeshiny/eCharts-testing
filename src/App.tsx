import * as React from 'react';
import './App.css';
import { DemoChart } from './components/demoChart';
import { BarChart } from './components/barchart/barchart.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">eCharts Demo</h1>
        </header>
        <DemoChart />
        <BarChart />
      </div>
    );
  }
}

export default App;
