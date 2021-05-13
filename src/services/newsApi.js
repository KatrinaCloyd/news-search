export const fetchNewsArticles = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=Bill%20Nye&apiKey=${process.env.NEWS_API_KEY}`);
    const { articles } = await res.json();
    return articles.map((article) => ({
        title: article.title,
        author: article.author,
        snip: article.content,
        source: article.source.name,
        link: article.url,
    }));
}

export const fetchNewsSearch = async (searchTerm) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${process.env.NEWS_API_KEY}`);
    const { articles } = await res.json();
    return articles.map((article) => ({
        title: article.title,
        author: article.author,
        snip: article.content,
        source: article.source.name,
        link: article.url,
    }));
}