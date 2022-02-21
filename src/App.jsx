import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Error404 from './pages/Error404'
import PageRoutes from './PageRoutes'
import Guides_Array from './guides/guides_list'

function App() {
  return (
    <div className="flex flex-grow min-h-full flex-col">
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact render={() => <Home />}/>
        <Route path='/discord' component={() => { 
            window.location.href = 'https://discord.com/invite/zks7xnUk34'; 
            return null;
        }}/>
        {/* Page Routes */}
        {PageRoutes.map((item, key) => (
          <Route path={`${item.path}`} exact render={() => <item.component/>} key={key}/>
          ))}
        {/* Guide Article Routes */}
        {Guides_Array.map((item, key) => (
          <Route path={`${item.path}`} exact render={() => <item.component/>} key={key}/>
          ))}
        <Route component={Error404} />
      </Switch>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
