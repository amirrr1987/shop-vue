<template>
    <footer class="py-12 bg-blue-50">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-12 gap-4 text-base">
                <aside class="col-span-12 lg:col-span-3">
                    <article class="">
                        <img src="@/assets/images/logo.webp" class="">
                        <p class="py-4"> © 2018- 2021 Templatemount. <br> All rights reserved. </p>
                    </article>
                </aside>
                <aside class="col-span-6 md:col-span-2">
                    <h6 class="">Store</h6>
                    <ul class="">
                        <li> <a href="#">About us</a></li>
                        <li> <a href="#">Find store</a></li>
                        <li> <a href="#">Categories</a></li>
                        <li> <a href="#">Blogs</a></li>
                    </ul>
                </aside>
                <aside class="col-span-6 md:col-span-2">
                    <h6 class="">Store</h6>
                    <ul class="">
                        <li> <a href="#">About us</a></li>
                        <li> <a href="#">Find store</a></li>
                        <li> <a href="#">Categories</a></li>
                        <li> <a href="#">Blogs</a></li>
                    </ul>
                </aside>
                <aside class="col-span-6 md:col-span-2">
                    <h6 class="">Store</h6>
                    <ul class="">
                        <li> <a href="#">About us</a></li>
                        <li> <a href="#">Find store</a></li>
                        <li> <a href="#">Categories</a></li>
                        <li> <a href="#">Blogs</a></li>
                    </ul>
                </aside>
                <aside class="col-span-6 md:col-span-6 lg:col-span-3">
                    <h6 class="mb-1">Newsletter</h6>
                    <p class="mb-3">Stay in touch with latest updates about our products and offers </p>

                    <Form>
                        <FormItem>
                            <Input class="" type="text" placeholder="Email">
                            <template #suffix>
                                <Button type="text" class="-mr-3 -my-1 !border-0 !border-l border-gray-200 ">
                                    Join
                                </Button>
                            </template>
                            </Input>
                        </FormItem>
                    </Form>


                </aside>
            </div>
            <div class="flex justify-between">
                <div>
                    <i class="fab fa-lg fa-cc-visa"></i>
                    <i class="fab fa-lg fa-cc-amex"></i>
                    <i class="fab fa-lg fa-cc-mastercard"></i>
                    <i class="fab fa-lg fa-cc-paypal"></i>
                </div>
                <Dropdown>
                    <a class="ant-dropdown-link" @click.prevent>
                        Hover me
                        <DownOutlined />
                    </a>
                    <template #overlay>
                        <Menu>
                            <MenuItem>
                            <a href="javascript:;">Russian</a>
                            </MenuItem>
                            <MenuItem>
                            <a href="javascript:;">Arabic</a>
                            </MenuItem>
                            <MenuItem>
                            <a href="javascript:;">Spanish</a>
                            </MenuItem>
                        </Menu>
                    </template>
                    <template #icon>
                        <Icon icon="mdi-light:home" />
                    </template>
                </Dropdown>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
import { Dropdown, Menu, MenuItem, Input, Form, FormItem, Button } from "ant-design-vue";
import { Icon } from '@iconify/vue';
</script>