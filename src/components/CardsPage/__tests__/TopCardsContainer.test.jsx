/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { TopCardsContainer } from '../TopCardsContainer';
import { allCreditCardsTestData } from '../../../../lib/mongoDB/models/CreditCard/CreditCard.data';

describe('Top Cards Container', () => {
    let topCardsByCategory;

    beforeEach(() => {
        topCardsByCategory = [
            {
                categoryName: 'Everything Else',
                cards: {
                    _id: 'testID',
                    ...allCreditCardsTestData[0]
                }
            }
        ];
    });

    const setupRTL = () => render(<TopCardsContainer topCardsByCategory={topCardsByCategory} />);

    test('matches snapshot', () => {
        const { container } = setupRTL();

        expect(container).toMatchSnapshot();
    });

    test('renders page text', () => {
        setupRTL();

        expect(screen.getByRole('heading', { name: 'Top Cards' })).toBeInTheDocument();
        expect(screen.getByText('A list of top Credit Cards by Category')).toBeInTheDocument();

        const testCard = allCreditCardsTestData[0];

        expect(screen.getByText(testCard.displayName)).toBeInTheDocument();
        expect(screen.getByText(testCard.issuer)).toBeInTheDocument();
        expect(screen.getByText(testCard.type)).toBeInTheDocument();
        expect(screen.getByText('1.5%')).toBeInTheDocument();
    });
});