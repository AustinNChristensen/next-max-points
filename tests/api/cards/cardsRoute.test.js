import { mockRequest, mockResponse } from 'jest-mock-req-res';
import MongoClient from '../../../lib/mongoDB/client';
import { allCreditCardsTestData } from '../../../lib/mongoDB/models/CreditCard/CreditCard.data';
import { getAllCreditCards, seedCreditCardCollection } from '../../../lib/mongoDB/models/CreditCard/CreditCardMutations';
import API from '../../../src/pages/api/cards/index';

describe('/api/cards', () => {
    beforeEach(async () => {
        MongoClient;
        await seedCreditCardCollection();
    });

    test('GET', async () => {
        const allCreditCards = await getAllCreditCards();

        const req = mockRequest({
            method: 'GET'
        });

        const res = mockResponse();

        await API(req, res);

        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(allCreditCards);
    });

    test('POST', async () => {
        const inputData = allCreditCardsTestData[0];

        const req = mockRequest({
            method: 'POST',
            body: JSON.stringify({
                ...inputData
            })
        });

        const res = mockResponse();

        await API(req, res);

        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(201);
    });
});