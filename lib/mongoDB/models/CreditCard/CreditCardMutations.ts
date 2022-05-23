import { kebabCase } from 'lodash';
import { ObjectId } from 'mongodb';
import { PartialDeep } from 'type-fest';
import MongoClient from '../../client';
import { TCategoryName } from '../Category/types';
import { allCreditCardsTestData } from './CreditCard.data';
import { CreditCardModel } from './CreditCardModel';
import { IBonusPointCategory, ICreditCardModel, ICreditCardSchema, IPostNewCreditCard } from './types';

export const seedCreditCardCollection = async () => {
    MongoClient;

    await CreditCardModel.deleteMany();

    return await CreditCardModel.insertMany(allCreditCardsTestData);
};

export const createNewCreditCard = async (cardData: IPostNewCreditCard): Promise<ICreditCardModel> => {
    MongoClient;

    const newCard: ICreditCardSchema = {
        ...cardData,
        slug: kebabCase(cardData.displayName)
    };

    return await CreditCardModel.create(newCard);
};

export const getAllCreditCards = async (): Promise<ICreditCardModel[]> => {
    MongoClient;
    return await CreditCardModel.find().exec();
};

export const getCreditCardByID = async (cardID: string | ObjectId): Promise<ICreditCardModel> => {
    MongoClient;
    return await CreditCardModel.findById(cardID.toString()).exec();
};

export const updateCreditCardByID = async (cardID: string | ObjectId, data: PartialDeep<ICreditCardModel>): Promise<ICreditCardModel> => {
    MongoClient;
    return await CreditCardModel.findByIdAndUpdate(cardID.toString(), data, { returnDocument: 'after' }).exec();
};

export const deleteCreditCardByID = async (cardID: string | ObjectId): Promise<ICreditCardModel> => {
    MongoClient;
    return await CreditCardModel.findByIdAndDelete(cardID.toString()).exec();
};

export const getBonusCategoriesByCreditCardID = async (cardID: string | ObjectId): Promise<IBonusPointCategory[]> => {
    MongoClient;
    return (await CreditCardModel.findById(cardID.toString()).select('bonusCategories').exec()).bonusCategories;
};

export const getTopCreditCardsByCategory = async (categoryID: TCategoryName): Promise<ICreditCardModel[]> => {
    MongoClient;
    return await CreditCardModel.find({ 'bonusCategories.categoryName': categoryID }).sort(`bonusCategories.multiplier`).limit(25).exec();
};