import React, { Component } from 'react';
import {Forms} from 'react-bootstrap'; 
import { Firebase } from './firebase';

class Form extends Component {
    state = {
        town: '',
        supermarket: '',
        item: '',
        price: '',
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            town: '',
            supermarket: '',
            item: '',
            price: '',
        })
    }

  render() {
    return (
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="selectTown">Town</label>
                <select id="town" class="form-control" value={this.state.town} onChange={e => this.setState({ town: e.target.value})}>
                    <option selected>Choose...</option>
                    <option>Nakuru</option>
                    <option>Nairobi</option>
                    <option>Naivasha</option>
                    <option>Mombasa</option>
                    <option>Kisumu</option>
                </select>
                </div>
                <div class="form-group col-md-6">
                <label for="selectSupermarket">Supermarket</label>
                <select id="supermarket" class="form-control" value={this.state.supermarket} onChange={e => this.setState({ supermarket: e.target.value})}>
                    <option selected>Choose...</option>
                    <option>Naivas</option>
                    <option>Tuskys</option>
                    <option>Nakumatt</option>
                    <option>Uchumi</option>
                </select>                
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="selectItem">Item</label>
                <select id="item" class="form-control" value={this.state.item} onChange={e => this.setState({ item: e.target.value})}>
                    <option selected>Choose...</option>
                    <option>Rice</option>
                    <option>Bread</option>
                    <option>Sugar</option>
                    <option>Milk</option>
                    <option>Soap</option>
                </select>                  
                </div>
                <div class="form-group col-md-3">
                <label for="labelPrice">Price</label>
                <input type="text" class="form-control" id="inputPrice" value={this.state.price} onChange={e => this.setState({ price: e.target.value})}></input>
                </div>
            </div>
            <button type="submit" class="btn btn-primary" onClick={e => this.onSubmit(e)} >Submit</button>
            </form>
    );
  }
}



export default Form;
