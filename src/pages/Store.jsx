import { Row, Col } from "react-bootstrap"
import { productsArray } from "../products_store"
import Product_Card from "../components/Product_Card"

const Store = () => {
  return (
    <>
      <h1 align="center" className="p-3">Welcome to the store!</h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, index) => (
          <Col align="center" key={index}>
            {/* <h1>{product.title}</h1> */}
            <Product_Card product={product}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Store