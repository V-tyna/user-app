import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMain: '',
      users: []
    };
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
  }

   async componentDidMount() {
    const response = await fetch('http://localhost:4200/users');
    const data = await response.json();
    this.setState({
      users: data
    })
  }
  
  onInputChangeHandler(e) {
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
        usersList={this.state.users}
        />
        <Footer />
    </div>
  );
  }
}

export default App;
