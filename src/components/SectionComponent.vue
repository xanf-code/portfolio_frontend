<template>
    <n-tabs default-value="projects" justify-content="space-evenly" type="line">
        <n-tab-pane name="projects" tab="Projects">Projects</n-tab-pane>
        <n-tab-pane name="edu" tab="Education">Education</n-tab-pane>
        <n-tab-pane name="skills" tab="Skills">Skills</n-tab-pane>
    </n-tabs>
</template>

<script>
import { NTabs, NTabPane } from 'naive-ui'
export default {
    components: {
        NTabs,
        NTabPane,
    },
}
</script>