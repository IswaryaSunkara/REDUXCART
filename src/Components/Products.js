import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Product = () => {
  const [products, getProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/Products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  console.log({ products },typeof products, Object.entries(products));

  const addtocart = (product) => {
    dispatch(add(product));
  };
  const cards =
    products &&
    products.map((product) => (
      <div className="col-md-3" style={{ marginBottom: "10px" }}>
        <Card key={product.id} className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR:{product.price}</Card.Text>
          </Card.Body>
          <cardsFooter>
            <Button variant="primary" onClick={() => addtocart(product)}>
              Add To Cart
            </Button>
          </cardsFooter>
        </Card>
      </div>
    ));
  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};
export default Product;
