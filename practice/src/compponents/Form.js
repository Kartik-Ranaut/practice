function Form(){
    function titlechangehandler(event){
        console.log(event.target.value);
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
                    <input type='date'  min='2023-01-01' max='2023-12-12'></input>
                </div>
                <div className='new-product_button'>
                    <button type='submit'>Add Product</button>
                </div>
            </div>

    </form>
    );
}

export default Form;