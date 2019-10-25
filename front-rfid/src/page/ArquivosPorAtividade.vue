<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col s8">
          <table class="responsive-table tabelafiles">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome do arquivo</th>
                <th>Código do cartão</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="arquivo of arquivos" :key="arquivo.id">
                <td>{{ arquivo.id }}</td>
                <td>{{ arquivo.nome }}</td>
                <td>00{{ arquivo.codigo }}</td>
                <td>
                  <button @click="apagarFile(arquivo)" class="waves-effect red waves-light btn-small">
                    Apagar
                    <i class="material-icons left">delete</i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col s4">
          <video loop id="tagVideo">
            <source src />
          </video>
          <h6>Cole o código neste campo e pressione ENTER para visualizar o video</h6>
          <input
            v-model="inputCodigo"
            @keyup="verificarCodigo"
            placeholder="Código do cartão"
            type="text"
          />
        </div>
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
    blockSubmit(event) {
      event.preventDefault();
    },
    verificarCodigo(event) {
      if (event.which === 13) {
        let video = document.querySelector("#tagVideo");

        video.pause();
        video.setAttribute("src", "/static/arquivos/" + this.inputCodigo);
        video.load();
        video.play();

        this.inputCodigo = "";
      }
    },
    apagarFile(arquivo){
      this.$http.delete("http://localhost:8090/arquivo/deleteFile/" + this.atividadeId + "/" + arquivo.id)
      .then(res =>{
        this.arquivos = res.data;
        this.$router.go();
      });
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
table.tabelafiles {
  margin-left: -150px;
}
</style>