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
import Products from './Pages/Products/Products';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route exact path="/home">
                <Home></Home>
            </Route>
            <Route exact path="/login">
                <Login></Login>
            </Route>
            <Route exact path="/register">
                <Register></Register>
            </Route>
            <PrivateRoute path="/products">
                <Products></Products>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
