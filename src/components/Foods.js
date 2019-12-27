import React,{useState,useEffect} from 'react';
import Navigation from './Navigation';
import {Link} from 'react-router-dom';


export default function Foods({match}) {
    useEffect(() => {
        fetchItems();
    },[]);
    const [food_items,setFoods] = useState([]);
   
    
    const fetchItems = async () =>{
        
        const foods = await fetch('http://127.0.0.1:8000/api/foods/'+match.params.food_category);
        const food_items = await foods.json();
        setFoods(food_items);        
        // console.log(food_items);
        // console.log(match);
    
    }
   
    
    return (
        <div>
            <Navigation/>
            <h3 className="text-center text-light">Foods</h3>
            {food_items.map(item =>(
                <div className="ml-5 mt-2 mb-1 bg-light col-md-7 col-sm-10"  key={item.id} >
                    <div className="row">
                        <div className="col-md-2 col-sm-2 justify-content-center">
                            <img className="col-md-7 col-sm-8 mt-md-1 mt-sm-3 mb-1 pr-0 ml-4"src={item.food_image}></img>
                        </div>
                        <div className="col-md-6 col-sm-6 m-0 p-0">
                            <p className="mt-3">{item.food_name}</p>
                        </div>
                        <div className="col-md-2 col-sm-2  m-0 p-0">
                            <p className="mt-3">{item.price}</p>
                        </div>
                        <div className="col-md-2 col-sm-2 m-0 p-0">
                             <div className="col-md-11 mt-2">
                            <Link to={{
                                pathname:'/order',
                                state:{item}   
                            }}>
                               <button  className="btn-primary form-control">order</button>
                            </Link>
                            </div> 
                           
                        </div>
                    </div>
                                
                
                </div>
            ))}
            
        </div>
    )
    console.log(this.props.location.state)

}
