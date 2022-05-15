<template>
  <Navbar/>
  <ONG/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/NavBar.vue';
import ONG from '@/components/ONG.vue';
import Footer from '@/components/FooterHome.vue';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    ONG,
    Footer,
  },
};
</script>
