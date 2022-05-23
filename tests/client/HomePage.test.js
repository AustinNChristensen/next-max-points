/**
 * @jest-environment jsdom
 */

// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { HomePage } from '../../src/components/HomePage/HomePage';

describe('Home Page', () => {
    const setupRTL = () => render(<HomePage />);

    test('matches snapshot', () => {
        const { container } = setupRTL();

        expect(container).toMatchSnapshot();
    });
});