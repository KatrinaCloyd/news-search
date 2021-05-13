import React, { Component } from 'react';
import ArticleList from '../components/search/ArticleList';
import Loading from '../components/search/Loading';
import SearchForm from '../components/search/SearchForm';
import { fetchNewsArticles, fetchNewsSearch } from '../services/newsApi';

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
            return (
                <>
                    <SearchForm
                        search={this.state.searchTerm}
                        onSearchChange={this.handleSearchTermChange}
                        onSubmit={this.handleSearchSubmit} />
                    <Loading />
                </>
            );
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
