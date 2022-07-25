import logo from './logo.svg';
import './App.css';
import Users from './Components/Users/users';
import LoginForm from './Components/LoginForm/loginForm';
import React from 'react';


class App extends React.Component{
  constructor(){
    super();
    this.state = {isLoaggedIn:false}
  }

  onLoginSuccessful(){
   
    //authenticate

    setTimeout(()=>{
        this.setState({isLoaggedIn:true})
    })

  }

  render(){

    return (
      <div className="App">
       {
        (this.state.isLoaggedIn)?<Users/>:<LoginForm onLoginSuccessful = {this.onLoginSuccessful.bind(this)}/>
       }
       
  
      </div>
    );

  }
}

export default App;
