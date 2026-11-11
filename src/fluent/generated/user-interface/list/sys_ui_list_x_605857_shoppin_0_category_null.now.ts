import { default_view, List } from '@servicenow/sdk/core'

List({
    table: 'x_605857_shoppin_0_category',
    view: default_view,
    columns: ['name', 'description', 'sort_order', 'active'],
})
