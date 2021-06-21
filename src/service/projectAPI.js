import { reactive } from "vue";
import API from './API'

const state = reactive({
    results: [],
    loading: true,
});

export default function getData() {
    const getProjectsData = async () => {
        state.loading = true;
        try {
            const response = await API().get('/projects');
            state.results = response.data;
            state.loading = false;
        } catch (error) {
            console.log(error);
        } finally {
            state.loading = false;
        }
    };

    return {
        state,
        getProjectsData,
    };
}
