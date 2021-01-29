import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from '../pages'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign_up" exact component={Home} />
        <Route path="/sign_in" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
