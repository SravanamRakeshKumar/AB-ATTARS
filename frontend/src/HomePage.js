import './HomePageStyles.css';
import React from 'react';
import FooterComponent from './FooterComponent';
import { useState, useEffect } from 'react';
import Header from './HeaderComponent';
import { useNavigate } from 'react-router-dom';


function HomePage() {

  const navigate=useNavigate();
  const [data, setData] = useState([]);     
  const [filteredData, setFilteredData] = useState([]);
  

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}items`)
      .then(response => response.json())
      .then(result => {
         setData(result);
        setFilteredData(result);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const Taking = (search_data) => {
      const filtered = data.filter(item => item.item_name.toLowerCase().includes(search_data.toLowerCase()));
      setFilteredData(filtered);
  };

  const order = (item,name) =>
  {
    const c = window.confirm("Are You Sure To Click The Order Button");
    const state = 
    {
      item,
      name
    };
       if(c === true)
       {
        navigate('/OrderPage',{state});
       }
  };

    
  return (
    <>
      <Header fun={Taking} />
      <div id="all">
        {filteredData.length > 0 ? (

          filteredData.length !== 0 ? 
          (
          filteredData.map((item, ind) => (
            <div id="box" key={ind}>
              <img src={item.item_img} alt={item.item_name} />
              <div id="details">
              <h2>{item.item_name}</h2>
              <h3>&#8377;{item.item_price}</h3>
              </div>
              <button  onClick={()=>order(item,item.item_name)}>Order Now</button>
            </div>
          ))
        ):
        (<h1>Loading</h1>) 
        ) : (
          <h1>No data found</h1>
        )
      }
      </div>
      <FooterComponent />
    </>
  );
}

export default HomePage;
