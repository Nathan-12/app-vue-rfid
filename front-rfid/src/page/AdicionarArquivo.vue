<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col s2"></div>
        <div class="col s8">
          <form @submit.prevent="salvarFile">
            <div class="row">
              <div class="col s6"></div>
              <div class="col s6"></div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Escolha o arquivo</th>
                  <th>Insira o código rfid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input id="files" ref="files" type="file" v-on:change="selecionarArquivos()" />
                  </td>
                  <td>
                    <input type="text" placeholder="Código do cartão" v-model="codigo" />
                  </td>
                </tr>
              </tbody>
            </table>
            <button class="waves-effect green waves-light btn-small">
              Salvar
              <i class="material-icons left">save</i>
            </button>
            <button type="reset" class="waves-effect red waves-light btn-small">
              Limpar
              <i class="material-icons left">delete</i>
            </button>
          </form>
        </div>
        <div class="col s2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      
      file: null,
      codigo: "",
      atividadeId: ""
    };
  },
  created: function() {
    this.atividadeId = this.$route.params.id;
  },
  methods: {
    salvarFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("codigo", this.codigo);
      this.$http
        .post("http://localhost:8090/api/" + this.atividadeId, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(() => {
          alert("Arquivo cadastrado com sucesso na atividade");
          this.codigo = ""
        })
        .catch(e => {
          alert("erro: " + e);
        });
    },

    selecionarArquivos() {
      this.file = this.$refs.files.files[0];
    },
    limparCampos(){
        this.codigo = "",
        this.file = null
    }
  }
};
</script>

<style>
button {
  margin: 1%;
}
</style>