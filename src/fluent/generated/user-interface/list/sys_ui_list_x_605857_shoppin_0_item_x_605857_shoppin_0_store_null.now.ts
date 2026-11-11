import { default_view, List } from '@servicenow/sdk/core'

List({
    table: 'x_605857_shoppin_0_item',
    view: default_view,
    parent: 'x_605857_shoppin_0_store',
    columns: [
        'name',
        'category',
        'quantity',
        'unit',
        {
            element: 'price',
            sum: true,
        },
        'purchased',
    ],
})
