import { useEffect, useState } from 'react'
import '../index.css'
import principal from '../assets/img/principal.png'
import Characters from './Characters';

function MiApi() {
    const [characters, setCharacters] = useState(null);

    const getCharacters = async () => {
        try {
            const apiCharacters = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=50')
            const jsonCharacters = await apiCharacters.json();

            let charactersMap = jsonCharacters.map(item => {
                return [item.character, item]
            });

            let charactersMapArr = new Map(charactersMap)

            let uniqueCharacters = [...charactersMapArr.values()]
            setCharacters(uniqueCharacters)

            useEffect (() => {
                getCharacters();
            }, []);
            
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='App'>
            <header className='App-header'>
                {characters ? (
                    <Characters characters={characters} setCharacters={setCharacters} />
                ) : (
                    <>
                        <img src={principal} alt='Los simpson' className='img-home'></img>
                        <button className='btn' onClick={getCharacters}>Iniciar</button>
                    </>
                )}

            </header>
        </div>
    )
}

export default MiApi