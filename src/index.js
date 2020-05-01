import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';




class App extends React.Component{
 

  state = { lat:"", errMessage: ""}

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position =>  this.setState({lat:position.coords.latitude}),
      error => this.setState({errMessage:error.messge})
    )
  }
  
  render() {
    
    if (this.state.errMessage && !this.state.lat){
      return <div>{this.state.errMessage}</div>
    }

    if (this.state.lat && !this.state.errMessage){
      return <div>{this.state.lat}</div>
    }

    return <div>loading</div>
    
  };
};



ReactDOM.render (<App />, document.getElementById('root'));




