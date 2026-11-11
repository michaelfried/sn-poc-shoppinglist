import { BooleanColumn, IntegerColumn, StringColumn, Table } from '@servicenow/sdk/core'

export const x_605857_shoppin_0_category = Table({
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
    label: 'Category',
    name: 'x_605857_shoppin_0_category',
    schema: {
        active: BooleanColumn({
            default: true,
        }),
        name: StringColumn({
            label: 'Category',
            mandatory: true,
            maxLength: 100,
        }),
        sort_order: IntegerColumn({
            default: '100',
            label: 'Sort order',
        }),
        description: StringColumn({
            maxLength: 200,
        }),
    },
    createAccessControls: true,
})
