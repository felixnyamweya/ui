import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap';

class Town extends Component {
    render() {
      return (
        <div class="container.fluid">
            <div class="row">
                <div class="px-4 mt-auto"></div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Select Town
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdonw-item" href="#">Nakuru</a>
                            <a class="dropdown-item" href="#">Nairobi</a>
                            <a class="dropdown-item" href="#">Narok</a>
                            <a class="dropdown-item" href="#">Machakos</a>
                            <a class="dropdown-item" href="#">Makueni</a>
                        </div>
                    </div>
            </div>
        </div>
    );
}
}

export default Town;