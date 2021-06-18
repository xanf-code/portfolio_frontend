<template>
    <div :class="active ? 'dark' : ''">
        <!-- MAIN BODY -->
        <main class="h-screen dark:bg-black bg-white">
            <!-- Top Main Header -->
            <div class="px-4 py-3 flex justify-between">
                <n-avatar
                    circle
                    :style="{
                        color: active ? 'black' : 'white',
                        backgroundColor: active ? 'white' : 'black',
                    }"
                >
                    <h1 class="font-poppins font-semibold">D</h1>
                </n-avatar>
                <div class="flex">
                    <svg
                        :class="active ? 'text-white' : 'text-gray-500'"
                        class="w-5"
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
                            <circle cx="12" cy="12" r="4"></circle>
                            <path
                                d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"
                            ></path>
                        </g>
                    </svg>
                    <n-switch class="mx-1 self-center" v-model:value="active" />
                    <svg
                        :class="active ? 'text-white' : 'text-gray-500'"
                        class="w-5"
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
                                d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"
                            ></path>
                            <path
                                d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0-2 2a2 2 0 0 0-2-2a2 2 0 0 0 2-2"
                            ></path>
                            <path d="M19 11h2m-1-1v2"></path>
                        </g>
                    </svg>
                </div>
            </div>
            <!-- Top Header Component MOBILE/DESKTOP-->
            <TopHeader v-if="state.mobileView" />
            <DesktopTopHeader v-else />
            <!-- SocialMedia Component -->
            <SocialMedia v-if="state.mobileView" />
            <!-- Section Component -->
            <SectionComponent />
        </main>
    </div>
</template>

<script>
import TopHeader from '../components/TopHeader.vue'
import SocialMedia from '../components/SocialMedia.vue'
import SectionComponent from '../components/SectionComponent.vue'
import DesktopTopHeader from '../components/DesktopTopHeader.vue'
import { ref } from 'vue'
import toggleNavBar from '../store/NavStore'
import { NSwitch, NAvatar } from 'naive-ui'
import { watch, onBeforeMount } from 'vue'

const active = ref(false)
const { state } = toggleNavBar()

export default {
    name: 'Intro',
    components: {
        NSwitch,
        NAvatar,
        TopHeader,
        SocialMedia,
        SectionComponent,
        DesktopTopHeader,
    },
    setup() {
        onBeforeMount(() => {
            const item = localStorage.getItem('theme')
            if (item === 'true') {
                active.value = true
            } else {
                active.value = false
            }
        })
        watch(active, (value) => {
            localStorage.setItem('theme', value)
        })
        return {
            active: active,
            state,
        }
    },
}
</script>

