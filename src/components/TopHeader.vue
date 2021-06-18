<template>
    <div class="flex px-4 pt-4">
        <div>
            <n-avatar
                circle
                :size="95"
                src="https://media-exp1.licdn.com/dms/image/C5103AQGvozR-E6gU0g/profile-displayphoto-shrink_800_800/0/1585673202903?e=1629331200&v=beta&t=OtCI08Hnu-mJXqU8KdVnDezzSRrQhqN7Hss9ftC7fJY"
            />
        </div>
        <div class="flex flex-col self-center pl-5">
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
            <div class="pt-2">
                <n-button class="w-full" size="medium" @click="handleClick">
                    <h1 class="text-black dark:text-white font-poppins">
                        Message
                    </h1>
                </n-button>
            </div>
        </div>
    </div>
</template>

<script>
import { NAvatar, NButton } from 'naive-ui'
export default {
    components: {
        NAvatar,
        NButton,
    },
    setup() {
        function handleClick() {
            console.log('TAPPED MESSAGE')
        }

        return { handleClick }
    },
}
</script>