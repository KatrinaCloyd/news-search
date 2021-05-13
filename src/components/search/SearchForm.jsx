import React from 'react'
import style from '../../containers/news.css'

export default function SearchForm({ search, onSearchChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className={style.searchBox}>
            <label htmlFor="search-term">Search:</label>
            <input
                id="search-term"
                type="text"
                role="textbox"
                value={search}
                onChange={onSearchChange}
            />
            <button aria-label="search">Submit</button>
        </form>
    )
}
