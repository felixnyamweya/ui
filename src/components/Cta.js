import React, { Component } from 'react';

class Cta extends Component {
  render() {
    return (
      <div class="pt-5 pb-4">
        <div class="card text-center">
            <div class="card-body">
                <h5 class="card-title">Dashboard</h5>
                <p class="card-text">View the Dashboard to get a graphic presentation of the Prices per Supermarket per Town</p>
                <a href="/dashboard" class="btn btn-primary">Dashboard</a>
            </div>
         </div>
      </div>
    );
  }
}

export default Cta;
