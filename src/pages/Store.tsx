import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/data.json"
import {useEffect, useState} from "react";

type MyItem = {
    "name": string,
    "category": string,
    "description": string,
    "price": number,
    "id": number
}
export function Store() {
    const [myItems, setMyItems] = useState<MyItem[]>([]);
    useEffect(() => {
        const storedData = localStorage.getItem("MyStore");
        const getItems: MyItem[] = storedData ? JSON.parse(storedData) : [];

        if (getItems.length === 0) {
            setMyItems(storeItems);
            localStorage.setItem("MyStore", JSON.stringify(storeItems));
        } else {
            setMyItems(getItems);
        }
        console.log(getItems);
    }, []);

  return (
    <>
      <Row md={1} xs={1} lg={1} className="g-3">
          {myItems.map(item => (
              <Col key={item.id}>
                  <StoreItem {...item} />
                  </Col>
          ))}
      </Row>
    </>
  )
}
