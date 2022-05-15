<template>
  <section class="bg-dark">
    <div class="container py-5">
      <div class="row h-100 align-items-center py-5">
        <div class="col-lg-6 d-none d-lg-block">
          <img
            src="../assets/img/guardians.png"
            height="80%"
            width="80%"
            alt="Logo Guardians of the Ocean"
            class="img-fluid"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-4">Guardians of the Ocean</h1>
          <p class="lead mb-0">
            Somos un grupo de personas amantes de la naturaleza que buscamos
            concientizar al mundo con el uso de tecnologias.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  color: #fff;
  font-weight: 700;
}
p {
  color: #f3f3f3;
}
.bg-dark {
  background: #171f31 !important;
}
</style>

export default {
  name: 'Nosotros',
  components: {
  },
};
