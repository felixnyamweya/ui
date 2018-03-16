import React, { Component } from 'react';
import firebase from './components/firebase';
import { Switch, Route } from 'react-router-dom';
import Title from './components/Title';
import Header from './components/Header';
import Chartx from './components/chartx';
import Charty from './components/charty';
import Chartz from './components/chartz';
import Chartw from './components/chartw';


class Dashboard extends Component {
    render() {
      return (
        <div>  
        <Header />
        <div>
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div class="row">
                        <div class='col'>,
                            <Chartx />
                        </div>
                        <div class='col'>,
                            <Charty />
                        </div>
                        <div class="w-100">                    
                        <div className="container">
                        <div class="row">
                        <div class="col">,
                            <Chartw />
                        </div>
                        <div class="col">
                            <Chartz />
                        </div>
                        </div>
                        </div>
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
  
  export default Dashboard;