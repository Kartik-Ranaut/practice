import Form from './Form.js'
import './NewProducts.css'
function NewProducts(props){
    function incobj(obj){
        props.objfun(obj)
    }
    return (
        <div>
            <Form objfun={incobj}></Form>
        </div>
    )
}

export default NewProducts;