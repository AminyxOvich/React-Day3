import React, {useState} from 'react'

function MyComponent(){
    const [name,setName] = useState("Guest");
    const [quantity,setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment,setPayment] = useState("");
    const [shipping,setShipping] = useState("Delivery");

    function handleNameChange(e){
        setName(e.target.value);
    }
    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }
    function handleCommentChange(e){
        setComment(e.target.value)
    }
    function handlePaymentChange(e){
        setPayment(e.target.value)
    }
    function handleShippingChange(e){
        setShipping(e.target.value)
    }
    return (
        <div className='Component-container'>
            <input value={name} onChange={handleNameChange}/>
            <p><label>Name:</label> {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p><label>quantity:</label> {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange}
            placeholder="enter delivery instructions"/>
            <p><label>Comment:</label> {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="" defaultChecked>Select an option</option>
                <option value="visa">Visa</option>
                <option value="mastercard">MasterCard</option>
                <option value="giftcard">GiftCard</option>
            </select>
            <p><label>Selected:</label> {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"}
                     onChange={handleShippingChange}/>
                Pick Up
            </label><br/>
            <label>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"}
                     onChange={handleShippingChange}/>
                Delivery
            </label>
            <p><label>Shipping:</label> {shipping}</p>
        </div>
    )
}

export default MyComponent;