import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import JogoUm from './Jogo da Velha/JogoUm'
import './styles.css'

function Index() {
    return (
        <div>
            <JogoUm />
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById("root"))