<template>
  <NavBar/>
  <Nosotros/>
  <ONG/>
  <EspeciesHome/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import Nosotros from '@/components/NosotrosHome.vue';
import ONG from '@/components/ONG.vue';
import EspeciesHome from '@/components/EspeciesHome.vue';
import Footer from '@/components/FooterHome.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Nosotros,
    ONG,
    EspeciesHome,
    Footer,
  },
};
</script>
