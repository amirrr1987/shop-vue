<template>
    <section class="bg-blue-500 py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-2">
                <article class="flex flex-col gap-4 ">
                    <h1 class="text-4xl text-white"> Best products & <br> brands in our store </h1>
                    <p class="text-lg font-light text-white">Trendy Products, Factory Prices, Excellent Service</p>    
                        <div class="flex gap-4">
                            <Button type="primary">Purchase now</Button>
                            <Button type="default">Learn more</Button>
                        </div>
                </article>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { Dropdown, Menu, MenuItem, Input, Form, FormItem, Button } from "ant-design-vue";
import { Icon } from '@iconify/vue';
</script>