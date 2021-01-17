import React from 'react';
import  {BrowserRouter, Route} from "react-router-dom";
import Main from "../Main/Main";
import Publications from "../Publications/Publications";
import Photos from "../Photos/Photos";
import Contacts from "../Contacts/Contacts";

function Content() {
    return (
        <BrowserRouter>
            <div className='content'>
                <Route path='/main' component={Main} />
                <Route path='/publications' component={Publications} />
                <Route path='/photos' component={Photos} />
                <Route path='/contacts' component={Contacts} />
            </div>
        </BrowserRouter>
    )
}

export default Content;