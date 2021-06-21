<template>
    <div class="bg-white dark:bg-black">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-2 my-2">
            <div v-for="project in state.results" :key="project.projectSlug">
                <ProjectTemplate :project="project" />
            </div>
        </div>
    </div>
</template>

<script>
import ProjectTemplate from '../components/ProjectComponent.vue'
import getData from '../service/projectAPI'

export default {
    components: {
        ProjectTemplate,
    },
    setup() {
        const { state, getProjectsData } = getData()

        getProjectsData()

        return { state }
    },
}
</script>