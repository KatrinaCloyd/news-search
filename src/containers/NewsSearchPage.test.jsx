import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSearchPage from './NewsSearchPage';
import userEvent from '@testing-library/user-event';

describe('news search page', () => {
    it('displays a list of news articles, updating results based on user input', async () => {
        render(<NewsSearchPage />);
        screen.getByText('One Moment Please');

        const list = await screen.findByRole('list', { name: 'article-list' });
        expect(list).not.toBeEmptyDOMElement();
    })
})