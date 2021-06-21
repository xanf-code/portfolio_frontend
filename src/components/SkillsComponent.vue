<template>
    <div
        class="
            shadow-sm
            hover:shadow-md
            bg-gray-100
            dark:bg-custom-black
            rounded-md
            my-2
            mx-2
        "
    >
        <div class="flex">
            <div class="w-20 flex justify-center">
                <img class="my-4 h-10" :src="logo" :alt="name" />
            </div>
            <div class="flex justify-start">
                <h1
                    class="
                        ml-1.5
                        self-center
                        text-black
                        font-poppins font-medium
                        dark:text-white
                    "
                >
                    {{ name }}
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'logo'],
}
</script>