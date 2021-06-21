<template>
    <div class="bg-white dark:bg-black">
        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-2 my-2">
            <div v-for="skill in state.results" :key="skill._id">
                <SkillComponent :name="skill.name" :logo="skill.logo" />
            </div>
        </div>
    </div>
</template>

<script>
import SkillComponent from '../components/SkillsComponent.vue'

import getData from '../service/skillsAPI'

export default {
    components: {
        SkillComponent,
    },
    setup() {
        const { state, getSkillsData } = getData()

        getSkillsData()

        return { state }
    },
}
</script>