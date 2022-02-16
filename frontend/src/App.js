import React, { useState } from "react";
import File from "./components/File/File";
import Table from "./components/Table/Table";
import SignIn from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Navbar from "./components/Navbar";


import "./App.css";
import {
  BrowserRouter ,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


function App() {


   return (
     <>
     
      <BrowserRouter>
  
        <Switch>
        <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/city">
          <Navbar/>
            <Table />
          </Route>
          <Route exact path="/file">
          <Navbar/>
            <File />
          </Route>
          <Route exact path="/register">
            <Signup />
          </Route>
         <Redirect to ="/"/>
        </Switch>
      </BrowserRouter>
</>
  );
}

export default App;
