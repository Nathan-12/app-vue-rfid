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
                <th>Mídia</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="arquivo of arquivos" :key="arquivo.id">
                <td>{{ arquivo.id }}</td>
                <td>{{ arquivo.nome }}</td>
                <td>00{{ arquivo.codigo }}</td>
                <td><img id="imagem"></td>
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
      arquivos: []
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
    }
  }
};
</script>

<style>
button {
  margin: 1%;
}
#imagem{
  height: 60px;
  width: 60px;
}

</style>