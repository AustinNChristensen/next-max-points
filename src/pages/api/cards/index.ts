import type { NextApiRequest, NextApiResponse } from 'next';
import { createNewCreditCard, getAllCreditCards } from '../../../../lib/mongoDB/models/CreditCard/CreditCardMutations';
import { IPostNewCreditCard } from '../../../../lib/mongoDB/models/CreditCard/types';

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    switch (req.method) {
        case 'POST':
            try {
                const newCard = await createNewCreditCard(JSON.parse(req.body) as IPostNewCreditCard);
                res.status(201).json({ id: newCard });
            } catch ({ message }) {
                res.status(400).json({ error: message });
            }
            break;
        case 'GET':
        default:
            try {
                const allCards = await getAllCreditCards();
                res.status(200).json(allCards);
            } catch ({ message }) {
                res.status(404).json({ error: message });
            }
            break;
    }
}

export default handler;