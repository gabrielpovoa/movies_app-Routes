import React from 'react'
import ReactDOM from 'react-dom/client'
import Global from './assets/Global/Global'
import { BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/Home'
import RouteList from './Routes/RouteList'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Global />
    <RouteList />
  </BrowserRouter>
)
