import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PurchaseDetails from './Pages/PurchaseDetails/PurchaseDetails';
import Products from './Pages/Home/Products/Products';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path="/register">
                <Register></Register>
            </Route>
            <PrivateRoute path="/products">
                <Products></Products>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/purchase/:productId">
                <PurchaseDetails></PurchaseDetails>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
                <MyOrders></MyOrders>
            </PrivateRoute>
            
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
