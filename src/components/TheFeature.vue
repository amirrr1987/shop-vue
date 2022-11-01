<template>
    <section class="py-12 bg-light-200">
        <div class="container mx-auto px-8">
            <h3
                class="mb-8 box-border font-semibold leading-tight xl:text-3xl text-[rgba(33,37,41,1)] text-[calc(1.3rem_+_0.6vw)]">
                Why choose us</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-12">
                <template v-for="(item, index) in 6" :key="index">
                    <figure class="grid">
                        <div class="bg-blue-500 aspect-square rounded-full m-12">
                            <Icon class="text-white text-2xl" icon="icon-park-solid:home" />
                        </div>
                        <figcaption class="text-center">
                            <h6 class="font-semibold text-2xl mb-4">
                                Worldwide shipping
                            </h6>
                            <p class="font-normal text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                                do eiusmor
                            </p>
                        </figcaption>
                    </figure>
                </template>

                <!-- <figure class="grid lg:grid-cols-[max-content,1fr] gap-4 col-span-12 md:col-span-6 lg:col-span-4">
                    <div class="rounded-full bg-white p-4 aspect-square flex justify-center items-center">
                        <Icon class="text-blue-500 text-3xl" icon="icon-park-solid:home" />
                    </div>
                    <figcaption>
                        <h6 class="box-border block text-base font-semibold leading-tight text-[rgba(33,37,41,1)]">
                            Worldwide shipping
                        </h6>
                        <p class="box-border ">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor
                        </p>
                    </figcaption>
                </figure> -->
            </div>
        </div>
    </section>

</template>
<script setup lang="ts">
import { Dropdown, Menu, MenuItem, Input, Form, FormItem, Button } from "ant-design-vue";
import { Icon } from '@iconify/vue';
</script>
<style>
.aspect-square {
    aspect-ratio: 1/1 !important;
}
</style>