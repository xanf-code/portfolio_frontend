<template>
    <div
        class="
            grid grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-2
            md:gap-4
            mx-2
            my-2
            md:mx-4
            md:my-4
        "
    >
        <div v-for="edu in state.results" :key="edu._id">
            <EducationComponents :edu="edu" />
        </div>
    </div>
</template>

<script>
import EducationComponents from '../components/EducationComponent.vue'
import getData from '../service/educationAPI'

export default {
    components: {
        EducationComponents,
    },
    setup() {
        const { state, getEducationData } = getData()

        getEducationData()

        return { state }
    },
}
</script>