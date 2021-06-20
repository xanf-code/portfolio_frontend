<template>
    <div
        class="
            shadow-sm
            hover:shadow-md
            bg-gray-100
            dark:bg-custom-black
            rounded-md
        "
    >
        <div class="flex">
            <img class="my-4 ml-1.5" width="50" :src="logo" :alt="name" />
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
</template>

<script>
export default {
    props: ['name', 'logo'],
}
</script>