import { default_view, List } from '@servicenow/sdk/core'

List({
    table: 'x_605857_shoppin_0_store',
    view: default_view,
    columns: ['name', 'location', 'active'],
})
