import { default_view, Form } from '@servicenow/sdk/core'

Form({
    table: 'x_605857_shoppin_0_store',
    view: default_view,
    sections: [
        {
            caption: 'Store',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'name',
                            type: 'table_field',
                        },
                        {
                            field: 'location',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'active',
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
