// import  {useState} from 'react';


// function MyComponent(){
  
//     const [name, setName] = useState("Guest");
//     const [age, setAge] = useState(0);
//     const [isEmployed, setIsEmployed] = useState(false);


//     const updateName = () => {
//         // name = "Diloram";
//         // console.log(name);
//         setName("Diloramkhan");

//     }


//     const incrementAge = () => {
//         setAge(age + 1);
//     }

//     const toggleEmployedStatus = () => {
//         setIsEmployed(!isEmployed);
//     }
  
//     return(<>
//     <p>Name: {name}</p>
//     <button onClick={updateName}>Set Name</button>

//     <p>Age: {age}</p>
//     <button onClick={incrementAge}>Increment Age</button>

//     <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
//     <button onClick={toggleEmployedStatus}>Toggle Status</button>
//     </>)
// }

// export default MyComponent
////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////



// onChange = event handler used primarly with form elements
//            ex. <input>, <textarea>, <select>,<radio>
//           Triggers a function every time the value of the input changes
//


import { useState } from "react";


function MyComponent(){

    // const [name, setName] = useState("");
    ////////////////////////////////////////////////
    const [name, setName] = useState("Guest");
    const [quantity,setQuantity] = useState(1);
    const [comment,setComment] = useState("");
    const [payment, setPayment] =useState("");
    const [shipping, setShipping] = useState("");
    
           
    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

        return(<div>
                   
                   <input value={name} onChange={handleNameChange}/>
                   <p>Name: {name}</p>

                   <input value={quantity} onChange={handleQuantityChange} type="number"/>
                   <p>Quantity:{quantity}</p>

                   <textarea value={comment} onChange={handleCommentChange}
                   placeholder="Enter delivery instructions"/>
                   <p>Comment: {comment}</p>

                   <select value={payment} onChange={handlePaymentChange}>
                        <option value="">Select an option</option>
                        <option value="Visa"> Visa</option>
                        <option value="MasterCard">MasterCard</option>
                        <option value="GiftCard">GiftCard</option>
                   </select>
                   <p>Payment: {payment}</p>

                   <label>
                    <input type="radio" value="Pick Up"
                           checked={shipping === "Pick Up"}
                           onChange={handleShippingChange} />
                    Pick up
                   </label>
                   <label>
                   <input type="radio" value="Delivery"
                           checked={shipping === "Delivery"}
                           onChange={handleShippingChange} />
                    Delivery
                   </label>
                   <p>Shipping:{shipping}</p>
    
               </div>);

}
export default MyComponent