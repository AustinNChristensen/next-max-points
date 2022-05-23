import { kebabCase } from 'lodash';
import MongoClient from '../../../../mongoDB/client';
import { allCreditCardsTestData } from '../CreditCard.data';
import { createNewCreditCard, deleteCreditCardByID, getAllCreditCards, getCreditCardByID, seedCreditCardCollection, updateCreditCardByID, getBonusCategoriesByCreditCardID } from '../CreditCardMutations';

describe('Credit Card Mutations', () => {
    beforeEach(async () => {
        MongoClient;
        await seedCreditCardCollection();
    });

    describe('createNewCreditCard', () => {
        test('creates when valid data is provided', async () => {
            const input = allCreditCardsTestData[0];
            const result = await createNewCreditCard(input);

            expect(result.slug).toEqual(kebabCase(input.slug));
            expect(result.displayName).toEqual(input.displayName);
            expect(result.type).toEqual(input.type);
            expect(result.issuer).toEqual(input.issuer);
            expect(result.annualFee).toEqual(input.annualFee);
            expect(result.signUpBonus).toEqual(input.signUpBonus);
            expect(result.pointMultiplierValue).toEqual(input.pointMultiplierValue);
        });
    });

    describe('getAllCreditCards', () => {
        test('returns all credit cards in DB', async () => {
            const result = await getAllCreditCards();

            expect(result).toHaveLength(allCreditCardsTestData.length);
            const original = result[0];
            const compared = allCreditCardsTestData[0];

            expect(original.slug).toEqual(compared.slug);
            expect(original.displayName).toEqual(compared.displayName);
            expect(original.issuer).toEqual(compared.issuer);
            expect(original.type).toEqual(compared.type);
            expect(original.annualFee).toEqual(compared.annualFee);
            expect(original.pointMultiplierValue).toEqual(compared.pointMultiplierValue);
            expect(original.signUpBonus).toEqual(compared.signUpBonus);
        });
    });

    describe('getCreditCardByID', () => {
        test('returns nothing when bad id is passed', async () => {
            await expect(async () => await getCreditCardByID('')).rejects.toThrow();
        });

        test('returns card matching id when valid id is passed', async () => {
            const allCards = await getAllCreditCards();

            const testCard = allCards[0];

            const result = await getCreditCardByID(testCard._id);

            expect(result.slug).toEqual(testCard.slug);
            expect(result.displayName).toEqual(testCard.displayName);
            expect(result.issuer).toEqual(testCard.issuer);
            expect(result.type).toEqual(testCard.type);
            expect(result.annualFee).toEqual(testCard.annualFee);
            expect(result.pointMultiplierValue).toEqual(testCard.pointMultiplierValue);
            expect(result.signUpBonus).toEqual(testCard.signUpBonus);
        });
    });

    describe('updateCreditCardByID', () => {
        test('handles field updates', async () => {
            const allCards = await getAllCreditCards();

            const testCard = allCards[0];

            const update = {
                issuer: 'Amex',
                signUpBonus: 999999,
                pointMultiplierValue: 1234134817348231.134,
                displayName: 'Best Card Ever'
            };

            Object.keys(update).forEach((key) => {
                expect(testCard[key]).not.toEqual(update[key]);
            });

            const result = await updateCreditCardByID(testCard._id, update);

            Object.keys(update).forEach((key) => {
                expect(result[key]).toEqual(update[key]);
            });
        });
    });

    describe('deleteCreditCardByID', () => {
        test('deletes card when valid id is passed', async () => {
            const allCards = await getAllCreditCards();

            const testCard = allCards[0];

            const originalLength = allCards.length;

            await deleteCreditCardByID(testCard._id);

            const newAllCards = await getAllCreditCards();

            expect(newAllCards.length).toEqual(originalLength - 1);

            const attemptAtGet = await getCreditCardByID(testCard._id);

            expect(attemptAtGet).toBe(null);
        });
    });

    describe('getBonusCategoriesByCreditCardID', () => {
        test('returns bonus categories for a valid id', async () => {
            const allCards = await getAllCreditCards();

            const testCard = allCards[0];

            const bonusCategories = testCard.bonusCategories;

            const categories = await getBonusCategoriesByCreditCardID(testCard._id);

            bonusCategories.forEach((bonusCat) => {
                const match = categories.find((cat) => cat.categoryName === bonusCat.categoryName);
                expect(match.multiplier).toEqual(bonusCat.multiplier);
            });
        });
    });

    // TODO
    describe('getTopCreditCardsByCategory', () => {

    });
});