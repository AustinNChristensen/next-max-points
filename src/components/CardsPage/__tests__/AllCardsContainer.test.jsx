/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { AllCardsContainer } from '../AllCardsContainer';
import { allCreditCardsTestData } from '../../../../lib/mongoDB/models/CreditCard/CreditCard.data';

describe('Top Cards Container', () => {
    const setupRTL = () => render(<AllCardsContainer allCards={allCreditCardsTestData} />);

    test('matches snapshot', () => {
        const { container } = setupRTL();

        expect(container).toMatchSnapshot();
    });

    test('renders page text', () => {
        setupRTL();

        expect(screen.getByRole('heading', { name: 'All Cards' })).toBeInTheDocument();
        expect(screen.getByText('A list of all Credit Cards')).toBeInTheDocument();

        allCreditCardsTestData.forEach((card) => {
            expect(screen.getByText(card.displayName)).toBeInTheDocument();
        });
    });
});