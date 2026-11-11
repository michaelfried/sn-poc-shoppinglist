import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['b622ea9a52a54fb382a3753561bfc82e'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '9d7d7b8d7f444bcd903d5549ed0b9fbb',
        filter: 'purchased=false^ORDERBYstore^ORDERBYcategory',
        hint: 'Items still to buy, grouped by store and category',
        link_type: 'FILTER',
        mobile_view_name: 'Mobile',
        name: 'x_605857_shoppin_0_item',
        order: 100,
        override_menu_roles: false,
        require_confirmation: true,
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'To Buy',
        uncancelable: false,
    },
})
