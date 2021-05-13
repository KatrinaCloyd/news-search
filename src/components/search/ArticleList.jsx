import React from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

export default function ArticleList({ articles }) {
    return (
        <ul aria-label='article-list'>
            <h2>List of Articles</h2>
            <hr />
            <hr />
            {articles.map((article) => {
                return (
                    <Article key={article.title}
                        title={article.title}
                        author={article.author}
                        snip={article.snip}
                        source={article.source}
                        link={article.link}
                    />);
            })}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            author: PropTypes.string,
            snip: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};