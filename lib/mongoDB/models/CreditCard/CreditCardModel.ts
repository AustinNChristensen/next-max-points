import { models, model, Schema } from 'mongoose';
import { allBonusPointCategories } from '../Category/Category.data';
import { allCreditCardIssuers, allCreditCardTypes } from './CreditCard.data';
import { ICreditCardSchema, IBonusPointCategory } from './types';

const BonusCategorySchema = new Schema<IBonusPointCategory>({
    categoryName: {
        type: String,
        enum: [...allBonusPointCategories]
    },
    multiplier: {
        type: Number,
        default: 1
    }
});

export const CreditCardSchema = new Schema<ICreditCardSchema>({
    slug: {
        type: String
    },
    displayName: {
        type: String
    },
    issuer: {
        type: String,
        enum: [...allCreditCardIssuers]
    },
    type: {
        type: String,
        enum: [...allCreditCardTypes]
    },
    annualFee: {
        type: Number,
        default: 0
    },
    pointMultiplierValue: {
        type: Number,
        default: 1
    },
    bonusCategories: [BonusCategorySchema],
    signUpBonus: {
        type: Number,
        default: 0
    }
});

export const CreditCardModel = models.CreditCard || model('CreditCard', CreditCardSchema);