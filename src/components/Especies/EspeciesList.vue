<template>
  <section>
    <div class="container">
      <div class="row">
        <div
          class="col-md-4"
          v-for="especie in especies"
          v-bind:key="especie.IdAnimal"
        >
          <div class="card">
            <img
              class="card-img-top"
              v-bind:src="especie.LinkImagen"
              v-bind:alt="especie.Nombre"
            />
            <div class="card-body">
              <h4 class="card-title">{{ especie.Nombre }}</h4>
              <details>
                <summary>Leer mas</summary>
                <div class="color-bl">
                  <h5>Descripción</h5>
                  <p class="card-text text-justify">{{ especie.DescripcionAnimal }}</p>
                  <br>
                  <h5>Ubicación Preliminar</h5>
                  <p class="card-text text-justify">{{ especie.UbicacionPreliminar }}</p>
                  <br>
                  <h5>Estado de Peligro</h5>
                  <p class="card-text">{{ especie.EstadoDePeligro }}</p>
                  <br>
                  <h5>Causa del Peligro</h5>
                  <p class="card-text text-justify">{{ especie.CausaDePeligro }}</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-img-top {
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
.card-body a {
  font-size: 1em;
  font-weight: bold;
  color: #f1f1f1;
  text-decoration: none;
}
.card-body a:hover {
  color: #eabd56;
}
.card {
  margin: 2rem 1rem;
  border-radius: 10px 10px 12px 12px;
  border: none;
}
img {
  border-radius: 10px 10px 0px 0px;
}

h5{
  color: #f1f1f1;
  font-weight: 700;
}

details {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background: #eabd56;
  border-color: #eabd56;
  color: #1e293b;
}

details summary {
  cursor: pointer;
}

details p{
  color: #f1f1f1;

}

details .color-bl{
  background: #1e293b;
  border-radius: 10px;
  padding: .6rem;
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
