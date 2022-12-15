import React, { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./components/Layout/Header";
import Banner from "./components/Layout/Banner";
import Products from "./components/Main/Products";
import Home from "./components/Main/Home";
import Cart from "./components/Cart/Cart";
import About from "./components/Info/About";
import ContextProvider from "./store/ContextProvider";
import Contact from "./components/Info/Contact";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <BrowserRouter>
      <ContextProvider>
        <Header setShowCart={setShowCart} />
        <Banner />
        <Cart showCart={showCart} setShowCart={setShowCart} />
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/store"><Products setShowCart={setShowCart}/></Route>
          <Route exact path="/about"><About/></Route>
          <Route exact path="/contact"><Contact/></Route>
        </Switch>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
