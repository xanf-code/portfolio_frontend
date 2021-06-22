<template>
  <div
    v-if="!state.loading"
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
  <div v-else class="m-auto mt-24 flex justify-center w-20">
    <img :src="loader" alt="loader" />
  </div>
</template>

<script>
import EducationComponents from "../components/EducationComponent.vue";
import loader from "../assets/loader.svg";
import getData from "../service/educationAPI";
export default {
  components: {
    EducationComponents,
  },
  setup() {
    const { state, getEducationData } = getData();

    getEducationData();

    return { state, loader };
  },
};
</script>