import { default_view, Form } from '@servicenow/sdk/core'

Form({
    table: 'x_605857_shoppin_0_category',
    view: default_view,
    sections: [
        {
            caption: 'Category',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'name',
                            type: 'table_field',
                        },
                        {
                            field: 'description',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'sort_order',
                            type: 'table_field',
                        },
                        {
                            field: 'active',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
    ],
})
