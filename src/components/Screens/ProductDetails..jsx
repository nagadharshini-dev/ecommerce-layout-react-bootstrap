import React from "react";
import products from "../../products";
import { useParams, Link } from "react-router-dom";
import {Row,Col,Image,ListGroup,Button,Card,ListGroupItem} from "react-bootstrap";

function ProductDetails({ match }) {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);
  
  return (
    <>
      <div>
        <Link to="/" className="btn btn-dark my-3">
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>{product.name}</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>
                  Rating : {product.rating} |No. of reviews {product.numReviews}
                </h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Description : {product.description}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>Price : {product.price}</h3>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card className="p-3">
              <ListGroup variant="flush">
                <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                <Row>
                  <Col>Category</Col>
                  <Col>{product.category}</Col>
                </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                <Row>
                  <Col>Brand</Col>
                  <Col>{product.brand}</Col>
                </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                <Row>
                  <Col>
                  
                  <Button className="btn-block" disabled={product.countInStock==0} type='button'>
                    Add To Card
                    </Button>
                  
                  </Col>
                  
                </Row>
                </ListGroup.Item>
              </ListGroup>
              
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}


export default ProductDetails;
