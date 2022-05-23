import { mockRequest, mockResponse } from 'jest-mock-req-res';
import { allBonusPointCategories } from '../../../lib/mongoDB/models/Category/Category.data';
import API from '../../../src/pages/api/categories/index';

describe('/api/categories', () => {
    const allCategories = allBonusPointCategories;

    test('GET', async () => {
        const req = mockRequest({
            method: 'GET'
        });
        const res = mockResponse();

        const expectedResponse = allCategories;

        await API(req, res);

        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith(expectedResponse);
    });
});