import React from 'react';
import Header from "./Header";

export default function Regles(props) {
    let pays=props.match.params.pays;
    return (
        <div>
            <Header page={'Règles'}></Header>
        </div>

    );

}