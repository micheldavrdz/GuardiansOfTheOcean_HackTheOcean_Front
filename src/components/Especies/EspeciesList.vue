<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="especie in especies"
            v-bind:key="especie.IdAnimal">
          <div class="card">
            <img
              class="card-img-top"
              v-bind:src= especie.LinkImagen
              alt='Imagen de {{ especie.Nombre }}'
            />
            <div class="card-body">
              <h5 class="card-title">{{ especie.Nombre }}</h5>
              <button type="button" class="btn btn-primary">Leer mas</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-img-top{
  width: 100%;
  height: 15vw;
  object-fit: cover;
}

.card-body {
  box-shadow: 0 0 20px 7px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 10px 10px;
  background: #1e293b;
  color: #f1f1f1;
}
.card-body a{
  font-size: 1em;
  font-weight: bold;
  color: #f1f1f1;
  text-decoration: none;
}
.card-body a:hover{
  color: #eabd56;
}
.card {
  margin: 2rem 1rem;
  border-radius: 10px 10px 0px 0px;
  border: none;
}
img {
  border-radius: 10px 10px 0px 0px;
}

.btn-primary {
  background: #eabd56;
  border-color: #eabd56;
  color: #1e293b;
}

.btn-primary:hover {
  background: #1e293b;
  border-color: #eabd56;
  color: #eabd56;
}
</style>

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
