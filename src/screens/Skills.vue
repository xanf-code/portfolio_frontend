<template>
    <div class="bg-white dark:bg-black">
        <div
            v-if="!state.loading"
            class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-2 my-2"
        >
            <transition-group appear @before-enter="beforeEnter" @enter="enter">
                <div
                    v-for="(skill, index) in state.results"
                    :key="skill._id"
                    :data-index="index"
                >
                    <SkillComponent :name="skill.name" :logo="skill.logo" />
                </div>
            </transition-group>
        </div>
        <div v-else class="m-auto mt-24 flex justify-center w-20">
            <img :src="loader" alt="loader" />
        </div>
    </div>
</template>

<script>
import SkillComponent from '../components/SkillsComponent.vue'
import loader from '../assets/loader.svg'
import getData from '../service/skillsAPI'
import gsap from 'gsap'

export default {
    components: {
        SkillComponent,
    },
    setup() {
        const { state, getSkillsData } = getData()

        const beforeEnter = (el) => {
            el.style.opacity = 0
            el.style.transform = 'translateY(100px)'
        }

        const enter = (el, done) => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                onComplete: done,
                delay: el.dataset.index * 0.1,
            })
        }

        getSkillsData()

        return { state, loader, beforeEnter, enter }
    },
}
</script>