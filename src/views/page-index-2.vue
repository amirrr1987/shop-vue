<template>


	<!-- ================ SECTION INTRO ================ -->
	<section class="py-12">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-12 gap-4 h-96">
				<article class="p-8 bg-blue-500 rounded shadow col-span-12 lg:col-span-9">
					<div>
						<h2 class="box-border font-semibold leading-tight text-white xl:text-3xl">Great
							products with
							<br>
							best deals
						</h2>
						<p class="mb-4 box-border text-white ">No matter how far along you are in your sophistication as
							an amateur
							astronomer, there is always one.</p>
						<Button type="primary" danger size="large">
							<RouterLink class="" to="">View more</RouterLink>
						</Button>
					</div>
				</article>
				<article class="p-8 bg-orange-500 rounded shadow  col-span-12 lg:col-span-3">
					<div class="card-body text-center">
						<h5 class="mt-3 text-white">Amazing Gifts</h5>
						<p class="text-white">No matter how far along you are in your sophistication</p>
						<a href="#" class="btn btn-outline-light"> View more </a>
					</div>
				</article>
			</div>
		</div>
	</section>
	<!-- ================ SECTION INTRO END.// ================ -->

	<!-- ================ SECTION CATEGORY ================ -->

	<section class="py-12">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-12 gap-12">
				<template v-for="item in 12">
					<RouterLink to="/" class="col-span-2 text-center">
						<div class="border inline-flex p-4 mb-1">
							<img width="32" height="32" class="mx-auto"
								src="@/assets/images/icons/category-svg-blue/sofa.svg" />
						</div>
						<div>
							Interior items
						</div>
					</RouterLink>
				</template>
			</div>
		</div>
	</section>
	<!-- ================ SECTION CATEGORY END.// ================ -->

	<TheNewproducts />




	<!-- ================ SECTION FEATURE ================ -->
	<section class="py-12">
		<div class="container mx-auto px-4">
			<article class="bg-blue-500 px-4 py-12 rounded flex justify-between">
				<div>
					<h4 class="box-border font-semibold leading-tight text-white xl:text-2xl">Best
						products and brands in store</h4>
					<p class="my-0 box-border text-white/50 ">Trendy products and text to build on the card title</p>
				</div>
				<Button type="primary" danger size="large">Dicover</Button>
			</article>
		</div> <!-- container end.// -->
	</section>
	<!-- ================ SECTION FEATURE END.// ================ -->

	<!-- ================ SECTION PRODUCTS ================ -->
	<section class="py-12">

		<div class="container mx-auto px-4">
			<h3 class="mb-8 box-border font-semibold leading-tight xl:text-3xl">Recommended</h3>



			<div class="grid lg:grid-cols-12 gap-8">
				<template v-for="(item, index) in 4">
					<figure class="col-span-3">
						<div class="rounded bg-gray-500 py-4">
							<img class="mx-auto " :src="`/src/assets/images/items/${index + 9}.webp`" />
						</div>
						<figcaption class="py-4 flex justify-between">
							<div class="flex flex-col">
								<strong class="price">$17.00</strong>
								<a href="#" class="title text-truncate">Blue jeans shorts for men</a>
								<small class="text-muted">Sizes: S, M, XL</small>
							</div>
							<Button type="default" class="flex justify-center items-center">
								<template #icon>
									<Icon icon="icon-park-outline:like" />
								</template>
							</Button>
						</figcaption>
					</figure>
				</template>
			</div>


		</div>
	</section>
	<!-- ================ SECTION PRODUCTS END.// ================ -->

	<section class="py-8 bg-gray-300">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-12">
				<Form class="col-span-4">
					<FormItem class="mb-0">
						<Input placeholder="Email">
						<template #suffix>
							<Button type="default" size="large" class="-mr-3 -my-1">
								Subscribe
							</Button>
						</template>
						</Input>
					</FormItem>
				</Form>
				<div class="col-span-3 col-start-11 flex justify-end gap-1">
					<Button type="default" size="large" class="flex justify-center items-center">
						<template #icon>
							<Icon icon="icon-park-outline:like" />
						</template>
					</Button>
					<Button type="default" size="large" class="flex justify-center items-center">
						<template #icon>
							<Icon icon="icon-park-outline:like" />
						</template>
					</Button>
					<Button type="default" size="large" class="flex justify-center items-center">
						<template #icon>
							<Icon icon="icon-park-outline:like" />
						</template>
					</Button>
					<Button type="default" size="large" class="flex justify-center items-center">
						<template #icon>
							<Icon icon="icon-park-outline:like" />
						</template>
					</Button>
				</div>
			</div>

		</div><!-- //container -->
	</section>

</template>
<script setup lang="ts">
import { Dropdown, Menu, MenuItem, Input, Form, FormItem, Button, Image } from "ant-design-vue";
import { Icon } from '@iconify/vue';
import TheNewproducts from "@/components/TheNewproducts.vue";
</script>
<style>
.aspect-square {
	aspect-ratio: 1/1;
}
</style>