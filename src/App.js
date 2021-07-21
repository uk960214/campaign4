import './App.css';
import React, { Component } from 'react';
import FrontPage from './components/FrontPage/FrontPage';
import NameInput from './components/NameInput/NameInput';
import ColorInput from './components/ColorInput/ColorInput';
import Result from './components/Result/Result';
import EmailCollect from './components/EmailCollect/EmailCollect';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: '',
      colors: ['#b6f4f4', '#d2f3f2', '#ffffff'],
      route: 'start',
    }
  }
  onNameChange = (event) => {
    this.setState({nameInput: event.target.value});
  }

  onColorChange = (event) => {
    let key = event.target.name * 1;
    let val = event.target.value;
    this.setState((state) => {
      let colors = state.colors.map((x, i) => {
        if (key === i) {
          return val;
        } else {
          return x;
        }
      });
      return { colors, };
    })
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
        { this.state.route === 'start' 
          ? <FrontPage onRouteChange={this.onRouteChange} />
          : this.state.route === 'name'
          ? <NameInput onNameChange={this.onNameChange} onRouteChange={this.onRouteChange} username={this.state.nameInput} />
          : this.state.route === 'color'
          ? <ColorInput colors={this.state.colors} onColorChange={this.onColorChange} onRouteChange={this.onRouteChange} />
          : this.state.route === 'email'
          ? <EmailCollect onRouteChange={this.onRouteChange} />
          : <Result username={this.state.nameInput} colors={this.state.colors} />
        }
      </div>
    );
  }
  
}

export default App;

