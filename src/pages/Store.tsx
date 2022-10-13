import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/data.json"

export function Store() {
  return (
    <>
      <Row md={1} xs={1} lg={1} className="g-3">
          {storeItems.map(item => (
              <Col key={item.id}>
                  <StoreItem {...item} />
                  </Col>
          ))}
      </Row>
    </>
  )
}
