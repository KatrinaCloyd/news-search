import React from 'react'
import PropTypes from 'prop-types'

export default function Article({ title, author, snip, source, link }) {
    return (
        <div>
            <h3>{title}</h3>
            <h4>{author} - {source}</h4>
            <a href={link}>Full Article</a>
            <p>{snip}</p>
            <hr />
        </div>
    )
}

Article.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    snip: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}
