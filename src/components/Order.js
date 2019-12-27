import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardGroup} from 'react-bootstrap';
import Navigation from './Navigation';



export default function Order({match,location}) {
    useEffect(() => {
        
    },[]);
    
    const [food_items,setFoods] = useState([]);
    const { item } = location.state ;
     var object = {
        food:item.food_name,
        quantity:0,
        price:item.price
   }
   function changehandler(e){
    object = {food:item.food_name,[e.target.name]:parseInt(e.target.value),price:item.price};
}
    function place_order() {
        var oldItems = JSON.parse(localStorage.getItem('itemStored')) || [];
        
        
        oldItems.push(object)
        
        localStorage.setItem('itemStored', JSON.stringify(oldItems));
        console.log("already there")
        alert("already stored");
        

      }
      const {food,quantity,price} = object

    return (
        <div>
            <Navigation />
            <div className="ml-5 mt-2 mb-1 col-md-7 col-sm-10">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-5 bg-light">
                        <form>
                            <div>
                                <label for="food">food</label>
                                <input id="food" className="form-control" type="text" disabled value={item.food_name} ></input>
                            </div>
                            <div>
                                <label for="quantity">quantity</label>
                                <input id="quantity" type="number" className="form-control" name="quantity" onChange = {changehandler}></input>
                            </div>
                            <div>
                                <label for="price">price</label>
                                <input className="form-control" id="price" value={item.price} disabled></input>
                            </div>
                            <div className="mt-1 mb-1">
                                <input type="submit" onClick={place_order} className="btn btn-success" value="order"></input> 
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4"></div>


                </div>
            </div>


        </div>
    )
}
