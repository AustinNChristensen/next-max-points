import { mockRequest, mockResponse } from 'jest-mock-req-res';
import MongoClient from '../../../lib/mongoDB/client';
import { getAllCreditCards, getBonusCategoriesByCreditCardID, seedCreditCardCollection } from '../../../lib/mongoDB/models/CreditCard/CreditCardMutations';
import API from '../../../src/pages/api/cards/[cardID]/bonusCategories';

describe('/api/cards/[cardID]/bonusCategories', () => {
    let cardID;

    beforeEach(async () => {
        MongoClient;
        await seedCreditCardCollection();

        const allCards = await getAllCreditCards();

        cardID = allCards[0]._id;
    });

    test('GET', async () => {
        const req = mockRequest({
            method: 'GET',
            query: {
                cardID
            }
        });
        const res = mockResponse();

        const expectedResponse = await getBonusCategoriesByCreditCardID(cardID);

        await API(req, res);

        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith(expectedResponse);
    });
});