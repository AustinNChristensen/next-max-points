import MongoClient from '../../../lib/mongoDB/client';
import { TCategoryName } from '../../../lib/mongoDB/models/Category/types';
import { getTopCreditCardsByCategory } from '../../../lib/mongoDB/models/CreditCard/CreditCardMutations';
import { ICreditCardModel } from '../../../lib/mongoDB/models/CreditCard/types';
import { TopCardsContainer } from '../../components/CardsPage/TopCardsContainer';
import { DashboardLayout } from '../../components/layouts/dashboard/DashboardLayout';
import { getAllCategories } from '../api/categories';

interface Props {
    topCardsByCategory: {
        categoryName: TCategoryName;
        cards: ICreditCardModel
    }[];
}

const TopCardsPage = ({ topCardsByCategory }: Props) => {
    return (
        <div className='h-full bg-gray-100'>
            <DashboardLayout>
                <TopCardsContainer topCardsByCategory={topCardsByCategory} />
            </DashboardLayout>
        </div>
    );
};

export const getServerSideProps = async () => {
    try {
        await MongoClient;

        const allCategories = await getAllCategories();

        const allTopCardPromises = allCategories.map((cat) => getTopCreditCardsByCategory(cat));

        const allTopCards = await Promise.all(allTopCardPromises);

        const topCardData = allCategories.map((cat, i) => ({
            categoryName: cat,
            cards: allTopCards[i][0]
        }));

        return {
            props: {
                topCardsByCategory: JSON.parse(JSON.stringify(topCardData))
            }
        };
    } catch {
        return {
            props: {
                topCardsByCategory: {}
            }
        };
    }
};

export default TopCardsPage;