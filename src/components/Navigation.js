import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default class Navigation extends Component {
    constructor(){
        super();
        let orderd_foods = JSON.parse(localStorage.getItem('itemStored'));
        var total = 0;
        this.state = {
            orderd_foods: orderd_foods,
            total :total
        };

        
        if (orderd_foods != null){
        orderd_foods.forEach(element => {
            var sum = element.price * element.quantity;
            this.state.total = total + sum;
            
            
        });
        
        
    }
    if (this.state.orderd_foods == null){
        this.state.orderd_foods = [];
    }
        console.log(total);

      }
    
    render() {
     const float = {
         float:"right",
         
     }   
        return (
            <div>
            <div className="bg-primary">
                <Navbar className="Navbar bg-transparent justify-content-center">
                        <h3 className="text-light">Alchinsky</h3>
                        <h4><a href="#" className="text-light m-3">Login</a></h4>
                        <Link to="register">
                        <h4 className="text-light">Register</h4>
                        </Link>
                        
                        
                </Navbar>
            </div>
        
            <div className="col-md-4 bg-light" style={float}>
                <p className="text-center">Your order</p>
                <table className="table text-center w-100">
                    <thead>
                        <th>food</th>
                        <th>quantity</th>
                        <th>price</th>
                        <th>delete</th>
                    </thead>
                    {
                        this.state.orderd_foods.map(item =>(
                    <tr>
                        <td>{item.food}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td><a href="#" className="text-danger">remove</a></td>
                    </tr>
                        
                    )
                     

                    )}
                </table>
                <div className="col-md-5 mb-2" style={float}>
                    <input className="form-control text-center " type="text" value={this.state.total} readOnly></input>
                </div>
                <div className="col-md-12 mb-1">
                    <a type="submit" className="btn form-control btn-primary">Submit Order</a>
                </div>

            </div>

            </div>
        )
    }
}
