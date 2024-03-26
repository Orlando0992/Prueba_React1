import React, { useEffect, useState } from 'react';
import '../characters.css';

export default function Characters(props) {
    const { characters, setCharacters } = props;
    const [termino, setTermino] = useState("");
    const [ordenAscendente, setOrdenAscendente] = useState(true); 

    const resetCharacters = () => {
        setCharacters();
    };

    const handleSearch = (event) => {
        setTermino(event.target.value);
    };

    const filteredCharacters = characters.filter(character =>
        character.character.toLowerCase().includes(termino.toLowerCase())
    );

    const ordenarAscendente = () => {
        const charactersCopy = [...filteredCharacters]; 
        charactersCopy.sort((a, b) => {
            return a.character.localeCompare(b.character); 
        });
        setCharacters(charactersCopy);
        setOrdenAscendente(true); 
    };

    const ordenarDescendente = () => {
        const charactersCopy = [...filteredCharacters]; 
        charactersCopy.sort((a, b) => {
            return b.character.localeCompare(a.character); 
        });
        setCharacters(charactersCopy);
        setOrdenAscendente(false); 
    };

    return (
        <div className='characters'>
            <div>
                <input
                    type='text'
                    value={termino}
                    onChange={handleSearch}
                    placeholder='Buscar...'
                />
                <button onClick={ordenarAscendente}>Ordenar Ascendente</button>
                <button onClick={ordenarDescendente}>Ordenar Descendente</button>
            </div>
            <button className='btn' onClick={resetCharacters}>
                <span className='back'>Volver</span>
            </button>
            <div className='characters-container'>
                {filteredCharacters.map((character, index) => (
                    <div className='characters-details' key={index}>
                        <h3>{character.character}</h3>
                        <img src={character.image} alt={character.character} />
                        <p>{character.quote}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
