import React, {useState, useEffect} from 'react'
import api from '../../Services/api'
import Header from '../UI/Header'
import CharactersGrid from '../Characters/CharactersGrid'
import Search from '../UI/Search'

const Main = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
        const fetchItems = async () => {
            const response = await api.get(`characters?name=${query}`)
            console.log(response.data)

            setItems(response.data)
            setIsLoading(false)
        }

        fetchItems()
    }, [query])

    return (
        <div className="container">
            <Header />
            <Search query={(q) => setQuery(q)} />
            <CharactersGrid  isLoading={isLoading} items={items} />
        </div>
    )
}

export default Main
