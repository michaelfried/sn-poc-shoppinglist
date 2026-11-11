import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '958d73f11d024f929bc08b78df48a294'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'bd15acd0db0f4e28b41d673979e5dca8'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '014f432284af415caa26d85621a90611'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'unit'
                            value: 'ml'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0244af8c5a574451896f8e1a68c9d0ba'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '03652c864e0a4a1d8ba78e96eedbd9e8'
                        key: {
                            name: 'x_605857_shoppin_0_category'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '041df8c445eb40779da260ceabf0f498'
                        key: {
                            sys_ui_section: {
                                id: '6af624c4784e426c86dfb5f7b755f68b'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    caption: 'Shopping Item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '069dc461d8c949bd9c2e2c7c93970e6e'
                        key: {
                            list_id: {
                                id: '2f79882f5ce44ffda05b41c0af745665'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_605857_shoppin_0_store'
                                }
                            }
                            element: 'purchased'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '0705a987c1a840ce88725e969c6e46ef'
                        key: {
                            list_id: {
                                id: 'b24d2b8d78694fa6b4a752ebcced0569'
                                key: {
                                    name: 'x_605857_shoppin_0_category'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '09804b8afce842129d249d219aa77ffe'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0d31a2c174224f84a885eccc18b80728'
                        key: {
                            name: 'x_605857_shoppin_0_category'
                            element: 'sort_order'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0e558412963d437ba7121f56abd1f271'
                        key: {
                            sys_ui_section: {
                                id: '240d026ddd184368a37019dae71487ad'
                                key: {
                                    name: 'x_605857_shoppin_0_category'
                                    caption: 'Category'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0e77c90b4a2f46f4b9762969c84d1186'
                        key: {
                            name: 'x_605857_shoppin_0_store'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0e7b48b6e7624b4aa8b9582fda0d5f90'
                        key: {
                            sys_ui_section: {
                                id: '1ae055c84ea544cd839d12a191d83342'
                                key: {
                                    name: 'x_605857_shoppin_0_store'
                                    caption: 'Store'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0f047f0fec734233b4648fd2891c6f00'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'priority'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '0fc57fa4c3a45710c871f61d050131f3'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '13276f595b6e41d2898ec63ff1655ce2'
                        key: {
                            list_id: {
                                id: '2f79882f5ce44ffda05b41c0af745665'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_605857_shoppin_0_store'
                                }
                            }
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '16e0be4c91a94ff6b3052a9beff4b02b'
                        key: {
                            list_id: {
                                id: '84cf171b12f14a54a57f98c8475424ce'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'unit'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '16e7f7a76f6b476d9d64c157921bd9d2'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'purchased_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '17734b3e84ca4e629452826aaef31093'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'priority'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '18875ff13f3a49369fbe9e44d1b361fc'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'unit'
                            value: 'lb'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '1ae055c84ea544cd839d12a191d83342'
                        key: {
                            name: 'x_605857_shoppin_0_store'
                            caption: 'Store'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1afcf60df49a4f79ac4f80b78b36817b'
                        key: {
                            name: 'x_605857_shoppin_0_category'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1c0ca907917e474a940151aeaab31fe1'
                        key: {
                            sys_ui_section: {
                                id: '6af624c4784e426c86dfb5f7b755f68b'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    caption: 'Shopping Item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'purchased'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1c141d691a254865847bfd90a2e4c58b'
                        key: {
                            name: 'x_605857_shoppin_0_store'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1ea3acf9118645679bf1c8b58bb6ac0f'
                        key: {
                            name: 'x_605857_shoppin_0_category'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1eeed89f51384b7780857ab932586213'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '219d8a7334694ec297874fb7e85a9a74'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'unit'
                            value: 'l'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '22a22fd19e34406893f8ffbbaff1f1ab'
                        key: {
                            sys_ui_section: {
                                id: '240d026ddd184368a37019dae71487ad'
                                key: {
                                    name: 'x_605857_shoppin_0_category'
                                    caption: 'Category'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '22f3af7d6a3d40e99722a0445abeb68a'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'store'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '232094e2c6184d48bdf620a9f72a54f2'
                        key: {
                            list_id: {
                                id: '2f79882f5ce44ffda05b41c0af745665'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_605857_shoppin_0_store'
                                }
                            }
                            element: 'unit'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '240d026ddd184368a37019dae71487ad'
                        key: {
                            name: 'x_605857_shoppin_0_category'
                            caption: 'Category'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '259085ddca8e4dd5bda3cf36027deead'
                        key: {
                            list_id: {
                                id: '59015f6beb2c410abb7a8f45b38fe416'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_605857_shoppin_0_category'
                                }
                            }
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '25dccb57eabc4bddaa457b20b3f6e104'
                        key: {
                            list_id: {
                                id: '59015f6beb2c410abb7a8f45b38fe416'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_605857_shoppin_0_category'
                                }
                            }
                            element: 'price'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '27afffd0b8714ad6bb26fa29965933fd'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'unit'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '291a59afe69e410fa0ebab5c144cd663'
                        key: {
                            name: 'x_605857_shoppin_0_category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ced861dcc1546d286156f37ccd9ae96'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '2cf9c40de4c549aea8bbe7de31e6bf13'
                        key: {
                            name: 'x_605857_shoppin_0_store'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '2f79882f5ce44ffda05b41c0af745665'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'x_605857_shoppin_0_store'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '39a656001af1490aa4a4cfacd5adc19c'
                        key: {
                            name: 'x_605857_shoppin_0_store'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a40597902a54363b31f561915c5fbad'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'purchased'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3f072fef019e49f9918f5b82fe31cc54'
                        key: {
                            name: 'x_605857_shoppin_0_category'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '429e1bb25b1e47b8a43a227193a4147b'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'purchased_on'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '462cd0448c8e4848af58a7c9b3e586c4'
                        key: {
                            list_id: {
                                id: '2f79882f5ce44ffda05b41c0af745665'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_605857_shoppin_0_store'
                                }
                            }
                            element: 'price'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4699d5125b3a469cb5c0aa64fec0acf1'
                        key: {
                            name: 'x_605857_shoppin_0_store'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '46a973fd5f2f43bcaece3cc6d9dd1ec8'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'unit'
                            value: 'each'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4b005a6ccd4b444c8bb4afca13b398bd'
                        key: {
                            list_id: {
                                id: '59015f6beb2c410abb7a8f45b38fe416'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_605857_shoppin_0_category'
                                }
                            }
                            element: 'purchased'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4c1b6a768da54319b9d9a36766535ed8'
                        key: {
                            sys_ui_section: {
                                id: '6af624c4784e426c86dfb5f7b755f68b'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    caption: 'Shopping Item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'category'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4c7c82b55a334c848072e2edd09d3c20'
                        key: {
                            sys_ui_section: {
                                id: '6af624c4784e426c86dfb5f7b755f68b'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    caption: 'Shopping Item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'notes'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4f360b2633264c54876654ddce648a13'
                        key: {
                            sys_ui_section: {
                                id: '6af624c4784e426c86dfb5f7b755f68b'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    caption: 'Shopping Item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5423e6bb26f04eec86901c2c09549851'
                        key: {
                            name: 'x_605857_shoppin_0_store'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '54315ebfca4a4e66ac649cda009a92c5'
                        key: {
                            logical_table_name: 'x_605857_shoppin_0_item'
                            col_name_string: 'store'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '57504655b9ac43ecb5c2226d821f953b'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '582d6994ca3a4d3f9ae6b943e486ab61'
                        key: {
                            list_id: {
                                id: '59015f6beb2c410abb7a8f45b38fe416'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_605857_shoppin_0_category'
                                }
                            }
                            element: 'unit'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '59015f6beb2c410abb7a8f45b38fe416'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'x_605857_shoppin_0_category'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '61cabef00df7498f91ebe10e7ab10c19'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '62c57fa4c3a45710c871f61d0501318c'
                        key: {
                            name: 'x_605857_shoppin_0_category'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '64f96f49fc6c4fa98807235cbb5a1fb0'
                        key: {
                            list_id: {
                                id: '84cf171b12f14a54a57f98c8475424ce'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '684575a3434d49ffa3a4d715f27d81e3'
                        key: {
                            list_id: {
                                id: '84cf171b12f14a54a57f98c8475424ce'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'store'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '6af624c4784e426c86dfb5f7b755f68b'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            caption: 'Shopping Item'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b5177d4659344a9ad36efabc261bfe5'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6eca56e3df81485aad4b93a32aabb91e'
                        key: {
                            sys_ui_section: {
                                id: '6af624c4784e426c86dfb5f7b755f68b'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    caption: 'Shopping Item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'quantity'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6ecb779c5ccc4284a3dbb89c2909df79'
                        key: {
                            sys_ui_section: {
                                id: '6af624c4784e426c86dfb5f7b755f68b'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    caption: 'Shopping Item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'unit'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6ff678bc412a4325b41db206df23e81b'
                        key: {
                            sys_ui_section: {
                                id: '6af624c4784e426c86dfb5f7b755f68b'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    caption: 'Shopping Item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'purchased_on'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '7008e7f5124641f2a5e9efac254a0a48'
                        key: {
                            list_id: {
                                id: '2cf9c40de4c549aea8bbe7de31e6bf13'
                                key: {
                                    name: 'x_605857_shoppin_0_store'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '74210efbe3d840feadace151a8ada37b'
                        key: {
                            list_id: {
                                id: '84cf171b12f14a54a57f98c8475424ce'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '789bcf4677bc422abca5a19375d13e86'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '78ae3e773f9d4117b6287d87ff293979'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7c46ac16309c421db4b5bcf8a48ac6fd'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7c8c027681ad48dda638ec80f0424879'
                        key: {
                            sys_ui_section: {
                                id: '1ae055c84ea544cd839d12a191d83342'
                                key: {
                                    name: 'x_605857_shoppin_0_store'
                                    caption: 'Store'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '7e6ba65e57d44de188e80cd6108d1149'
                        key: {
                            logical_table_name: 'x_605857_shoppin_0_item'
                            col_name_string: 'category'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '812f69b127ba4efe8e209aea9413d573'
                        key: {
                            list_id: {
                                id: '2cf9c40de4c549aea8bbe7de31e6bf13'
                                key: {
                                    name: 'x_605857_shoppin_0_store'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '84cf171b12f14a54a57f98c8475424ce'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '85bc863511814bcba1deb57f05e796a1'
                        key: {
                            list_id: {
                                id: '84cf171b12f14a54a57f98c8475424ce'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '86e8ec38235741caa6424f4608aa613a'
                        key: {
                            sys_ui_form: {
                                id: '9946e0b5be694c57bb4efc5d39557141'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '6af624c4784e426c86dfb5f7b755f68b'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    caption: 'Shopping Item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '87621ec43ef2462799646d98dc929381'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8905b481216e411087136739561ac5a0'
                        key: {
                            list_id: {
                                id: '2cf9c40de4c549aea8bbe7de31e6bf13'
                                key: {
                                    name: 'x_605857_shoppin_0_store'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'location'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '89a6ca4d06a04824acab7a03ca2c32ef'
                        key: {
                            name: 'x_605857_shoppin_0_store'
                            element: 'location'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8a7a1164466e4c1598300e0241301f89'
                        key: {
                            list_id: {
                                id: '2f79882f5ce44ffda05b41c0af745665'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_605857_shoppin_0_store'
                                }
                            }
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8d71c50cfcf84c968d4a16d0a9813f3f'
                        key: {
                            list_id: {
                                id: '84cf171b12f14a54a57f98c8475424ce'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'purchased'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '8f112ed148894516b4a17b324f1f0a92'
                        key: {
                            list_id: {
                                id: '59015f6beb2c410abb7a8f45b38fe416'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_605857_shoppin_0_category'
                                }
                            }
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9295a8c540dd4ed8b6bb6c20b09ee9ca'
                        key: {
                            sys_ui_section: {
                                id: '1ae055c84ea544cd839d12a191d83342'
                                key: {
                                    name: 'x_605857_shoppin_0_store'
                                    caption: 'Store'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'notes'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '931c89d617a94c42ad29bcab4e0e4f51'
                        key: {
                            sys_ui_form: {
                                id: 'cb4121c4417b437ab189aadbc5fd28a5'
                                key: {
                                    name: 'x_605857_shoppin_0_category'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '240d026ddd184368a37019dae71487ad'
                                key: {
                                    name: 'x_605857_shoppin_0_category'
                                    caption: 'Category'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '948ddb610c7941108fae64bac096864b'
                        key: {
                            name: 'x_605857_shoppin_0_store'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '972e8dfca6994c6aa10b69fdf294b2fd'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '9946e0b5be694c57bb4efc5d39557141'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9cf2814ec1604ea5a3e2afd3f1e1ea71'
                        key: {
                            sys_ui_section: {
                                id: '240d026ddd184368a37019dae71487ad'
                                key: {
                                    name: 'x_605857_shoppin_0_category'
                                    caption: 'Category'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'sort_order'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9d8ee3bb866240309f75d5537ec509a3'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a061d09ee17545e3b97eebb0ee1fb36b'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'unit'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a1c214cb4024498dab7b1a014b9385da'
                        key: {
                            sys_ui_section: {
                                id: '240d026ddd184368a37019dae71487ad'
                                key: {
                                    name: 'x_605857_shoppin_0_category'
                                    caption: 'Category'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a3805604ced34ed69803ae3b8431a970'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'price'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a3be2424e7014a29a77c0416414bcb48'
                        key: {
                            sys_ui_section: {
                                id: '240d026ddd184368a37019dae71487ad'
                                key: {
                                    name: 'x_605857_shoppin_0_category'
                                    caption: 'Category'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'a75305b683de45aeab2ed6247616d5ef'
                        key: {
                            name: 'x_605857_shoppin_0_store'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a7b5de9cdc9640d3b995e90e3517ff7e'
                        key: {
                            list_id: {
                                id: '59015f6beb2c410abb7a8f45b38fe416'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_605857_shoppin_0_category'
                                }
                            }
                            element: 'store'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7ddbe5c7f7f40a1acadf6f4ec001119'
                        key: {
                            name: 'x_605857_shoppin_0_category'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a8b234aeb1774b79b576d5240e5f8257'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a9bc73b9348b4be488fb397b0cfa95e1'
                        key: {
                            sys_ui_section: {
                                id: '240d026ddd184368a37019dae71487ad'
                                key: {
                                    name: 'x_605857_shoppin_0_category'
                                    caption: 'Category'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aaf4a3a008bb4b65a9909f3fe1d32e13'
                        key: {
                            name: 'x_605857_shoppin_0_store'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ac4f80e6f49e4c3383b40e5f786367a3'
                        key: {
                            sys_ui_section: {
                                id: '6af624c4784e426c86dfb5f7b755f68b'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    caption: 'Shopping Item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'priority'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'afeca69d1f0642429a8c1464882ba84a'
                        key: {
                            name: 'x_605857_shoppin_0_store'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'aff3384e98d147469b1898cde971770e'
                        key: {
                            logical_table_name: 'x_605857_shoppin_0_item'
                            col_name_string: 'purchased,store'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b02823b02bd449f59303ef9ae428d2b0'
                        key: {
                            sys_ui_section: {
                                id: '6af624c4784e426c86dfb5f7b755f68b'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    caption: 'Shopping Item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'store'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b16c212d4a1e40ed9255913b2f24d5fe'
                        key: {
                            sys_ui_section: {
                                id: '1ae055c84ea544cd839d12a191d83342'
                                key: {
                                    name: 'x_605857_shoppin_0_store'
                                    caption: 'Store'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'b24d2b8d78694fa6b4a752ebcced0569'
                        key: {
                            name: 'x_605857_shoppin_0_category'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b7d0d70980a64700b67d6eaff975b9ad'
                        key: {
                            sys_ui_section: {
                                id: '1ae055c84ea544cd839d12a191d83342'
                                key: {
                                    name: 'x_605857_shoppin_0_store'
                                    caption: 'Store'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bd11b424c0614ea5b7eef97b28d2fd64'
                        key: {
                            name: 'x_605857_shoppin_0_category'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'be468c01a0974ecabdfb44727acb78db'
                        key: {
                            sys_ui_section: {
                                id: '240d026ddd184368a37019dae71487ad'
                                key: {
                                    name: 'x_605857_shoppin_0_category'
                                    caption: 'Category'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'be603116c95840d8a13a306229540b43'
                        key: {
                            sys_ui_section: {
                                id: '6af624c4784e426c86dfb5f7b755f68b'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    caption: 'Shopping Item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'price'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'befe39ef50b848f9b637a29bcca0a6bd'
                        key: {
                            list_id: {
                                id: 'b24d2b8d78694fa6b4a752ebcced0569'
                                key: {
                                    name: 'x_605857_shoppin_0_category'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c0924919127144b2966d02186e3e01ee'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'purchased'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c42a070f69b146558ac944d83952d98e'
                        key: {
                            name: 'x_605857_shoppin_0_category'
                            element: 'sort_order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c893156dcec6444b9ef76136d6cc7f60'
                        key: {
                            name: 'x_605857_shoppin_0_category'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'cb4121c4417b437ab189aadbc5fd28a5'
                        key: {
                            name: 'x_605857_shoppin_0_category'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cd57fdefb7414ef8b18f056041ad5e90'
                        key: {
                            sys_ui_section: {
                                id: '1ae055c84ea544cd839d12a191d83342'
                                key: {
                                    name: 'x_605857_shoppin_0_store'
                                    caption: 'Store'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'location'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ce90a3b136964b5f8adc2695898dc4d4'
                        key: {
                            list_id: {
                                id: '84cf171b12f14a54a57f98c8475424ce'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd377f707db504cd6a936b3dfdd5d7b2b'
                        key: {
                            sys_ui_section: {
                                id: '6af624c4784e426c86dfb5f7b755f68b'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    caption: 'Shopping Item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd4b6b3d79c3e4e38922fd62ff6e58133'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'unit'
                            value: 'pack'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd5789ff4919d4be5a7f8ca591bb1d32d'
                        key: {
                            sys_ui_section: {
                                id: '6af624c4784e426c86dfb5f7b755f68b'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    caption: 'Shopping Item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd9dedad1e70e4193bbe95e3f5ce2b145'
                        key: {
                            list_id: {
                                id: 'b24d2b8d78694fa6b4a752ebcced0569'
                                key: {
                                    name: 'x_605857_shoppin_0_category'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e272cbfbc94f40188b453475e256c433'
                        key: {
                            list_id: {
                                id: '84cf171b12f14a54a57f98c8475424ce'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'price'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e6c4474a50114965a75f70ef5380bd19'
                        key: {
                            name: 'x_605857_shoppin_0_store'
                            element: 'location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e7548982cf834f87a95af0790ae819a3'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e9105afaf01549408f5321debbea84f8'
                        key: {
                            name: 'x_605857_shoppin_0_category'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ead8cb4f400d48ddbe6496d4ba299038'
                        key: {
                            list_id: {
                                id: 'b24d2b8d78694fa6b4a752ebcced0569'
                                key: {
                                    name: 'x_605857_shoppin_0_category'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sort_order'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'ebc5ffa4c3a45710c871f61d05013136'
                        key: {
                            name: 'x_605857_shoppin_0_store'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ebfb2039341d4d56adf96a2ed8947fc1'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'unit'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ee4e2ea6fbc741af8ff6014bcdfacee5'
                        key: {
                            sys_ui_section: {
                                id: '1ae055c84ea544cd839d12a191d83342'
                                key: {
                                    name: 'x_605857_shoppin_0_store'
                                    caption: 'Store'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ee98daab99ac4e52ab0a9dcd9c820476'
                        key: {
                            name: 'x_605857_shoppin_0_store'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'efb484355c604c5ba1947fb9fa5b3fe0'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'store'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f206a2f775e7410db4a7a1d569aedb5e'
                        key: {
                            list_id: {
                                id: '2f79882f5ce44ffda05b41c0af745665'
                                key: {
                                    name: 'x_605857_shoppin_0_item'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_605857_shoppin_0_store'
                                }
                            }
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f459a58179394aac8e1af3df886035ca'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'unit'
                            value: 'kg'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f8571d6230264d94aba6c53f08fb4f8a'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'priority'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f9ff2c13c0c74d1283f01211110d90c5'
                        key: {
                            name: 'x_605857_shoppin_0_item'
                            element: 'unit'
                            value: 'g'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'fc50617409b54e87ab4d821ca5ddc7db'
                        key: {
                            sys_ui_form: {
                                id: 'a75305b683de45aeab2ed6247616d5ef'
                                key: {
                                    name: 'x_605857_shoppin_0_store'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '1ae055c84ea544cd839d12a191d83342'
                                key: {
                                    name: 'x_605857_shoppin_0_store'
                                    caption: 'Store'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                ]
            }
        }
    }
}
