import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login'

export default props => {

    return (
        <BrowserRouter>
            <Route to="/" exact component={Login} />

        </BrowserRouter>

    )
}