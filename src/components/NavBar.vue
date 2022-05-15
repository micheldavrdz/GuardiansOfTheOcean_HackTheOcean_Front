<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="#">
      <img
        src="../assets/img/guardians.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt="Logo de Guardians of the Ocean"
      />
      Guardians of the Ocean</a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link to="/">
            <a class="nav-link">Home<span class="sr-only">(current)</span></a>
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goto('nosotros')" href="#"
          >Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goto('ong')" href="#">ONG's</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="goto('especies')" href="#"
            >Especies en Peligro</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background: #0d1321;
}
</style>

<script>
export default {
  name: 'NavBar',
  methods: {
    goto(refName) {
      const element = this.$refs[refName];
      console.log(element);
      const top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>
