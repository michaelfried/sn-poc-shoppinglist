import {
    BooleanColumn,
    ChoiceColumn,
    DateColumn,
    DecimalColumn,
    IntegerColumn,
    MultiLineTextColumn,
    ReferenceColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core'

export const x_605857_shoppin_0_item = Table({
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowConfiguration: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    attributes: {
        enforce_dot_walk_cross_scope_access: true,
    },
    display: 'name',
    index: [
        {
            name: 'index',
            unique: false,
            element: 'category',
        },
        {
            name: 'index2',
            unique: false,
            element: ['purchased', 'store'],
        },
        {
            name: 'index3',
            unique: false,
            element: 'store',
        },
    ],
    label: 'Shopping Item',
    name: 'x_605857_shoppin_0_item',
    schema: {
        price: DecimalColumn({
            label: 'Estimated price',
        }),
        purchased_on: DateColumn({
            label: 'Purchased on',
        }),
        priority: IntegerColumn({
            default: '2',
            choices: {
                1: {
                    label: 'High',
                    sequence: 1,
                },
                2: {
                    label: 'Normal',
                    sequence: 2,
                },
                3: {
                    label: 'Low',
                    sequence: 3,
                },
            },
        }),
        store: ReferenceColumn({
            cascadeRule: 'clear',
            referenceTable: 'x_605857_shoppin_0_store',
            referenceQual: 'active=true',
            useReferenceQualifier: 'simple',
        }),
        quantity: DecimalColumn({
            default: '1',
        }),
        purchased: BooleanColumn({
            default: false,
        }),
        unit: ChoiceColumn({
            default: 'each',
            choices: {
                each: {
                    label: 'Each',
                    sequence: 100,
                },
                pack: {
                    label: 'Pack',
                    sequence: 200,
                },
                kg: {
                    label: 'Kilogram',
                    sequence: 300,
                },
                g: {
                    label: 'Gram',
                    sequence: 400,
                },
                lb: {
                    label: 'Pound',
                    sequence: 500,
                },
                l: {
                    label: 'Liter',
                    sequence: 600,
                },
                ml: {
                    label: 'Milliliter',
                    sequence: 700,
                },
            },
            dropdown: 'dropdown_with_none',
        }),
        notes: MultiLineTextColumn({
            maxLength: 1000,
        }),
        category: ReferenceColumn({
            cascadeRule: 'clear',
            referenceTable: 'x_605857_shoppin_0_category',
            referenceQual: 'active=true',
            useReferenceQualifier: 'simple',
        }),
        name: StringColumn({
            label: 'Item',
            mandatory: true,
            maxLength: 100,
        }),
    },
    createAccessControls: true,
})
