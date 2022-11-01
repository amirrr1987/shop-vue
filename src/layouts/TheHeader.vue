<template>
    <header class="">
        <nav class="py-4 border-b">
            <div class="container mx-auto px-8">
                <div class="grid grid-cols-12 gap-4 items-center">
                    <a href="http://bootstrap-ecommerce.com" class="col-span-2">
                        <img class="logo" height="40" src="@/assets/images/logo.svg">
                    </a>
                    <Form class="col-span-5">
                        <FormItem no-style>
                            <Input type="text" placeholder="Search" class="bg-light-50">
                            <template #suffix>
                                <Dropdown class="w-max">
                                    <Button type="default"
                                        class="!flex justify-center items-center gap-x-4 !border-0 !border-l">
                                        <span class="-order-1">All Types</span>
                                        <template #icon>
                                            <Icon icon="ant-design:down-outlined" />
                                        </template>
                                    </Button>
                                    <template #overlay>
                                        <Menu>
                                            <MenuItem key="1">
                                            <Icon icon="ant-design:down-outlined" />
                                            1st menu item
                                            </MenuItem>
                                            <MenuItem key="2">
                                            <Icon icon="ant-design:down-outlined" />
                                            2nd menu item
                                            </MenuItem>
                                            <MenuItem key="3">
                                            <Icon icon="ant-design:down-outlined" />
                                            3rd item
                                            </MenuItem>
                                        </Menu>
                                    </template>

                                </Dropdown>
                                <Button type="primary" class="!flex justify-center items-center -mr-3 -my-1 !h-10 w-11">
                                    <template #icon>
                                        <Icon class="!text-white" icon="fe:search" />
                                    </template>
                                </Button>
                            </template>
                            </Input>
                        </FormItem>
                    </Form>
                    <div class="col-span-3 col-start-10 flex gap-4">
                        <Button type="default" size="large" class="flex items-center gap-x-4">
                            <template #icon>
                                <Icon icon="icon-park-outline:user" />
                            </template>
                            <span>Sign in</span>
                        </Button>
                        <Button type="default" size="large" class="flex items-center gap-x-4">
                            <template #icon>
                                <Icon icon="icon-park-outline:like" />
                            </template>
                            <span>Wishlist</span>
                        </Button>
                        <Button type="default" size="large" class="flex items-center gap-x-4">
                            <template #icon>
                                <Icon icon="ant-design:shopping-cart-outlined" />
                            </template>
                            <span>My cart</span>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
        <nav class="py-4 border-b">
            <div class="container mx-auto px-4">
                <ul class="flex">
                    <RouterLink to="/categories"><Button type="link">Categories</Button></RouterLink>
                    <RouterLink to="/hot-offers"><Button type="link">Hot offers</Button></RouterLink>
                    <RouterLink to="/gift-boxes"><Button type="link">Gift boxes</Button></RouterLink>
                    <RouterLink to="/projects"><Button type="link">Projects</Button></RouterLink>
                    <Dropdown class="w-max">
                        <Button type="text" class="!flex justify-center items-center gap-x-4">
                            <span class="-order-1">All Types</span>
                            <template #icon>
                                <Icon icon="ant-design:down-outlined" />
                            </template>
                        </Button>
                        <template #overlay>
                            <Menu>
                                <MenuItem key="1">
                                <Icon icon="ant-design:down-outlined" />
                                1st menu item
                                </MenuItem>
                                <MenuItem key="2">
                                <Icon icon="ant-design:down-outlined" />
                                2nd menu item
                                </MenuItem>
                                <MenuItem key="3">
                                <Icon icon="ant-design:down-outlined" />
                                3rd item
                                </MenuItem>
                            </Menu>
                        </template>
                    </Dropdown>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script setup lang="ts">
import { Dropdown, Menu, MenuItem, Input, Form, FormItem, Button } from "ant-design-vue";
import { Icon } from '@iconify/vue';
</script>