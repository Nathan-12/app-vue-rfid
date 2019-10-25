<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col s0"></div>
        <div class="col s12">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome do arquivo</th>
                <th>Código do cartão</th>
                <th>Codigo</th>
                <th>Mídia</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="arquivo of arquivos" :key="arquivo.id">
                <td>{{ arquivo.id }}</td>
                <td>{{ arquivo.nome }}</td>
                <td>00{{ arquivo.codigo }}</td>
                <td>
                  <input v-model="inputCodigo" @keyup="verificarCodigo" type="text" />
                </td>
                <td>
                  <video loop id="tagVideo">
                    <source src type="mp4" />
                  </video>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col s0"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      arquivos: [],
      codigo: "",
      indice: 0,
      inputCodigo: ""
    };
  },

  created: function() {
    this.atividadeId = this.$route.params.id;
    this.initialize();
  },

  methods: {
    initialize() {
      this.$http
        .get("http://localhost:8090/arquivo/exibir/" + this.atividadeId)
        .then(res => {
          this.arquivos = res.data;
        });
    },
    verificarCodigo(event) {
      if (event.which === 13) {
        const video = document.querySelector("#tagVideo");
        video.pause();
        video.setAttribute("src", "/static/arquivos/" + this.inputCodigo.value);
        video.load();
        video.play();

        this.inputCodigo = "";
      }
    }
  }
};
</script>

<style>
button {
  margin: 1%;
}
video {
  height: 200px;
  width: 200px;
}
</style>