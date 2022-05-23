import MongoClient, { clearDatabase } from '../../../client';
import { allCreditCardsTestData } from '../CreditCard.data';
import { CreditCardModel } from '../CreditCardModel';

describe('Credit Card Model', () => {
    beforeEach(() => {
        MongoClient;
    });

    afterEach(async () => {
        MongoClient;
        await clearDatabase();
    });

    describe('Create', () => {
        test('Creates a credit card record when valid', async () => {
            await MongoClient;

            await CreditCardModel.deleteMany();

            await CreditCardModel.insertMany(allCreditCardsTestData);

            const allCreditCards = await CreditCardModel.find().exec();

            allCreditCards.forEach((card) => {
                const matchedCard = allCreditCardsTestData.find((testCard) => testCard.slug === card.slug);

                expect(matchedCard.displayName).toEqual(card.displayName);
                expect(matchedCard.issuer).toEqual(card.issuer);
                expect(matchedCard.type).toEqual(card.type);
                expect(matchedCard.annualFee).toEqual(card.annualFee);
                expect(matchedCard.pointMultiplierValue).toEqual(card.pointMultiplierValue);

                matchedCard.bonusCategories.forEach(({ categoryName, multiplier }) => {
                    expect(card.bonusCategories).toContainEqual(expect.objectContaining({
                        categoryName,
                        multiplier
                    }));
                });
            });

            expect(allCreditCards).toHaveLength(allCreditCardsTestData.length);
        });
    });

    describe('Update', () => {
        let creditCard;

        beforeEach(async () => {
            creditCard = await CreditCardModel.create({
                ...allCreditCardsTestData[0]
            });
        });

        test('update name', async () => {
            const update = {
                issuer: 'Capital One'
            };

            expect(creditCard.issuer).not.toEqual(update.issuer);

            await CreditCardModel.updateOne({ _id: creditCard._id }, { $set: { issuer: update.issuer } }, { return: 'after' }).exec();

            const updatedCreditCard = await CreditCardModel.findById(creditCard._id);

            expect(updatedCreditCard.issuer).toEqual(update.issuer);
        });
    });
});