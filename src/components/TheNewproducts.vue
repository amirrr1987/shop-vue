<template>
    <section class="py-12">
        <div class="container mx-auto px-4">
            <h3
                class="box-border font-semibold leading-tight xl:text-3xl text-[rgba(33,37,41,1)] text-[calc(1.3rem_+_0.6vw)] mb-8">
                New products</h3>
            <div class="grid grid-cols-12 gap-8">
                <template v-for="(item, index) in 8" :key="index">
                    <figure class="col-span-12 md:col-span-6 lg:col-span-3 shadow border rounded">
                        <img class="mx-auto" :src="`/src/assets/images/items/${index + 1}.webp`">
                        <figcaption class="p-4 border-t">
                            <div class="">$790.50</div>
                            <p class="py-4">GoPro HERO6 4K Action Camera - Black</p>
                            <div class="flex gap-4">
                                <Button type="primary">Add to cart</Button>
                                <Button type="default" class="flex items-center justify-center">
                                    <template #icon>
                                        <Icon icon="icon-park-outline:like" />
                                    </template>
                                </Button>
                            </div>
                        </figcaption>
                    </figure>
                </template>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { Dropdown, Menu, MenuItem, Input, Form, FormItem, Button } from "ant-design-vue";
import { Icon } from '@iconify/vue';
</script>