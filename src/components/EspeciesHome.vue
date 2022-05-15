<template>
  <section class="parallax" id="especies" ref="especies">
    <div class="container">
      <div class="title">
        <h1>Especies en peligro de extinción</h1>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card text-center">
            <img
              src="../assets/img/Tiburon.jpg"
              class="card-img-top"
              alt="Logo de Akazul"
            />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">
                Tiburón Martillo Gigante
              </h5>
              <p class="card-text text-justify">
                Este tiburón puede llegar a medir hasta 6 metros y pesar
                alrededor de 580 kilogramos.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center">
            <img
              src="../assets/img/Ajolote.jpg"
              class="card-img-top"
              alt="Logo de CEDO"
            />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">Ajolote Mexicano</h5>
              <p class="card-text text-justify">
                El también conocido monstruo de agua, es un anfibio, que
                actualmente están más presentes en aguas, arroyos y canales,
                tienen la capacidad regenerativa de sus extremidades.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center">
            <img
              src="../assets/img/Totoaba.webp"
              class="card-img-top"
              alt="Logo de Centro de Protección y Conservación de Tortugas Marinas Playa Teopa"
            />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">Pez Totoaba</h5>
              <p class="card-text text-justify">
                Es un pez de clima subtropical, que no amenaza a los humanos, y
                puede alcanzar los 2 metros de longitud y los 100 kilogramos de
                peso.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
          <div class="col-md-12">
            <router-link to="/especies">
                <button type="button" class="btn btn-primary btn-lg text-center">
                Ver lista de todas las especies
                </button>
            </router-link>
          </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.parallax{
  background-image: url("../assets/img/oceano.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  font-weight: 900;
  font-size: 3.5rem;
  padding: 1rem;
  color: #f1f1f1;
  margin-bottom: 1rem;
  margin-top: 4rem;
  background: #1e293b;
}
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
}
.row > [class*="col-"] {
  display: flex;
  flex-direction: column;
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
  margin: 5rem 1rem;
  border-radius: 10px 10px 0px 0px;
  border: none;
}
img {
  border-radius: 10px 10px 0px 0px;
}
.card-img-top {
  object-fit: cover;
}
button{
    background: #eabd56;
    color:#1e293b;
    border: none;
    margin-bottom: 3rem;
}

button:hover{
    background: #ffdd8d;
    color:#1e293b;
}

button:focus{
    background: #ffdd8d;
    color:#1e293b;
}

</style>

export default {
  name: 'EspeciesHome',
  components: {
  },
};
