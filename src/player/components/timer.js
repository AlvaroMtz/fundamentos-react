import React from 'react';
import './timer.css';

//Refactorizar -> Meter las funciones un utilidades y pasar al componente los tiempos ya formateados, ya 
//que en los componentes no debemos dejar nada de lógica!!

function leftPad(number) {
    const pad = '00'
    return pad.substring(0, pad.length - number.length) + number;
}

function formatedTime (secs){
    const minutes = parseInt(secs/60, 10)
    const seconds = parseInt(secs %60, 10)
    return `${minutes} : ${leftPad(seconds.toString())}`
}

function Timer(props) {
    return (
        <div className="Timer">
            <p>
                <span>{formatedTime(props.currentTime)} / {formatedTime(props.duration)}</span>
            </p>
        </div>
    )
}

export default Timer