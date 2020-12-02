import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function OrderStatus(){
   return(
      <div className="container">
         <div className="h-10 pl-5p pr-5p 
         d-flex justify-content-between align-items-center">
            <a className="h-60">
               <button className="buttonBack h-100 text-white">
                  Regresar
               </button>
            </a>
            <span className="buttonExpand h-60">
               <FontAwesomeIcon icon={faBars}/>
            </span>
         </div>

         <div className="h-5 w-45 d-flex 
         justify-content-around align-items-center font-size-1-1 font-weight-bolder" 
         style={
            {"margin": "auto"}
            }>
            <span>Orden:</span>
            <span>0127970454</span>
         </div>

      <div className="h-5 w-65 d-flex
      justify-content-around align-items-center font-size-1-1" style={
         {"margin" : "auto"}
      }>
         <span>30 / Agosto / 20</span>
         <span>Orden 1</span>
      </div>

      <div className="h-70" style={
         {"borderBottom": "1px solid #EC1C24"}
      }>
         <div className="boxTitle" style={{"color" : "#519FE8"}}>
            Productos
         </div>

         <div id="products2">
            <div id="product1" onclick="mark(this.id)">
               <span>
               10 Galletas 200 gr.
               </span>
            </div>
            <div id="product2" onclick="mark(this.id)">
               <span>
                  02 Caja Alpura c/10
               </span>
            </div>
            <div id="product3" onclick="mark(this.id)">
               <span>
                  20 Gelatinas 15
               </span>
            </div>
            <div id="product4" onclick="mark(this.id)">
               <span>
                  12 Bonafont 500 ml
               </span>
            </div>
            <div id="product5" onclick="mark(this.id)">
               <span>
                  05 Cafe Legal 200 gr
               </span>
            </div>
            <div id="product6" onclick="mark(this.id)">
               <span>
                  01 Cereal Kellogs 100 gr
               </span>
            </div>
            <div id="product7" onclick="mark(this.id)">
               <span>
                  12 Bonafont 500 ml
               </span>
            </div>
            <div id="product8" onclick="mark(this.id)">
               <span>
                  05 Cafe Legal 200 gr
               </span>
            </div>
            <div id="product9" onclick="mark(this.id)">
               <span>
                  01 Cereal Kellogs 100 gr
               </span>
            </div>
            <div id="product10" onclick="mark(this.id)">
               <span>
                  10 Galletas 200 gr.
               </span>
            </div>
            <div id="product11" onclick="mark(this.id)">
               <span>
                  02 Caja Alpura c/10
               </span>
            </div>
         </div>
      </div>

      <div className="h-10 d-flex flex-column justify-content-center align-items-center">
            <button className="w-50 text-black buttonBottom" style={{"background-color":"#D7E5D7"}}>
               Disponible
            </button>
      </div>
   </div>    
   )
}

export default OrderStatus;