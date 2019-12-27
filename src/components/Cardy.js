import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function Cardy({match}) {
    useEffect(() => {
                    fetchItems();
                },[]);
                const [food_items,setFoods] = useState([]);
                
                const fetchItems = async () =>{
                    
                    const foods = await fetch("http://127.0.0.1:8000/api/categories/");
                    const food_items = await foods.json();
                    setFoods(food_items);        
                    console.log(food_items);
                    console.log(match);
                   
                
                }
                
                return( 
                    <div>
                        <h2 className="text-center text-light mt-5 mb-5">Alchinsky Hotel</h2>

                        <CardGroup>
                        {food_items.map((food) =>(
                            <div className="col-md-4" key={food.id}>
                                
                                <Card className=" bg-transparent border-0">
                                <Link to={'foods/'+food.id}>
                                <Card.Img src={food.category_image} style={{height:"15rem"}}/>
                                </Link>
                        
                                 <Card.Body className="text-center">
                                     <Card.Title className="text-light" >{food.category_name}</Card.Title>
                                 </Card.Body>
                                </Card>
                                
                            
                            </div>
                           
        
                        )
                        )
                        }
                         </CardGroup>
                         </div>
                )}
                    
              
                