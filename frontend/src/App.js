import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './HomePage';
import OrderPage from './OrderPage';
import React from 'react';

function App()
{
  return(
  <>
     <BrowserRouter>
     <Routes> 
           <Route path="/" element={<HomePage />}></Route>
           <Route path="/OrderPage" element={<OrderPage />}></Route>
        </Routes>
     </BrowserRouter>
       
  </>

  );
}
export default App;