<template>
    <div
        class="
            shadow-sm
            hover:shadow-md
            bg-gray-100
            dark:bg-custom-black
            rounded-md
            py-2
        "
    >
        <div class="flex">
            <img
                width="44"
                class="my-4 ml-1.5 mr-2"
                :src="edu.logo"
                :alt="edu.name"
            />
            <div class="flex flex-col self-center">
                <span
                    class="
                        mt-1
                        ml-1.5
                        text-black
                        font-poppins font-medium
                        dark:text-white
                    "
                >
                    {{ edu.name }}
                </span>
                <span
                    class="
                        ml-1.5
                        text-gray-700
                        font-poppins font-sm
                        dark:text-gray-300
                    "
                >
                    {{ edu.field }}, {{ edu.type }}
                </span>
                <span
                    class="
                        mb-1
                        ml-1.5
                        text-gray-500
                        font-poppins font-xs
                        dark:text-gray-500
                    "
                >
                    {{ edu.startDate }} - {{ edu.endDate }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['edu'],
}
</script>