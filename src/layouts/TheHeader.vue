<template>
    <header class="bg-blue-50">
        <nav class="py-4 border-b">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-12 gap-4">
                    <a href="http://bootstrap-ecommerce.com" class="col-span-2">
                        <img class="logo" height="40" src="@/assets/images/logo.svg">
                    </a>
                    <Form class="col-span-7">
                        <FormItem>
                            <Input type="text" placeholder="Search">
                            <template #suffix>
                                <Dropdown>
                                    <a class="ant-dropdown-link flex" @click.prevent>
                                        Hover me
                                        <Icon icon="icon-park-outline:download" />
                                    </a>
                                    <template #overlay>
                                        <Menu>
                                            <MenuItem key="1">
                                            <UserOutlined />
                                            1st menu item
                                            </MenuItem>
                                            <MenuItem key="2">
                                            <UserOutlined />
                                            2nd menu item
                                            </MenuItem>
                                            <MenuItem key="3">
                                            <UserOutlined />
                                            3rd item
                                            </MenuItem>
                                        </Menu>
                                    </template>
                                    <Button type="text">
                                        <Icon icon="icon-park-outline:download" />
                                    </Button>
                                </Dropdown>
                            </template>
                            </Input>
                        </FormItem>
                    </Form>
                    <div class="col-span-3 flex gap-4">
                        <Button type="default">
                            <Icon icon="icon-park-outline:download" />
                            <span>text</span>
                        </Button>
                        <Button type="default">
                            <Icon icon="icon-park-outline:download" />
                            <span>text</span>
                        </Button>
                        <Button type="default">
                            <Icon icon="icon-park-outline:download" />
                            <span>text</span>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
        <nav class="py-4 border-b">
            <div class="container mx-auto px-4">
                <ul class="flex">
                    <RouterLink to="/"><Button type="link">sdf</Button></RouterLink>
                    <RouterLink to="/"><Button type="link">sdf</Button></RouterLink>
                    <RouterLink to="/"><Button type="link">sdf</Button></RouterLink>
                    <RouterLink to="/"><Button type="link">sdf</Button></RouterLink>
                    <RouterLink to="/"><Button type="link">sdf</Button></RouterLink>
                    <RouterLink to="/"><Button type="link">sdf</Button></RouterLink>
                    <RouterLink to="/"><Button type="link">sdf</Button></RouterLink>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script setup lang="ts">
import { Dropdown, Menu, MenuItem, Input, Form, FormItem, Button } from "ant-design-vue";
import { Icon } from '@iconify/vue';
</script>