import React from 'react';
import Header from '../Components/Header';


function Orders(){
   return(
      <div className="container">
         <Header content="Ordenes"/>

         <div className="h-75 w-100 d-flex flex-column align-items-center" style={
            {"overflow-y" : "scroll"}
         }>

            <div id="orden1" className="orden">
               <span>Orden</span>
               <span>30 / Agosto / 20</span>
               <span className="quantity">(2) &gt;</span>
            </div>
               <div id="subOrden1" class="subOrden">
                  <div className="w-100 d-flex justify-content-around" style={{"color" : "black"}}>
                     <span>Orden 1</span>
                     <span>Atizapan</span>
                  </div>       

                  <div className="w-100 d-flex justify-content-around" style={{"color" : "black"}}>
                     <span>Orden 2</span>
                     <span>Otumba</span>
                  </div>
               </div>

            <div id="orden2" className="orden">
               <span>Orden</span>
               <span>28 / Agosto / 20</span>
               <span className="quantity">(1) &gt;</span>
            </div>

            <div id="orden3" className="orden">
               <span>Orden</span>
               <span>25 / Agosto / 20</span>
               <span className="quantity">(2) &gt;</span>
            </div>
               <div id="subOrden3" className="subOrden">
                  <div>
                     <span>Orden 1</span>
                     <span>Atizapan</span>
                  </div>
                  <div>
                     <span>Orden 2</span>
                     <span>Otumba</span>
                  </div>
               </div>

         <div id="orden4" className="orden">
            <span>Orden</span>
            <span>20 / Agosto / 20</span>
            <span className="quantity">(1) &gt;</span>
         </div>

         <div id="orden5" className="orden">
            <span>Orden</span>
            <span>18 / Agosto / 20</span>
            <span className="quantity">(1) &gt;</span>
         </div>

         <div id="orden6" className="orden">
            <span>Orden</span>
            <span>15 / Agosto / 20</span>
            <span className="quantity">(1) &gt;</span>
         </div>

         <div id="orden7" className="orden">
            <span>Orden</span>
            <span>10 / Agosto / 20</span>
            <span className="quantity">(1) &gt;</span>
         </div>
   </div>

      <div className="h-10"></div>
   </div>
   )
}

export default Orders;