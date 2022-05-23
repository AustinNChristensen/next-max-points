import { mockRequest, mockResponse } from 'jest-mock-req-res';
import MongoClient from '../../../lib/mongoDB/client';
import { allCreditCardsTestData } from '../../../lib/mongoDB/models/CreditCard/CreditCard.data';
import { createNewCreditCard, getAllCreditCards, getCreditCardByID, seedCreditCardCollection, updateCreditCardByID } from '../../../lib/mongoDB/models/CreditCard/CreditCardMutations';
import API from '../../../src/pages/api/cards/[cardID]/index';

describe('/api/cards/[cardID]', () => {
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

        const expectedResponse = await getCreditCardByID(cardID);

        await API(req, res);

        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith(expectedResponse);
    });

    test('PUT', async () => {
        const inputData = allCreditCardsTestData[0];

        const inputItem = await createNewCreditCard(inputData);

        const updateData = {
            issuer: 'Capital One',
            signUpBonus: 12348993
        };

        const expectedResponse = await updateCreditCardByID(inputItem._id, updateData);

        const req = mockRequest({
            method: 'PUT',
            body: JSON.stringify({
                ...updateData
            }),
            query: {
                cardID: inputItem._id
            }
        });

        const res = mockResponse();

        await API(req, res);

        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
            _id: expectedResponse._id,
            signUpBonus: updateData.signUpBonus,
            issuer: updateData.issuer
        }));
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    test('DELETE', async () => {
        const inputData = allCreditCardsTestData[0];

        const inputItem = await createNewCreditCard(inputData);

        const req = mockRequest({
            method: 'DELETE',
            query: {
                cardID: inputItem._id
            }
        });

        const res = mockResponse();

        await API(req, res);

        const expectToBeNull = await getCreditCardByID(inputItem._id);

        expect(expectToBeNull).toBe(null);

        expect(res.json).toHaveBeenCalledTimes(0);
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(204);
    });
});