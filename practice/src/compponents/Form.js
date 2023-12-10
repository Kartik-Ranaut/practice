import { useState } from "react";

function Form(){
    const [title,setTitle]= useState("");
    const [date,setDate]= useState("");

    function titlechangehandler(event){
        setTitle(event.target.value);
    }
    function dateChangehandle(event){
        setDate(event.target.value);
    }
    return(
        <form >
            <div className='new-product_controls'>
                <div className='new-product_control'>
                    <label>Title</label>
                    <input type='text' onChange={titlechangehandler}></input>
                </div>
                <div className='new-product_control'>
                    <label>Date</label>
                    <input type='date' onChange={dateChangehandle} min='2023-01-01' max='2023-12-12'></input>
                </div>
                <div className='new-product_button'>
                    <button type='submit'>Add Product</button>
                </div>
            </div>

    </form>
    );
}

export default Form;