import type { NextApiRequest, NextApiResponse } from 'next';
import { seedCreditCardCollection } from '../../../lib/mongoDB/models/CreditCard/CreditCardMutations';

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const allCards = await seedCreditCardCollection();
        res.status(200).json(allCards);
    } catch ({ message }) {
        res.status(404).json({ error: message });
    }
}

export default handler;