import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['5eb11f9986574cce93be2c9253c6cef4'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: '9d7d7b8d7f444bcd903d5549ed0b9fbb',
        filter: 'purchased=true^ORDERBYDESCpurchased_on',
        hint: 'Items already bought',
        link_type: 'FILTER',
        mobile_view_name: 'Mobile',
        name: 'x_605857_shoppin_0_item',
        order: 400,
        override_menu_roles: false,
        require_confirmation: true,
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'Purchased',
        uncancelable: false,
    },
})
