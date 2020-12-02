import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from 'react-router-dom';
import Header from './Components/Header';
import Login from './Views/Login';
import Offers from './Views/Offers';
import Purchase from './Views/Purchase';
import PurchaseConfirmation from './Views/PurchaseConfirmation';
import SuccessfulPurchaseMessage from './Views/SuccessfulPurchaseMessage';
import Orders from './Views/Orders';
import Prueba from './Views/prueba';
import Menu from './Views/Menu';
import OrderStatus from './Views/OrderStatus';
import QRCode from './Views/QRCode';

function App() {
   return (
      <div>
         <Router>
            {/* <Prueba/> */}
            {/* <Login/> */}
            {/* <Offers/> */}
            {/* <Purchase/> */}
            {/* <PurchaseConfirmation/> */}
            {/* <SuccessfulPurchaseMessage/> */}
            {/* <Orders/> */}
            {/* <Menu/> */}
            {/* <OrderStatus/> */}
            <QRCode/>
         </Router>
      </div>
   );
}

export default App;
