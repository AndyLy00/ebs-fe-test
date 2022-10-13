import {Button, Stack} from "react-bootstrap"
import {useShoppingCart} from "../context/ShoppingCartContext"
import storeItems from "../data/data.json"
import {formatCurrency} from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}


export function CartItem({id, quantity}: CartItemProps) {
    const {
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={3} className="d-flex align-items-center">
            <div className="me-auto">
                <div>
                    {item.name}{" "}
                    {quantity > 1 && (
                        <span className="text-muted" style={{fontSize: ".65rem"}}>
              x{quantity}
            </span>
                    )}
                    <div className="text-muted" style={{fontSize: ".75rem"}}>
                        {formatCurrency(item.price)}
                    </div>
                </div>
            </div>

            <div
                className="d-flex align-items-center flex-column"
                style={{gap: ".5rem"}}
            >
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{gap: ".5rem"}}
                >
                    <Button className="btn-info btn-sm" onClick={() => decreaseCartQuantity(id)}>-</Button>
                    <div>
                        <span className="fs-5">{quantity}</span>
                    </div>
                    <Button className="btn-info btn-sm" onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
            </div>
            <div> {formatCurrency(item.price * quantity)}</div>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(item.id)}
            >
                &times;
            </Button>
        </Stack>
    )
}

