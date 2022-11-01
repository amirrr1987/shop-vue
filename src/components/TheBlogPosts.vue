<template>

    <section class="py-12">
        <div class="container mx-auto px-8">
            <h3
                class="mb-8 box-border font-semibold leading-tight xl:text-3xl text-[rgba(33,37,41,1)] text-[calc(1.3rem_+_0.6vw)]">
                Blog posts</h3>
            <div class="grid grid-cols-12 gap-8">
                <template v-for="(item, index) in 4">
                    <figure class="col-span-12 md:col-span-6 lg:col-span-3 ">
                        <img class="aspect-3-2 rounded" :src="`/src/assets/images/posts/${index + 1}.webp`" alt="">
                        <figcaption class="py-2">
                            <time class="mb-1 box-border block text-sm text-[rgba(157,161,167,1)]"
                                datetime="2022-02-14 00:00">
                                <i class="box-border inline-block font-black not-italic leading-none"></i>
                                23.12.2021
                            </time>
                            
                            <h6
                                class="mt-0 mb-1 box-border text-base font-semibold leading-tight text-[rgba(33,37,41,1)] hover:text-[rgba(10,88,202,1)]">
                                How to promote brands</h6>
                            <p class="mt-0 mb-4 box-border ">When you enter into any new area of science, you almost
                                reach
                            </p>

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
<style>
.aspect-3-2 {
    aspect-ratio: 3/2;
}
</style>