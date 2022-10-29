<template>
    
    <section class="bg-blue-600 py-20 mt-0 mb-4 box-border text-xl font-normal text-white ">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-2">
                <article class="flex flex-col gap-4 ">
                    
                    <h1 class="box-border font-semibold leading-tight text-white xl:text-6xl "> Best
                        products &amp;
                        <br class="box-border ">
                         brands in our store
                    </h1>
                    <p class="mt-0 mb-4 box-border text-xl font-normal text-white ">Trendy Products, Factory Prices, Excellent Service</p>
                    
                        <div class="flex gap-4">
                            <Button type="primary" danger size="large" class="rounded">Purchase now</Button>
                            <Button type="default" danger size="large" class="rounded">Learn more</Button>
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