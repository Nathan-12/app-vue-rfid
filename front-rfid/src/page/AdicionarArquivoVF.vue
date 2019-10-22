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
                  <th>Escolha os arquivos</th>
                  <th>Possuem relação ?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <label>
                      Vídeo
                      <input
                        id="filesVideo"
                        ref="filesVideo"
                        type="file"
                        v-on:change="selecionarArquivosVideo()"
                      />
                      <br />
                      <br />
                    </label>
                    <label>
                      Imagem
                      <input
                        id="filesImg"
                        ref="filesImg"
                        type="file"
                        v-on:change="selecionarArquivosImg()"
                      />
                      <br />
                      <br />
                    </label>
                  </td>
                  <td>
                    <div class="row">
                      <div class="col s6">
                        <p>
                          <label>
                            <input
                              class="with-gap"
                              name="group1"
                              type="radio"
                              value="TRUE"
                              v-model="opcao"
                            />
                            <span>Sim</span>
                          </label>
                        </p>
                      </div>
                      <div class="col s6">
                        <p>
                          <label>
                            <input
                              class="with-gap"
                              name="group1"
                              type="radio"
                              value="FALSE"
                              v-model="opcao"
                            />
                            <span>Não</span>
                          </label>
                        </p>
                      </div>
                    </div>
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
      video: null,
      img: null,
      atividadeId: "",
      opcao: ""
    };
  },
  created: function() {
    this.atividadeId = this.$route.params.id;
  },
  methods: {
    salvarFile() {
      const formData = new FormData();
      formData.append("fileVideo", this.filesVideo);
      formData.append("fileImg", this.filesImg);
      formData.append("opcao", this.opcao);
      this.$http
        .post("http://localhost:8090/api/v-f/" + this.atividadeId, formData, {
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

    selecionarArquivosVideo() {
      this.file = this.$refs.filesVideo.filesVideo;
    },
    selecionarArquivosImg() {
      this.file = this.$refs.filesImg.filesImg;
    },
    limparCampos() {
      (this.codigo = ""), (this.file = null);
    }
  }
};
</script>

<style>
button {
  margin: 1%;
}
</style>