import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearchPage from './NewsSearchPage';


describe('news search page', () => {
    it('displays a list of news articles, updating results based on user input', async () => {
        render(<NewsSearchPage />);
        screen.getByAltText('loading');

        const list = await screen.findByRole('list', { name: 'article-list' });
        expect(list).not.toBeEmptyDOMElement();

        const searchBar = await screen.findByRole('textbox');
        userEvent.type(searchBar, 'bubbles');

        const submitBtn = await screen.findByRole('button', { name: 'search' });
        userEvent.click(submitBtn);

        return waitFor(() => {
            const news = screen.getAllByText('bubbles', { exact: false });
            expect(news).not.toHaveLength(0)
        })
    })
})