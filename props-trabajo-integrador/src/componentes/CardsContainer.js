import React from 'react';
import Card from './Card';
import Datos from '../rickandmorty.json';

function CardsContainer(props) {
    return (
        <main className="CardContainer">
            {Datos.map(function (unaCard, idx) {
                return (
                    <Card DatosAmostrar={unaCard} key={idx} />
                )
            })
            }
        </main>
    );
}
export default CardsContainer;


