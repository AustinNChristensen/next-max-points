import MongoClient from '../../../lib/mongoDB/client';
import { getAllCreditCards } from '../../../lib/mongoDB/models/CreditCard/CreditCardMutations';
import { ICreditCardModel } from '../../../lib/mongoDB/models/CreditCard/types';
import { AllCardsContainer } from '../../components/CardsPage/AllCardsContainer';
import { DashboardLayout } from '../../components/layouts/dashboard/DashboardLayout';

interface Props {
    allCards: ICreditCardModel[];
}

const Home = ({ allCards }: Props) => {
    return (
        <div className='h-full bg-gray-100'>
            <DashboardLayout>
                <AllCardsContainer allCards={allCards} />
            </DashboardLayout>
        </div>
    );
};
// @ts-ignore
export const getServerSideProps = async () => {
    try {
        await MongoClient;

        const allCards = await getAllCreditCards();

        return {
            props: {
                allCards: JSON.parse(JSON.stringify(allCards))
            }
        };
    } catch {
        return {
            props: {
                allCards: []
            }
        };
    }
};

export default Home;