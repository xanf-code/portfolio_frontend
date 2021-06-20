<template>
    <div class="bg-white dark:bg-black">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-2 my-2">
            <div v-for="project in projects" :key="project.name">
                <ProjectTemplate :project="project" />
            </div>
        </div>
    </div>
</template>

<script>
import ProjectTemplate from '../components/ProjectComponent.vue'

const projects = [
    {
        projectTags: ['tag1', 'tag2', 'tag3'],
        projectName: 'InsiderShibu',
        projectDescription: 'default description',
        projectSlug: 'default slug',
        projectImage: [
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mandysam.com%2Fimg%2Frandom.jpg&f=1&nofb=1',
            'https://img.icons8.com/dusk/64/ffffff/university.png',
        ],
        projectLink: 'https://img.icons8.com/dusk/64/ffffff/university.png',
    },
    {
        projectTags: ['tag1', 'tag2', 'tag3'],
        projectName: 'College API',
        projectDescription: 'default description',
        projectSlug: 'default slug',
        projectImage: [
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mandysam.com%2Fimg%2Frandom.jpg&f=1&nofb=1',
            'https://img.icons8.com/dusk/64/ffffff/university.png',
        ],
        projectLink: 'https://img.icons8.com/dusk/64/ffffff/university.png',
    },
    {
        projectTags: ['tag1', 'tag2', 'tag3'],
        projectName: 'InsiderShibu',
        projectDescription: 'default description',
        projectSlug: 'default slug',
        projectImage: [
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mandysam.com%2Fimg%2Frandom.jpg&f=1&nofb=1',
            'https://img.icons8.com/dusk/64/ffffff/university.png',
        ],
        projectLink: 'https://img.icons8.com/dusk/64/ffffff/university.png',
    },
    {
        projectTags: ['tag1', 'tag2', 'tag3'],
        projectName: 'InsiderShibu',
        projectDescription: 'default description',
        projectSlug: 'default slug',
        projectImage: [
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mandysam.com%2Fimg%2Frandom.jpg&f=1&nofb=1',
        ],
        projectLink: 'https://img.icons8.com/dusk/64/ffffff/university.png',
    },
    {
        projectTags: ['tag1', 'tag2', 'tag3'],
        projectName: 'defaultName4',
        projectDescription: 'default description',
        projectSlug: 'default slug',
        projectImage: [
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mandysam.com%2Fimg%2Frandom.jpg&f=1&nofb=1',
        ],
        projectLink: 'https://img.icons8.com/dusk/64/ffffff/university.png',
    },
    {
        projectTags: ['tag1', 'tag2', 'tag3'],
        projectName: 'defaultName4',
        projectDescription: 'default description',
        projectSlug: 'default slug',
        projectImage: [
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mandysam.com%2Fimg%2Frandom.jpg&f=1&nofb=1',
        ],
        projectLink: 'https://img.icons8.com/dusk/64/ffffff/university.png',
    },
]

export default {
    components: {
        ProjectTemplate,
    },
    setup() {
        return { projects }
    },
}
</script>