<template>
    <div id="algo">
        <h1>Prueba de API</h1>
        <div class="post" v-for="especie in especies" v-bind:key="especie.id">
        <p>{{ especie }}</p>
        </div>
    </div>
</template>

<script>
import EspeciesService from '@/services/EspeciesService';

export default {
  name: 'EspeciesList',
  data() {
    return {
      especies: [],
    };
  },
  methods: {
    getAllEspecies() {
      EspeciesService.getAll()
        .then((response) => {
          this.especies = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getAllEspecies();
  },
};

</script>
