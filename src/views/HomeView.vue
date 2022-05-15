<template>
  <Navbar/>
  <ONG/>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/NavBar.vue';
import ONG from '@/components/ONG.vue';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    ONG,
  },
};
</script>
