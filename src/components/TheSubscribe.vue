<template>
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

        </div>
    </section>
</template>