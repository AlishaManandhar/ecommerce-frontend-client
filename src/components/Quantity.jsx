import { useState, useEffect } from "react"

function Quantity(props)
{
    const {quantity, onChange, productId,id} = props
    const [count, setCount] = useState(quantity)

    
    const handleQuantityChange = async (type) => {
        let temp = count
        if (type === "-") {
            temp = temp -1
            setCount(temp)
            await onChange(id,temp,productId)
            
            
        }
        else {
            temp = temp + 1
            setCount(temp)
            await onChange(id,temp,productId)
            
        }
        
       
    }
    return (
        <div className="quantity-btn">
        <button className="decrement-btn" disabled={count <= 1} onClick={() => handleQuantityChange("-")}>-</button>
        <span>{count}</span>
        <button className="increment-btn" onClick={() => handleQuantityChange("+")}>+</button>
    </div>
    )
}

export default Quantity