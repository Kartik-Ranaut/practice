// component naming should bee such that first name of letter should be capital
import './Item.css'

function Item(props){
    const itemName=props.itemName;
    return(
        <div className='item'>
            <div className='date'>
                <div>{props.month}</div>
                <div>{props.year}</div>   
                <div>{props.date}</div>
            </div>
            <div className='title'>
                {props.title}
            </div>
        </div>
    );
}

export default Item;