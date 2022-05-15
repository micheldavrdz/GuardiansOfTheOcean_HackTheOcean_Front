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
      <ul class="navbar-nav ml-auto ">
        <li class="nav-item active">
          <router-link to="/">
            <a class="nav-link" href="#"
              >Inicio <span class="sr-only">(current)</span></a
            >
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 2</a>
        </li>
        <li class="nav-item">
          <router-link to="/especies">
            <a class="nav-link" href="#"
              >Especies</a
            >
          </router-link>
          <a class="nav-link" href="#">Link 3</a>
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

export default {
  name: 'Navbar',
  components: {
  },
};
