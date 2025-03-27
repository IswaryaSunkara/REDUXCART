import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="container">
      <div className="row">
        {cartItems.length > 0 ? (
          cartItems.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
              <Card className="h-100">
                <div className="text-center">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ width: "100px", height: "130px" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>INR: {product.price}</Card.Text>
                  <Card.Text>Quantity: {product.quantity}</Card.Text> {/* Show quantity */}
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button variant="danger" onClick={() => removeFromCart(product.id)}>
                    Remove Item
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          ))
        ) : (
          <h3 className="text-center mt-4">Your cart is empty</h3>
        )}
      </div>
    </div>
  );
};

export default Cart;
