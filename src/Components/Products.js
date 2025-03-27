import { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log({ products }, typeof products, Object.entries(products));

  const addtocart = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="container">
        <div className="row">
          {products &&
            products.map((product) => (
              <div
                key={product.id}
                className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3"
              >
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
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Button variant="primary" onClick={() => addtocart(product)}>
                      Add To Cart
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Product;
