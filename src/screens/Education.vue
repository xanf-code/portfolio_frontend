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
        <div v-for="edu in education" :key="edu.name">
            <EducationComponents :edu="edu" />
        </div>
    </div>
</template>

<script>
import EducationComponents from '../components/EducationComponent.vue'

const education = [
    {
        name: 'Bangalore Institute of Technology',
        type: 'College',
        field: 'Computer Science',
        logo: 'https://img.icons8.com/dusk/64/ffffff/university.png',
        startDate: '2020',
        endDate: '2024',
    },
    {
        name: '',
        type: 'College',
        field: 'PCMB',
        logo: 'https://img.icons8.com/dusk/64/ffffff/university.png',
        startDate: '2020',
        endDate: '2024',
    },
    {
        name: 'Carmel High School',
        type: 'School',
        field: 'Primary Education',
        logo: 'https://img.icons8.com/dusk/64/ffffff/school.png',
        startDate: '2020',
        endDate: '2024',
    },
]

export default {
    components: {
        EducationComponents,
    },
    setup() {
        return { education }
    },
}
</script>