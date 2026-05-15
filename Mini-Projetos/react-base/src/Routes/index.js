import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Login from '../pages/Login/index';
import page404 from '../pages/page404/index';

export default function Routes() {
    const location = useLocation();
    console.log('Rota atual:', location.pathname);

    return (
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='*' component={page404} />
        </Switch>
    );
}
