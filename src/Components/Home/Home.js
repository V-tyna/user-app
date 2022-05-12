import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

class Home extends React.Component {
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
    });
  }
  
  onInputChangeHandler(e) {
    this.setState({
      inputMain: e.target.value
    });
  }

  render() {
     return (
        <div className="Home">
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

export default Home;
