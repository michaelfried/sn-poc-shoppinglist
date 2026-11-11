import { default_view, Form } from '@servicenow/sdk/core'

Form({
    table: 'x_605857_shoppin_0_item',
    view: default_view,
    sections: [
        {
            caption: 'Shopping Item',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'name',
                            type: 'table_field',
                        },
                        {
                            field: 'category',
                            type: 'table_field',
                        },
                        {
                            field: 'store',
                            type: 'table_field',
                        },
                        {
                            field: 'priority',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'quantity',
                            type: 'table_field',
                        },
                        {
                            field: 'unit',
                            type: 'table_field',
                        },
                        {
                            field: 'price',
                            type: 'table_field',
                        },
                        {
                            field: 'purchased',
                            type: 'table_field',
                        },
                        {
                            field: 'purchased_on',
                            type: 'table_field',
                        },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'notes',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
    ],
})
