import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMain: ''
    };
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
  }
  
  onInputChangeHandler(e) {
    console.log('works', e.target.value);
    this.setState({
      inputMain: e.target.value
    })
  }

  render() {
     return (
    <div className="App">
        <Header />
        <Main onInputChange={this.onInputChangeHandler}
        inputOutputInMain={this.state.inputMain}
        />
        <Footer />
    </div>
  );
  }
}

export default App;
