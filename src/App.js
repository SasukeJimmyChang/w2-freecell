import React from 'react';
import './App.css';
import Main from './screens/Main/index';
import { ThemeProvider } from 'styled-components';

const DarkTheme = {
  name: 'DarkTheme',
  backgroundColor: '#282c34',
  fontColor: 'white',
  borderColor: 'rgba(255,255,255,0.5)',
  primaryColor: '#3FC7FA',
  primaryColorLight: '#5FAAFF',
  primaryColorDark: '#5FAAFF',
  secondaryColor: '#34c5dc',
  secondaryColorLight: '#60ecec',
  secondaryColorDark: '#1992ad'
};
const LightTheme = {
  name: 'LightTheme',
  backgroundColor: '#f3f1ee',
  fontColor: '#1d1f23',
  borderColor: 'rgba(200,129,0,0.1)',
  primaryColor: '#FFA20F',
  primaryColorLight: '#fbb941',
  primaryColorDark: '#fb910d',
  secondaryColor: '#34c5dc',
  secondaryColorLight: '#60ecec',
  secondaryColorDark: '#1992ad'
};

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      theme: DarkTheme
    };
  }
  onChangeTheme = item => {
    switch (item) {
      case 'DarkTheme':
        return this.setState({ theme: DarkTheme });
      case 'LightTheme':
        return this.setState({ theme: LightTheme });
      default:
        return this.setState({ theme: DarkTheme });
    }
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme} >
        <Main onChangeTheme={this.onChangeTheme} theme={this.state.theme.name} />
      </ThemeProvider>
    );
  }
}

export default App;
