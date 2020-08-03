import React from 'react'
import CharactersItems from './CharactersItem'

const CharactersGrid = ({isLoading, items}) => {
    return isLoading ? (<h1 style={{textAlign: 'center'}} >Loading...</h1>) : (
        <section className="cards" >
            {items.map(item => (
                <CharactersItems  key={item.char_id} item={item} />
            ))}
        </section>
    )
}

export default CharactersGrid
