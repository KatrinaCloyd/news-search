import React, { Component } from 'react'
import ArticleList from '../components/search/ArticleList';
import SearchForm from '../components/search/SearchForm';
import { fetchNewsArticles } from '../services/NewsApi';

export default class NewsSearchPage extends Component {
    state = {
        loading: true,
        searchTerm: '',
        articles: [],
    }

    async componentDidMount() {
        const articles = await fetchNewsArticles();
        this.setState({
            loading: false,
            articles: articles,
        });
    };

    render() {
        if (this.state.loading)
            return <div>One Moment Please</div>;
        return (
            <>
                <SearchForm />
                <ArticleList articles={this.state.articles} />
            </>
        );
    }
}
