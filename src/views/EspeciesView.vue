<template>
  <EspeciesList/>
</template>

<script>
// @ is an alias to /src
import EspeciesList from '@/components/Especies/EspeciesList.vue';

export default {
  name: 'EspeciesView',
  components: {
    EspeciesList,
  },
};
</script>
