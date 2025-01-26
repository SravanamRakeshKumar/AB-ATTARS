import React from "react";
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import FooterComponent from "./FooterComponent";
import axios from "axios";
import './OrderPageStyles.css'

function OrderPage()
{
    const location=useLocation();

    const [pname,setPname]=useState("");
    const [product, setProduct] = useState([]);
    const [quantity,setQuantity]=useState(0);
    const [price,setPrice]=useState(0);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [cnumber,setCnumber]=useState("");
    const [state,setState]=useState("");
    const [city,setCity]=useState("");
    const [vors,setVors]=useState("");
    const [pin,setPin]=useState("");
    const [opoint,setOpoint]=useState("");


    useEffect(() => {
          setProduct([location.state.item]);
           setQuantity(1);
           setPname(location.state.name)
           setPrice(50);
  }, [location.state]);

  const Submit = () =>
  {
    axios.post(`${process.env.REACT_APP_API_URL}mail`,{name,email,cnumber,state,city,vors,pin,opoint,pname,quantity,price})
     .then(response =>{
      alert(response.data.message); 
   })
    .catch(err =>alert("Failed to send order email. Please try again."));
  }


    return(
      <>
      <h1>Order Page</h1>
        <div id="main">
          <form>
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter your Name"></input>
        <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter your Email"></input>
        <input type="text" value={cnumber} onChange={(event)=>setCnumber(event.target.value)} placeholder="Enter your Contact Number"></input>
        <input type="text" value={state} onChange={(event)=>setState(event.target.value)} placeholder="Enter your State Name"></input>
        <input type="text" value={city} onChange={(event)=>setCity(event.target.value)} placeholder="Enter your City Name"></input>
        <input type="text" value={vors} onChange={(event)=>setVors(event.target.value)} placeholder="Enter your village/street Name"></input>
        <input type="text" value={pin} onChange={(event)=>setPin(event.target.value)} placeholder="Enter your Pin Code"></input>
        <input type="text" value={opoint} onChange={(event)=>setOpoint(event.target.value)} placeholder="Enter your Order Point"></input>
      </form>
          {product.length > 0 ? (product.map((item, ind) => 
            (
            <div id="product-details" key={ind}>
              <img src={item.item_img} alt={item.item_name} />
              <div className="line" id="line1">
                  <h2>{item.item_name}</h2>
                  <h2>&#8377;{item.item_price}</h2>
              </div>
              <div className="line" id="line2">
                   <h2>Quantity</h2>
                   <div className="line" id="in-line">
                       <button id="decrease" onClick={()=>
                       {
                        setQuantity(quantity-1);
                        setPrice(50*(quantity-1))
                       }}  disabled={quantity === 1}
                       >-</button>
                       <h2>{quantity}</h2>
                      <button id="increase" onClick={()=>
                        {
                          setQuantity(quantity+1);
                          setPrice(50*(quantity+1));
                        }}
                        >+</button>
                    </div>
              </div>
              <div className="line" id="line3">
                  <h2>Total Price</h2>
                  <h2>&#8377;{price}</h2>
              </div>
              <button id="order" onClick={Submit}>Order</button>
            </div>
            )
          )) :(<h1>loading....</h1>)}
     </div>
     <FooterComponent />
     </>
    );
}
export default OrderPage;
