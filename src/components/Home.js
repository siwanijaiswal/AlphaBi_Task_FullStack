import React, { useEffect, useState } from 'react'

export const Home = () => {
    const [search, setSearch] = useState('')

    const handleSearch = async (e) => {
        const { value } = e.target

        setSearch(value)
    }

    useEffect(() => {
    }, [search])

    return (
        <div>
            <h1>Home</h1>
            <input type="text" placeholder="Search" onChange={(e) => handleSearch(e)} />
            <h2>Result: </h2>
        </div>
    )
}
