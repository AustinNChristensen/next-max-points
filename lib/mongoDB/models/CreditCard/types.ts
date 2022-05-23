import { ObjectId } from 'mongodb';
import { TCategoryName } from '../Category/types';

export interface IBonusPointCategory {
    // TODO - deploy to vercel, add env vars to vercel
    categoryName: TCategoryName;
    multiplier: number;
}

export type TCardIssuer = 'Amex' | 'Chase' | 'Capital One';

export type TCardType = 'Personal' | 'Business';

export interface ICreditCardSchema {
    slug: string;
    displayName: string;
    issuer: TCardIssuer;
    type: TCardType;
    // default to 0
    annualFee?: number;
    // default to 1
    pointMultiplierValue?: number;
    bonusCategories: IBonusPointCategory[];
    // default to 0
    signUpBonus?: number;
};

export interface ICreditCardModel extends ICreditCardSchema {
    _id: ObjectId;
}

export interface IPostNewCreditCard extends Omit<ICreditCardSchema, 'slug'> {}