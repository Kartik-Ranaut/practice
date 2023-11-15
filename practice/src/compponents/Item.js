// component naming should bee such that first name of letter should be capital
import './Item.css'
import React, {useState} from 'react'

function Item(props){
    
    const [title,setfun]= useState(props.title);
    function clickHandler(){
        console.log(title+"Added to cart");
        setfun('Ramdev')
    }
    const itemName=props.itemName;
    return(
        <div className='item'>
            <div className='date'>
                <div>{props.month}</div>
                <div>{props.year}</div>   
                <div>{props.date}</div>
            </div>
            <div className='title'>
                {title}   
                <button onClick={clickHandler}>Add To Cart</button>
            </div>
        </div>
    );
}

export default Item;