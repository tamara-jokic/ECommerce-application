import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Page/Home";
import AboutUs from "./Page/AboutUs";
import Contact from "./Page/Contact";
import Products from "./Page/Products";
import Error from "./Page/Error";
import Footer from "Components/Footer/Footer";
import Layout from "./Components/Header/Layout";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import Cart from "./Page/Cart";
import AdminPanel from "./Page/AdminPanel";
axios.defaults.baseURL = "http://localhost:3000";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Layout />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/aboutus" exact component={AboutUs} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/adminpanel" component={AdminPanel} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/cart" component={Cart} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </Provider>
      </div>
    );
  }
}

export default App;
