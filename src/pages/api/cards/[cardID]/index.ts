import { NextApiRequest, NextApiResponse } from 'next';
import { deleteCreditCardByID, getCreditCardByID, updateCreditCardByID } from '../../../../../lib/mongoDB/models/CreditCard/CreditCardMutations';

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    let { cardID } = req?.query;
    if (typeof cardID === 'object') {
        cardID = cardID[0];
    }

    switch (req.method) {
        case 'GET':
            try {
                const creditCard = await getCreditCardByID(req.query.cardID.toString());
                res.status(200).json(creditCard);
            } catch ({ message }) {
                res.status(404).json({ message });
            }
            break;
        case 'PUT':
            const data = JSON.parse(req.body);

            try {
                if (!data || !req.query.cardID.toString()) {
                    throw new Error('No data provided');
                }
                const updatedCard = await updateCreditCardByID(req.query.cardID.toString(), data.update);
                res.status(200).json(updatedCard);
            } catch ({ message }) {
                res.status(409).json({ message });
            }
            break;
        case 'DELETE':
            try {
                await deleteCreditCardByID(req.query.cardID.toString());
                res.status(204).end();
            } catch ({ message }) {
                res.status(409).json({ message });
            }
            break;
        default:
            res.status(500).json({ message: 'Operation not permitted' });
    }
}

export default handler;