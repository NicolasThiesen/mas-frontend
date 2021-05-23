import { Switch, Route} from 'react-router-dom';

import React from 'react'
import { NotFound } from '../pages/NotFound';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { Register } from '../pages/Register';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/dashboard" exact component={Dashboard}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/*" component={NotFound}/>
    </Switch>
)

export default Routes;