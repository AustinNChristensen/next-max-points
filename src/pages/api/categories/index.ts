import type { NextApiRequest, NextApiResponse } from 'next';
import { allBonusPointCategories } from '../../../../lib/mongoDB/models/Category/Category.data';

export const getAllCategories = async () => {
    return await Promise.resolve(allBonusPointCategories);
};

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    switch (req.method) {
        case 'GET':
        default:
            try {
                const allCards = await getAllCategories();
                res.status(200).json(allCards);
            } catch ({ message }) {
                res.status(404).json({ error: message });
            }
            break;
    }
}

export default handler;