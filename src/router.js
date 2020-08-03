import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './Components/Main/index'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Main} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
