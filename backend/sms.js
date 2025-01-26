const nm=require("nodemailer");
const express=require("express");
const cors=require("cors");
const items=require('./items.json');
require('dotenv').config();

const PORT=process.env.PORT || 5000;

const app=express();
app.use(express.json())
app.use(cors())


app.get('/items',(req,res)=>
{
  res.json(items);
});


var transporter=nm.createTransport(
    {
        service:"gmail",
        auth:{
           user:process.env.EMAIL,
           pass:process.env.PASSWORD
            //  user:"sravanamrakeshkumar3@gmail.com",
            // user:"ahmadbasha061@gmail.com",
            // pass:"scxwndhkqcdfgovk"
        }
    }
)
app.post("/mail",(req,res)=>
{
     const {name,email,cnumber,state,city,vors,pin,opoint,pname,quantity,price}=req.body; 
    
     if(name && email && cnumber && state && city && vors && pin && opoint && pname && quantity && price)
     {
       console.log("kamachari")

    var useroptions=
      {
        from:"ahmadbasha061@gmail.com",
        to:email,
        subject:"Your Order is Confirmed",
        html:`  <style>
      body {
       font-family: Arial, sans-serif;
        line-height: 1.6;
        text-align: center; /* Center all text */
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
      }
        #container {
        max-width: 600px;
        margin: 20px auto; /* Center horizontally */
        padding: 20px;
        background-color: #ffffff;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      h1,#wish {
        color: #333;
        text-align: center;
      }
      h3 {
        color: #555;
      }
      .details {
        margin: 10px 0;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #f9f9f9;
      }
    </style>
    <body>
    <div id="container">
      <h1>Product Details</h1>
      <div class="details">
        <p><strong>Product Name:</strong> ${pname}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Price:</strong> ${price}.Rs</p>
      </div>
      <p id="wish">Thanks For Ordered!</p>
      </div>
    </body>
  `
      }

      var owneroptions=
      {
        from:email,
        to:"ahmadbasha061@gmail.com",
        subject:"New Order",
        html:`
        <style>
        body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        text-align: center; /* Center all text */
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
      }
        #container {
        text-align:center;
        max-width: 600px;
        margin: 20px auto; /* Center horizontally */
        padding: 20px;
        background-color: #ffffff;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
        h1 {
          color: #333;
          text-align: center;
        }
        h3 {
          color: #555;
        }
        .details {
          margin: 10px 0;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #f9f9f9;
        }
      </style>
      <body>
      <div id="container">
        <h1>Customer Details</h1>
        <div class="details">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact Number:</strong> ${cnumber}</p>
          <p><strong>State:</strong> ${state}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Village/Street:</strong> ${vors}</p>
          <p><strong>Pin Code:</strong> ${pin}</p>
          <p><strong>Order Point:</strong> ${opoint}</p>
        </div>
        <h1>Product Details</h1>
        <div class="details">
          <p><strong>Product Name:</strong> ${pname}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>
          <p><strong>Price:</strong> ${price}.Rs</p>
        </div>
    </div>
      </body>
    `
      }
    
    transporter.sendMail(useroptions,(err,info)=>
    {
        if(err)
        {
            return res.status(500).json({ message: "Failed to send email" });
         }
         else
         {
            return  res.status(200).json({ message: "Order email sent successfully!" });
        }
    });
    transporter.sendMail(owneroptions,(err,info)=>
        {
            if(err)
            {
                return res.status(500).json({ message: "Failed to send email" });
            }
             else
            {
                return  res.status(200).json({ message: "Order email sent successfully!" });
            }
        });


     }

     else
     {
        return  res.status(200).json({ message: "please enter all details ! it's mandetory" });
     }
    

});

app.listen(PORT,console.log("backend is working "))





