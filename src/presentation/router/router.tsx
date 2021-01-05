import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Login } from '../pages'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  )
}
