import React from 'react';
import Header from '../Components/Header';

function Menu(){
   return(
      <div className="container">
         <Header/>

         <div className="h-85 w-100 d-flex align-items-center">
            <div className="h-50 w-100 d-flex align-items-center justify-content-around flex-column">

               <button className="h-10 w-70 d-flex 
               align-items-center justify-content-center" style={
                  {"padding" : "1em"}
               }>
                  Hacer pedido
               </button>
            
               <button className="h-10 w-70 d-flex 
               align-items-center justify-content-center" style={
                  {"padding" : "1em"}
               }>
                  Historial de pedidos
               </button>
            </div>
         </div>
      </div>  
   )
}

export default Menu;