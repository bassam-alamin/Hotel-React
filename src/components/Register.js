import React, { Component } from 'react'
import axios from 'axios'

class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             email:"",
             password:""
        }
    }
    changehandler = e =>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault();
        console.log(this.state);
        axios.post('http://127.0.0.1:8000/api/users',this.state)
        .then(response =>{
            console.log(response);
            alert("Succesfully posted")
        })
        .catch(error =>{
            alert("error occured couldnt post")
        })

    }
    render() {
        const {username,email,password} = this.state
        return (
                <div>
            <h2 className="text-center text-light mt-5 mb-5">Alchinsky Hotel</h2>
            <div className="row">
                <div className="col-md-4"></div>
            <div className="col-md-4">
                <h3 className="text-center m-2 text-light">Register.</h3>
                <form onSubmit={this.submitHandler}>
                    <div className="mb-2">
                        <input 
                        name="username"
                         type="text"
                         placeholder="Enter username..."
                          className="form-control"
                          value={username}
                          onChange = {this.changehandler}

                          ></input>
                    </div>
                    <div className="mb-2">
                    <input name="email"
                     type="email"
                      placeholder="Enter email..."
                       className="form-control"
                       value={email}
                       onChange = {this.changehandler}

                       ></input>
                    </div>
                    <div className="mb-2">
                    <input name="password"
                     type="password"
                      placeholder="Enter password.."
                       className="form-control"
                       value={password}
                       onChange = {this.changehandler}

                       ></input>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                        <input type="submit" className="btn btn-primary form-control mb-5" value="Register"></input>

                        </div>
                        <div className="col-md-4"></div>
                    </div>

                </form>
            </div>
            <div className="col-md-4"></div>
                
            </div>

        </div>
        )
    }
}
export default Register