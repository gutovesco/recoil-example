import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import UsersPage from './components/UsersPage'

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/users" exact component={UsersPage}/>
        </Switch>
        </BrowserRouter>
    )
}
