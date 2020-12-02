import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import product1 from '../Images/cajaAlpura.jpg';
import product2 from '../Images/cafeLegal.jpg';
import product3 from '../Images/bonafont.jpg';
import product4 from '../Images/cajaAceite.jpg';
import product5 from '../Images/cerealKelloggs.jpg';
import product6 from '../Images/galletasMarias.jpg';


function Purchase(){
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

         <div className="h-10 text-center d-flex justify-content-center align-items-center">
            <span>De la siguiente lista elige los productos que quieres adquirir:</span>
         </div>

         <div className="h-70">
            <div className="boxTitle">
               Productos
            </div>

            <div className="text-center d-flex align-items-center" style={
               {"height" : "1.5em"},
               {"width" : "97.5%"},
               {"margin" : "auto"},
               {"border-bottom" : "1px solid black"}
            }>
               <div className="w-60">Producto</div>
               <div className="w-20">Cant</div>
               <div className="w-20">Adquirir</div>
            </div>

            <div style={
               {"height" : "calc((95% - (95% / 10)))"}
            } id="products">   
               <div class="product">
                  <div>
                     <img src={product1} alt=""/>
                  </div>
                  <div>
                     Caja Alpura c/10 1lt
                  </div>
                  <div>
                     <input type="number" name="" id="" value="" min="0" max="30"/>
                  </div>
                  <div>
                     <input type="checkbox" name="" id=""/>
                  </div>
               </div>

            <div class="product">
               <div>
                  <img src={product2} alt=""/>
               </div>
               <div>
                  Café Legal 180 g
               </div>
               <div>
                  <input type="number" name="" id="" value="" min="0" max="30"/>
               </div>
               <div>
                  <input type="checkbox" name="ejemplos"/>
               </div>
            </div>

            <div class="product">
               <div>
                  <img src={product3} alt=""/>
               </div>
               <div>
                  Bonafont 500 ml
               </div>
               <div>
                  <input type="number" name="" id="" value="" min="0" max="30"/>
               </div>
               <div>
                  <input type="checkbox" name="" id=""/>
               </div>
            </div>

            <div class="product">
               <div>
                  <img src={product4} alt=""/>
               </div>
               <div>
                  Caja Aceite 500 ml
               </div>
               <div>
                  <input type="number" name="" id="" value="" min="0" max="30"/>
               </div>
               <div>
                  <input type="checkbox" name="" id=""/>
               </div>
            </div>

            <div class="product">
               <div>
                  <img src={product5} alt=""/>
               </div>
               <div>
                  Cereal Kellogg's 300 g
               </div>
               <div>
                  <input type="number" name="" id="" value="" min="0" max="30"/>
               </div>
               <div>
                  <input type="checkbox" name="" id=""/>
               </div>
            </div>

            <div class="product">
               <div>
                  <img src={product6} alt=""/>
               </div>
               <div>
                  Galletas Marias 170 g
               </div>
               <div>
                  <input type="number" name="" id="" value="" min="0" max="30"/>
               </div>
               <div>
                  <input type="checkbox" name="" id=""/>
               </div>
            </div>

         </div>
      </div>

      <div className="h-10 d-flex flex-column justify-content-center align-items-center">
            <button className="w-50 text-white" style={
               {"padding" : ".1em .4em"},
               {"font-size" : "1.5em"},
               {"font-weight" : "500"},
               {"background-color" : "#EC1C24"},
               {"border-width" : "0"},
               {"border-radius" : ".5em"}
            }>
               Hacer pedido
            </button>
      </div>
   </div>
   )
}

export default Purchase;