import { default_view, List } from '@servicenow/sdk/core'

List({
    table: 'x_605857_shoppin_0_item',
    view: default_view,
    columns: [
        'name',
        'category',
        'store',
        'quantity',
        'unit',
        {
            element: 'price',
            sum: true,
        },
        'priority',
        'purchased',
    ],
})
