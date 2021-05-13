import React, { Component } from 'react';
import ArticleList from '../components/search/ArticleList';
import SearchForm from '../components/search/SearchForm';
import { fetchNewsArticles, fetchNewsSearch } from '../services/NewsApi';

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

    handleSearchTermChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    };

    handleSearchSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const newArticles = await fetchNewsSearch(this.state.searchTerm);
        this.setState({
            loading: false,
            articles: newArticles,
        });
    };

    render() {
        if (this.state.loading)
            return <div>One Moment Please</div>;
        return (
            <>
                <SearchForm
                    search={this.state.searchTerm}
                    onSearchChange={this.handleSearchTermChange}
                    onSubmit={this.handleSearchSubmit} />
                <ArticleList
                    articles={this.state.articles} />
            </>
        );
    }
}
