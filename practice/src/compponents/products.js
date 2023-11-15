import Item from "./Item";
import Card from "./card";

const Products =(props)=>{
    return (
        <Card>
            <Item 
                title={props.items[0].itemName}
                date={props.items[0].date} 
                month={props.items[0].month}
                year={props.items[0].year}>
            </Item>
            <Item 
                title={props.items[1].itemName}
                date={props.items[1].date} 
                month={props.items[1].month}
                year={props.items[1].year}>
            </Item>
            <Item 
                title={props.items[2].itemName}
                date={props.items[2].date} 
                month={props.items[2].month}
                year={props.items[2].year}>
            </Item>
        </Card>
    )
}

export default Products;