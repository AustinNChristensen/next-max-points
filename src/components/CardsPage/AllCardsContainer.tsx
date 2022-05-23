import { IBonusPointCategory, ICreditCardModel } from '../../../lib/mongoDB/models/CreditCard/types';

interface Props {
    allCards: ICreditCardModel[];
}

export const AllCardsContainer = ({ allCards }: Props) => {
    return (
        <div className='px-4 sm:px-6 lg:px-8'>
            <div className='sm:flex sm:items-center'>
                <div className='sm:flex-auto'>
                    <h1 className='text-xl font-semibold text-gray-900'>All Cards</h1>
                    <p className='mt-2 text-sm text-gray-700'>
                        A list of all Credit Cards
                    </p>
                </div>
            </div>
            <div className='mt-8 flex flex-col'>
                <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-300'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='py-3 pl-4 pr-3 text-center text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6'
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-3 py-3 text-center text-xs font-medium uppercase tracking-wide text-gray-500 hidden md:block'
                                        >
                                            Issuer
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-3 py-3 text-center text-xs font-medium uppercase tracking-wide text-gray-500'
                                        >
                                            Highest Category
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-3 py-3 text-center text-xs font-medium uppercase tracking-wide text-gray-500 hidden md:block'
                                        >
                                            Base Earn Cash Value (cents)
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-3 py-3 text-center text-xs font-medium uppercase tracking-wide text-gray-500'
                                        >
                                            Value / $1
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-200 bg-white'>
                                    {allCards?.map((card: ICreditCardModel) => {
                                        const highestEarnCategory: IBonusPointCategory[] = card.bonusCategories.sort((cat1, cat2) => (cat1.multiplier < cat2.multiplier ? 1 : -1));
                                        const maxPossibleValuePerDollar = (highestEarnCategory[0]?.multiplier || 1) * (card.pointMultiplierValue || 1) / 100;

                                        return (
                                            <tr key={card.slug}>
                                                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-center'>
                                                    {card.displayName}
                                                </td>
                                                <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center hidden md:block'>{card.issuer}</td>
                                                <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center'>{`${highestEarnCategory[0].categoryName} (${highestEarnCategory[0].multiplier || card.pointMultiplierValue}x)`}</td>
                                                <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center hidden md:block'>{`${card.pointMultiplierValue}`}</td>
                                                <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center'>{`$${maxPossibleValuePerDollar}`}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};