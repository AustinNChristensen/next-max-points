import { TCategoryName } from '../../../lib/mongoDB/models/Category/types';
import { ICreditCardModel } from '../../../lib/mongoDB/models/CreditCard/types';

interface Props {
    topCardsByCategory: {
        categoryName: TCategoryName;
        cards: ICreditCardModel
    }[];
}

export const TopCardsContainer = ({ topCardsByCategory }: Props) => {
    return (
        <div className='px-4 sm:px-6 lg:px-8'>
            <div className='sm:flex sm:items-center'>
                <div className='sm:flex-auto'>
                    <h1 className='text-xl font-semibold text-gray-900'>Top Cards</h1>
                    <p className='mt-2 text-sm text-gray-700'>
                        A list of top Credit Cards by Category
                    </p>
                </div>
            </div>
            <div className='mt-8 flex flex-col'>
                <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden md:rounded-lg'>
                            <ul
                                role='list'
                                className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                            >
                                {topCardsByCategory.map((category) => {
                                    const card = category.cards;
                                    const matchingCategory = card.bonusCategories.find((cat) => cat.categoryName === category.categoryName);
                                    const categoryEarnRate = (matchingCategory?.multiplier || 1) * (card.pointMultiplierValue || 1);
                                    return (
                                        <li
                                            key={card._id.toString()}
                                            className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'
                                        >
                                            <div className='flex-1 flex flex-col p-8'>
                                                <h3 className='mt-6 text-gray-900 text-md font-bold'>{category.categoryName}</h3>
                                                <h3 className='mt-6 text-gray-900 text-sm font-medium'>{card.displayName}</h3>
                                                <dl className='mt-1 flex-grow flex flex-col justify-between'>
                                                    <dd className='text-gray-500 text-sm'>{card.issuer}</dd>
                                                    <dd className='text-gray-500 text-sm'>{card.type}</dd>
                                                    <dd className='mt-3'>
                                                        <span className='px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                                                            {`${categoryEarnRate}%`}
                                                        </span>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};