import React, {useState} from 'react'

const Search = ({query}) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        query(q)
    }

    return (
        <section className="search">
            <form>
                <input 
                type="text" 
                value={text} 
                onChange={(e) => onChange(e.target.value)}  
                placeholder="Search for characters..."
                autoFocus
                />
            </form>
        </section>
    )
}

export default Search
