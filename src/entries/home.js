import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
import data from '../api.json'



const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré)
const holaMundo =<h1>Hola Mundo</h1>
render( <Home data={data} />, homeContainer ) 