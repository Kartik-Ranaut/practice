// component naming should bee such that first name of letter should be capital
import './Item.css'
import React, {useState} from 'react'

function Item(props){
    
    let [title,setfun]= useState(props.title);
    const title1=props.title;
    let i=0;
    function clickHandler(){
        console.log(i);
        console.log(title+"Added to cart");
        if (i%2==0){
            i++;
            setfun('Ramdev');  
        }
       else{
        i++;
        setfun(title1);
       }
       
    }
    
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