import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
//import Content from "./components/Content/Content";
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./components/Main/Main";
import Publications from "./components/Publications/Publications";
import Photos from "./components/Photos/Photos";
import Contacts from "./components/Contacts/Contacts";

//import Contacts from "./components/Contacts/Contacts";


function App() {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Navbar />
              {/*<Content />*/}
              <div className='content'>
                  <Route path='/main' component={Main} />
                  <Route path='/publications' component={Publications} />
                  <Route path='/photos' component={Photos} />
                  <Route path='/contacts' component={Contacts} />

              </div>
          </div>
      </BrowserRouter>

  )
}

export default App;
