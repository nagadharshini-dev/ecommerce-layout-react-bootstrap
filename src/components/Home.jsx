import React from 'react'
import products from '../products'
import {Row,Col} from "react-bootstrap"
import ProductScreen from './Screens/ProductScreen'

function Home() {
  return (
    <div>
      <h1 className='text-center mt-2'>Latest Products</h1>

      <Row>
        {products.map((product)=>(
          <Col key={product.id} sm={12} md={6} lg={4} xl={4}>


            <ProductScreen product={product}/>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Home
