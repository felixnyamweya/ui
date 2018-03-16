import React, { Component } from 'react';
import firebase from './components/firebase';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Header from './components/Header';
import Cta from './components/Cta';

class App extends Component {
  render() {
    return (
      
      <div>  
        <Header />
      <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                  </div>
                    <Title />
                  </div>
                  <div className="col-xs-7 form-container">
                    <Form />
                  <div className="col-xs-7 form-container">
                      <Cta />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
