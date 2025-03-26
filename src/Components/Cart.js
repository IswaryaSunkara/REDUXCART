import { useSelector } from "react-redux";
import { Card,Button } from "react-bootstrap";
const Cart=()=>{
    const productCard=useSelector(state=>state.Cart);
        const cards=productCard.map(product => (
            <div className="col-md-12" style={{marginBottom:"10px"}}> 
                <Card key={product.id} className='h-100'>
                  <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{width:"100px",height:"130px"}} />
                  </div>
                  <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    INR:{product.price}
                  </Card.Text>
                 </Card.Body>
                 <cardsFooter>
                    <Button variant="primary">Add To Cart</Button>
                 </cardsFooter>
                </Card>
            </div>
        ))
    
    return(
        <div className="row">
            {cards}
        </div>
    );
}
export default Cart;