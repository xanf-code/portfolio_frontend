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
        <swiper effect="fade" navigation>
            <swiper-slide v-for="index in project.projectImage" :key="index">
                <img class="rounded-t-md" :src="index" :alt="index" />
            </swiper-slide>
        </swiper>
        <div class="px-4 py-4">
            <div
                class="
                    text-black
                    dark:text-white
                    font-poppins font-semibold
                    text-base
                "
            >
                {{ project.projectName }}
            </div>
            <div
                class="
                    text-gray-500
                    font-poppins font-xs
                    dark:text-gray-500
                    mb-1
                    text-sm
                "
            >
                {{ project.projectDescription }}
            </div>
            <div class="flex justify-between">
                <div class="flex flex-row">
                    <div
                        v-for="(tags, index) in project.projectTags"
                        :key="index"
                    >
                        <div
                            class="
                                bg-tag-light
                                dark:bg-tag-dark
                                first:ml-0
                                mx-2
                                rounded-md
                            "
                        >
                            <h1 class="text-black dark:text-white mx-4 py-1">
                                {{ tags }}
                            </h1>
                        </div>
                    </div>
                </div>
                <a :href="project.projectLink" target="__blank">
                    <svg
                        class="
                            h-6
                            self-center
                            text-black
                            dark:text-white
                            cursor-pointer
                        "
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24"
                    >
                        <g
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M10 14a3.5 3.5 0 0 0 5 0l4-4a3.5 3.5 0 0 0-5-5l-.5.5"
                            ></path>
                            <path
                                d="M14 10a3.5 3.5 0 0 0-5 0l-4 4a3.5 3.5 0 0 0 5 5l.5-.5"
                            ></path>
                            <path d="M16 21v-2"></path>
                            <path d="M19 16h2"></path>
                            <path d="M3 8h2"></path>
                            <path d="M8 3v2"></path>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation])

export default {
    props: ['project'],
    components: {
        Swiper,
        SwiperSlide,
    },
}
</script>