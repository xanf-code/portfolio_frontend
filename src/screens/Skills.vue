<template>
    <div
        class="
            grid grid-cols-2
            md:grid-cols-3
            xl:grid-cols-4
            gap-2
            md:gap-4
            mx-2
            my-2
            md:mx-4
            md:my-4
        "
    >
        <div v-for="skill in skills" :key="skill.name">
            <SkillComponent :name="skill.name" :logo="skill.logo" />
        </div>
    </div>
</template>

<script>
import SkillComponent from '../components/SkillsComponent.vue'

const skills = [
    {
        name: 'React JS',
        logo: 'https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png',
    },
    {
        name: 'Vue JS',
        logo: 'https://download.logo.wine/logo/Vue.js/Vue.js-Logo.wine.png',
    },
    {
        name: 'Node JS',
        logo: 'https://download.logo.wine/logo/Node.js/Node.js-Logo.wine.png',
    },
    {
        name: 'Java',
        logo: 'https://download.logo.wine/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.png',
    },
    {
        name: 'Dart',
        logo: 'https://download.logo.wine/logo/Dart_(programming_language)/Dart_(programming_language)-Logo.wine.png',
    },
    {
        name: 'Kotlin',
        logo: 'https://download.logo.wine/logo/Kotlin_(programming_language)/Kotlin_(programming_language)-Logo.wine.png',
    },
]

export default {
    components: {
        SkillComponent,
    },
    setup() {
        return { skills }
    },
}
</script>