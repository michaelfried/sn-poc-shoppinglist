import { BooleanColumn, MultiLineTextColumn, StringColumn, Table } from '@servicenow/sdk/core'

export const x_605857_shoppin_0_store = Table({
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
    label: 'Store',
    name: 'x_605857_shoppin_0_store',
    schema: {
        name: StringColumn({
            label: 'Store',
            mandatory: true,
            maxLength: 100,
        }),
        location: StringColumn({
            maxLength: 200,
        }),
        active: BooleanColumn({
            default: true,
        }),
        notes: MultiLineTextColumn({
            maxLength: 1000,
        }),
    },
    createAccessControls: true,
})
