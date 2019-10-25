<template>
  <div id="app">
    <div class="containerr">
      <table class="responsive-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome da atividade</th>
            <th>Tipo da atividade</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="atividade of atividades" :key="atividade.id">
            <td>{{ atividade.id }}</td>
            <td>{{ atividade.nome }}</td>
            <td>{{ atividade.tipoAtividade }}</td>
            <td>
              <button class="waves-effect waves-light btn-small" @click="adicionar(atividade)">
                Adicionar arquivos
                <i class="material-icons left">add</i>
              </button>
            </td>
            <td>
              <button
                class="waves-effect waves-light btn-small"
                @click="listaFiles(atividade)"
              >Ver arquivos</button>
            </td>
            <td>
              <button
                class="waves-effect waves-light btn-small"
                @click="verFiles(atividade)"
              >Iniciar Atividade</button>
            </td>
            <td>
              <button
                type="reset"
                class="waves-effect red waves-light btn-small"
                @click="excluirAtv(atividade)"
              >
                Excluir atividade
                <i class="material-icons left">delete</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      atividades: []
    };
  },

  created: function() {
    this.$http.get("http://localhost:8090/api/listar").then(res => {
      this.atividades = res.data;
    });
  },

  methods: {
    adicionar(atividade) {
      if (atividade.tipoAtividade == "V_OU_F") {
        this.$router.push("/adicionar-arquivos-vf/" + atividade.id);
      }
      if (atividade.tipoAtividade == "ASSOCIACAO") {
        this.$router.push("/adicionar-arquivo/" + atividade.id);
      }
    },
    verFiles(atividade) {
      if (atividade.tipoAtividade == "ASSOCIACAO") {
        this.$router.push("/associacao/" + atividade.id);
        this.$router.go();
      }
      if(atividade.tipoAtividade == "V_OU_F"){
        this.$router.push("/vf/" + atividade.id);
        this.$router.go();
      }
    },
    listaFiles(atividade) {
      this.$router.push("/arquivos/" + atividade.id);
    },
    excluirAtv(atividade) {
      this.$http
        .delete("http://localhost:8090/api/" + atividade.id)
        .then(res => {
          this.atividades = res.data;
          this.$router.go();
        });
    }
  }
};
</script>

<style>
div.containerr {
  margin-left: 100px;
  margin-right: 100px;
}
</style>