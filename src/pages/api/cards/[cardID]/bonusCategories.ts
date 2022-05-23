import { NextApiRequest, NextApiResponse } from 'next';
import { getBonusCategoriesByCreditCardID } from '../../../../../lib/mongoDB/models/CreditCard/CreditCardMutations';

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    let { cardID } = req.query;
    if (typeof cardID === 'object') {
        cardID = cardID[0];
    }

    switch (req.method) {
        case 'GET':
            try {
                const categories = await getBonusCategoriesByCreditCardID(req.query.cardID.toString());
                res.status(200).json(categories);
            } catch (error) {
                res.status(404).end();
            }
            break;
        default:
            res.status(500).json({ message: 'Operation not permitted' });
    }
}

export default handler;