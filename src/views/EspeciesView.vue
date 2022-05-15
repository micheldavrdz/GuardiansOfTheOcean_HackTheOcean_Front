<template>
  <Navbar/>
  <EspeciesList/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/NavBar.vue';
import EspeciesList from '@/components/Especies/EspeciesList.vue';
import Footer from '@/components/FooterHome.vue';

export default {
  name: 'EspeciesView',
  components: {
    Navbar,
    EspeciesList,
    Footer,
  },
};
</script>
