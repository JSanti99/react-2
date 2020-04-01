import React from 'react';
import { render } from 'react-dom';


const nombres = [
  'Jeisson',
  'Jeisson',
  'Santiesteban',
  'Mendivelso'
]
/*function getNombres(){
    let elementosLista = [];

    for(var i=0; i< nombres.length;i++){
      elementosLista.push(<li key={i}>{nombres[i]}</li>);
    }
    console.log(elementosLista);
    return elementosLista;
}*/

const Nombres = () => {
  return <ul>{ nombres.map( (nombre,index) =>  <li key={index}>{nombre}</li> ) }</ul>
}

const App = () => {
  return <div><Nombres /></div>
}

render(<App />, document.getElementById('root'));