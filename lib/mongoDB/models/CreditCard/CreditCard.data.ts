import { ICreditCardSchema, TCardIssuer, TCardType } from './types';

export const allCreditCardIssuers: TCardIssuer[] = ['Amex', 'Chase', 'Capital One'];

export const allCreditCardTypes: TCardType[] = ['Personal', 'Business'];

export const allCreditCardsTestData: ICreditCardSchema[] = [
    {
        slug: 'Chase-Sapphire-Reserve',
        displayName: 'Chase Sapphire Reserve',
        issuer: 'Chase',
        type: 'Personal',
        annualFee: 550,
        signUpBonus: 50000,
        pointMultiplierValue: 1.5,
        bonusCategories: [
            {
                categoryName: 'Dining',
                multiplier: 3
            },
            {
                categoryName: 'Travel',
                multiplier: 3
            },
            {
                categoryName: 'Everything Else',
                multiplier: 1
            }
        ]
    },
    {
        slug: 'Chase-Sapphire-Preferred',
        displayName: 'Chase Sapphire Preferred',
        issuer: 'Chase',
        type: 'Personal',
        annualFee: 95,
        signUpBonus: 80000,
        pointMultiplierValue: 1.25,
        bonusCategories: [
            {
                categoryName: 'Dining',
                multiplier: 2
            },
            {
                categoryName: 'Travel',
                multiplier: 2
            },
            {
                categoryName: 'Everything Else',
                multiplier: 1
            },
            {
                categoryName: 'Online Grocery',
                multiplier: 3
            },
            {
                categoryName: 'Streaming',
                multiplier: 3
            }
        ]
    },
    {
        slug: 'Chase-Freedom-Flex',
        displayName: 'Chase Freedom Flex',
        issuer: 'Chase',
        type: 'Personal',
        annualFee: 0,
        signUpBonus: 20000,
        pointMultiplierValue: 1,
        bonusCategories: [
            {
                categoryName: 'Dining',
                multiplier: 3
            },
            {
                categoryName: 'Drug Stores',
                multiplier: 3
            },
            {
                categoryName: 'Travel',
                multiplier: 5
            },
            {
                categoryName: 'Everything Else',
                multiplier: 1
            }
        ]
    },
    {
        slug: 'Chase-Freedom-Unlimited',
        displayName: 'Chase Freedom Unlimited',
        issuer: 'Chase',
        type: 'Personal',
        annualFee: 0,
        signUpBonus: 20000,
        pointMultiplierValue: 1,
        bonusCategories: [
            {
                categoryName: 'Gas',
                multiplier: 5
            },
            {
                categoryName: 'Travel',
                multiplier: 5
            },
            {
                categoryName: 'Everything Else',
                multiplier: 1.5
            },
            {
                categoryName: 'Dining',
                multiplier: 3
            },
            {
                categoryName: 'Drug Stores',
                multiplier: 3
            }
        ]
    },
    {
        slug: 'Amex-Platinum',
        displayName: 'Amex Platinum',
        issuer: 'Amex',
        type: 'Personal',
        annualFee: 695,
        signUpBonus: 150000,
        pointMultiplierValue: 1,
        bonusCategories: [
            {
                categoryName: 'Flights',
                multiplier: 5
            },
            {
                categoryName: 'Hotels',
                multiplier: 5
            },
            {
                categoryName: 'Everything Else',
                multiplier: 1
            }
        ]
    },
    {
        slug: 'Amex-Gold',
        displayName: 'Amex Gold',
        issuer: 'Amex',
        type: 'Personal',
        annualFee: 250,
        signUpBonus: 60000,
        pointMultiplierValue: 1,
        bonusCategories: [
            {
                categoryName: 'Dining',
                multiplier: 4
            },
            {
                categoryName: 'Flights',
                multiplier: 3
            },
            {
                categoryName: 'Everything Else',
                multiplier: 1
            },
            {
                categoryName: 'Groceries',
                multiplier: 4
            }
        ]
    },
    {
        slug: 'Amex-Green',
        displayName: 'Amex Green',
        issuer: 'Amex',
        type: 'Personal',
        annualFee: 150,
        signUpBonus: 40000,
        pointMultiplierValue: 1,
        bonusCategories: [
            {
                categoryName: 'Dining',
                multiplier: 3
            },
            {
                categoryName: 'Travel',
                multiplier: 3
            },
            {
                categoryName: 'Transit',
                multiplier: 3
            }
        ]
    },
    {
        slug: 'Amex-Blue-Cash EveryDay',
        displayName: 'Amex Blue Cash EveryDay',
        issuer: 'Amex',
        type: 'Personal',
        annualFee: 0,
        signUpBonus: 20000,
        pointMultiplierValue: 1,
        bonusCategories: [
            {
                categoryName: 'Groceries',
                multiplier: 3
            },
            {
                categoryName: 'Gas',
                multiplier: 2
            },
            {
                categoryName: 'Everything Else',
                multiplier: 1
            }
        ]
    },
    {
        slug: 'Amex-EveryDay',
        displayName: 'Amex EveryDay',
        issuer: 'Amex',
        type: 'Personal',
        annualFee: 0,
        signUpBonus: 10000,
        pointMultiplierValue: 1,
        bonusCategories: [
            {
                categoryName: 'Groceries',
                multiplier: 2
            },
            {
                categoryName: 'Everything Else',
                multiplier: 1
            }
        ]
    },
    {
        slug: 'Capital-One-Venture',
        displayName: 'Capital One Venture',
        issuer: 'Capital One',
        type: 'Personal',
        annualFee: 95,
        signUpBonus: 80000,
        pointMultiplierValue: 1.25,
        bonusCategories: [
            {
                categoryName: 'Everything Else',
                multiplier: 2
            },
            {
                categoryName: 'Hotels',
                multiplier: 5
            },
            {
                categoryName: 'Rental Cars',
                multiplier: 5
            }
        ]
    },
    {
        slug: 'Captial-One-Venture X',
        displayName: 'Captial One Venture X',
        issuer: 'Capital One',
        type: 'Personal',
        annualFee: 395,
        signUpBonus: 75000,
        pointMultiplierValue: 1,
        bonusCategories: [
            {
                categoryName: 'Travel',
                multiplier: 5
            },
            {
                categoryName: 'Everything Else',
                multiplier: 2
            },
            {
                categoryName: 'Rental Cars',
                multiplier: 10
            },
            {
                categoryName: 'Hotels',
                multiplier: 10
            }
        ]
    },
    {
        slug: 'Amex-Business-Gold',
        displayName: 'Amex Business Gold',
        issuer: 'Amex',
        type: 'Business',
        annualFee: 295,
        signUpBonus: 70000,
        pointMultiplierValue: 1,
        bonusCategories: [
            {
                categoryName: 'Advertising',
                multiplier: 2
            },
            {
                categoryName: 'Computer Hardware',
                multiplier: 2
            },
            {
                categoryName: 'Everything Else',
                multiplier: 1
            }
        ]
    },
    {
        slug: 'Amex-Business-Platinum',
        displayName: 'Amex Business Platinum',
        issuer: 'Amex',
        type: 'Business',
        annualFee: 695,
        signUpBonus: 120000,
        pointMultiplierValue: 1,
        bonusCategories: [
            {
                categoryName: 'Flights',
                multiplier: 5
            },
            {
                categoryName: 'Everything Else',
                multiplier: 2
            },
            {
                categoryName: 'Hotels',
                multiplier: 5
            }
        ]
    },
    {
        slug: 'Chase-Ink-Business Preferred',
        displayName: 'Chase Ink Business Preferred',
        issuer: 'Chase',
        type: 'Business',
        annualFee: 95,
        signUpBonus: 100000,
        pointMultiplierValue: 1.25,
        bonusCategories: [
            {
                categoryName: 'Shipping',
                multiplier: 3
            },
            {
                categoryName: 'Advertising',
                multiplier: 3
            },
            {
                categoryName: 'Internet',
                multiplier: 3
            },
            {
                categoryName: 'Everything Else',
                multiplier: 1
            }
        ]
    },
    {
        slug: 'Chase-Ink-Business Cash',
        displayName: 'Chase Ink Business Cash',
        issuer: 'Chase',
        type: 'Business',
        annualFee: 0,
        signUpBonus: 75000,
        pointMultiplierValue: 1,
        bonusCategories: [
            {
                categoryName: 'Office Supply',
                multiplier: 5
            },
            {
                categoryName: 'Everything Else',
                multiplier: 1
            }
        ]
    },
    {
        slug: 'Chase-Ink-Business Unlimited',
        displayName: 'Chase Ink Business Unlimited',
        issuer: 'Chase',
        type: 'Business',
        annualFee: 0,
        signUpBonus: 75000,
        pointMultiplierValue: 1,
        bonusCategories: [
            {
                categoryName: 'Everything Else',
                multiplier: 1.5
            }
        ]
    }
];