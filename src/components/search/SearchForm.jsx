import React from 'react'

export default function SearchForm({ search, onSearchChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="search-term">Search:</label>
            <input
                id="search"
                type="text"
                value={search}
                onChange={onSearchChange}
            />
            <button aria-label="search">Submit</button>
        </form>
    )
}
