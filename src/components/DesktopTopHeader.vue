<template>
    <div class="flex pt-4 justify-center">
        <div>
            <n-avatar
                circle
                :size="110"
                src="https://media-exp1.licdn.com/dms/image/C5103AQGvozR-E6gU0g/profile-displayphoto-shrink_800_800/0/1585673202903?e=1629331200&v=beta&t=OtCI08Hnu-mJXqU8KdVnDezzSRrQhqN7Hss9ftC7fJY"
            />
        </div>
        <div class="flex flex-col self-center pl-5">
            <div class="flex">
                <div>
                    <h1
                        class="
                            text-black
                            dark:text-white
                            font-poppins font-semibold
                            text-xl
                        "
                    >
                        Darshan Aswath
                    </h1>
                </div>
                <div class="pl-2">
                    <n-button class="w-full" size="medium" @click="handleClick">
                        <h1 class="text-black dark:text-white font-poppins">
                            Message
                        </h1>
                    </n-button>
                </div>
            </div>
            <!-- SOCIALS DESKTOP -->
            <DesktopSocials />
            <!-- BIO DESKTOP -->
            <DesktopBio />
        </div>
    </div>
</template>

<script>
import DesktopBio from '../components/DesktopBio.vue'
import DesktopSocials from '../components/DesktopSocials.vue'
import { NAvatar, NButton } from 'naive-ui'
export default {
    components: {
        NAvatar,
        NButton,
        DesktopBio,
        DesktopSocials,
    },
    setup() {
        function handleClick() {
            console.log('TAPPED MESSAGE')
        }

        return { handleClick }
    },
}
</script>