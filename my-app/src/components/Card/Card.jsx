import React from "react";
import style from './Card.module.css'

const Card = ()=>{
    return(
        <div className={style.container}>
            <h1>JON SNOW</h1>
            <br />
            <h3>Jon Snow es un bastardo hijo de Ned Stark y señor de la guardia negra. Su nombre real es Aegon Targaryen. Lucho en la batalla de los bastardos y contra los caminantes muestros. Es un tipazo y no sabe nada nunca</h3>
        </div>
    )
}
export default Card;