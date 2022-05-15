<template>
    <div id="algo">
        <h1>Prueba de API</h1>
        <div class="post" v-for="especie in especies" :key="especie.id">
        <p>{{ especie }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EspeciesList',
  data() {
    return {
      especies: [],
    };
  },
  components: {
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.especies = console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

</script>
