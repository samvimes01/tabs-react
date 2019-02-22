import React, { Component } from 'react';
import Tabs from './Tabs';
import Tab from './Tab';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          Tabs advanced with react.
        </header>
        
        <main className="app-main">

          <Tabs 
            onTabSelected={(data) => {
              console.log(data.title, data.text);
            }}
          >
            <Tab title="London">London is the capital city of England.</Tab>
            <Tab title="Paris">Paris is the capital of France.</Tab>
            <Tab title="Tokyo">Tokyo is the capital of Japan.</Tab>
          </Tabs>
          
          <Tabs>
            <Tab title="Tab 1">Some text 1</Tab>
            <Tab title="Tab 2">Some text 2</Tab>
            <Tab title="Tab 3">Some text 3</Tab>
          </Tabs>

        </main> 

      </div>
    );
  }
}

export default App;
