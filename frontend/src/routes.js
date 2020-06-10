import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// import Login from './pages/Login'
import Feed from './pages/Feed'

export default props => {

    return (
        <BrowserRouter>
            <Route to="/" exact component={Feed} />

        </BrowserRouter>

    )
}