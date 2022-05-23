/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { HomePage } from '../HomePage';

describe('Home Page', () => {
    const setupRTL = () => render(<HomePage />);

    test('matches snapshot', () => {
        const { container } = setupRTL();

        expect(container).toMatchSnapshot();
    });

    test('renders page text', () => {
        setupRTL();

        expect(screen.getByRole('heading', { name: 'Data to level up your Points Game' })).toBeInTheDocument();
        expect(screen.getByText('Credit cards points is one of the largest arbitrage spaces available today.')).toBeInTheDocument();
        expect(screen.getByText('Max Points gives you the data you need to make informed decisions on your next card')).toBeInTheDocument();
    });
});