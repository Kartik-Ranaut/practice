// component naming should bee such that first name of letter should be capital
import './Item.css'

function Item(props){
    const itemName=props.itemName;
    return(
        <div>
            <p className="nirma">{itemName}</p>
            {props.children}
        </div>
    );
}

export default Item;