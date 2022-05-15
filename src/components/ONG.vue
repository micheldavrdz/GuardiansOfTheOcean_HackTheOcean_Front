<template>
  <section>
    <div class="container">
      <div class="title">
        <h1>ONG's</h1>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card text-center">
            <img
              src="../assets/img/Akazul_Logos.png"
              class="card-img-top"
              alt="Logo de Akazul"
            />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">AKAZUL</h5>
              <p class="card-text text-justify">
                Akazul maneja un proyecto de vivero para la conservación de las
                tortugas marinas.
                <br />
                Las actividades del proyecto incluyen monitoreo en la playa de
                anidación, investigación, educación y capacitación.
              </p>
              <a href="http://www.akazul.org/" target="_blank">SITIO WEB</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center">
            <img
              src="../assets/img/CEDO_Logos.png"
              class="card-img-top"
              alt="Logo de CEDO"
            />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">CEDO</h5>
              <p class="card-text text-justify">
                La misión del CEDO es empoderar a comunidades costeras de la
                región del norte del Golfo de California con conocimiento y herramientas para
                crear medios de vida sostenibles que actúan en armonía con el
                medio ambiente.
              </p>
              <a href="http://www.cedointercultural.org/" target="_blank">SITIO WEB</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center">
            <img
              src="../assets/img/Teopa_Logos.png"
              class="card-img-top"
              alt="Logo de Centro de Protección y Conservación de Tortugas Marinas Playa Teopa"
            />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">CPyCTMPT</h5>
              <p class="card-text text-justify">
                El Centro de Protección y Conservación de Tortugas Marinas Playa Teopa
                inició sus acciones en favor de las tortugas marinas en 1983, siendo el
                segundo campamento más antiguo en la costa de Jalisco México.
              </p>
              <a href="https://www.facebook.com/pages/Tortugas-Marinas-playa-Teopa/105435119514981" target="_blank">SITIO WEB</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-weight: 900;
  font-size: 5rem;
  color: #f1f1f1;
  margin-bottom: 1rem;
  margin-top: 4rem;
  background: #1e293b;
}
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display:         flex;
  flex-wrap: wrap;
}
.row > [class*='col-'] {
  display: flex;
  flex-direction: column;
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
</style>

export default {
  name: 'ONG',
  components: {
  },
};
