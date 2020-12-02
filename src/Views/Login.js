import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer'

function Login(){
   return(
      <div className="container">
         <Header/>

         <div className="h-70 w-90 ml-5p 
            d-flex flex-column">

            <div className="h-25 d-flex flex-column align-items-center justify-content-center">
               <label className="align-self-start" id="labelUserName" for="userName">
                  Nombre de usuario:
               </label>
               <input className="w-80" style={{"line-height": "2em;"}} type="text" name="userName" id="userName"/>
            </div>

            <div className="h-25 d-flex flex-column align-items-center justify-content-center">
               <label className="align-self-start" for="userPassword" id="labelUserPassword">
                  Contraseña:
               </label>
               <input  className="w-80" style={{"line-height": "2em;"}} type="password" name="userPassword" id="userPassword"/>
            </div>
      
            <div className="h-50 d-flex flex-column justify-content-around align-items-center">
               <a className="text-decoration-none" href="NewViewer.html">
                  <button style={{"padding" : ".1em 2em"}}>
                     Entrar
                  </button>
               </a>
               <div className="text-center">
                  <a href="">¿Olvidaste tu contraseña?</a>
               </div>
            </div>
         </div>
   
         {/* <div className="h-15 d-flex justify-content-center align-items-center">
            <a style={{"text-decoration" : "none;"}} href="Registration.html">
               <button style={{"padding" : ".1em 1em"}}>
                  Crear nuevo usuario
               </button>
            </a>
         </div> */}
         <Footer content="Crear nuevo usuario"/>
      </div>
   )
}

export default Login;