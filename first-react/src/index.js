import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter,Route} from 'react-router-dom'


import Home from './components/home'
import Artists from './components/artists'

const App =()=>{
    return(
        <BrowserRouter>
            <div>
                <Route exact path ='/' component={Home}/>
                <Route path ='/artists/:artistid' component={Artists}/>
            </div>
        </BrowserRouter>
    )
}

ReactDom.render(<App/>,document.getElementById('root') )