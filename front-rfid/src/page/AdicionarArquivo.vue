<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col s12">
          <form @submit.prevent="salvarFile">
            <table>
              <thead>
                <tr>
                  <th>Escolha o arquivo</th>
                  <th></th>
                  <th>Aproxime o cartão do leitor RFID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="file-field input-field">
                      <div class="btn">
                        <span>vídeo</span>
                        <input
                          id="files" ref="files" type="file" v-on:change="selecionarArquivos()"
                        />
                      </div>
                      <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" placeholder="<== Clique para adicionar um vídeo" />
                      </div>
                    </div>
                  </td>
                    <td class="row">
                      <div class="col s1"></div>
                    </td>
                  <td>
                    <div class="col s12">
                      <div class="input-field">
                    <input class="validate" id="cod" type="text" v-model="codigo" />
                    <label for="cod">Clique aqui, em seguida passe o cartão</label>
                    </div>  
                    </div>
                    
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="reset" class="waves-effect green waves-light btn-small">
              Cadastrar novo cartão
              <i class="material-icons left">add</i>
            </button>
            <button type="reset" class="waves-effect blue waves-light btn-small"  @click="irLista()">
              Finalizar Cadastro
              <i class="material-icons left">save</i>
            </button>
          </form>
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
    },
    irLista(){
      this.$router.push("/listar-atividades");
    }
  }
};
</script>

<style>
button {
  margin: 1%;
}
</style>