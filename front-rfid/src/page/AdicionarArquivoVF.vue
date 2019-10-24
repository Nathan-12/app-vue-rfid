<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col s2"></div>
        <div class="col s8">
          <form @submit.prevent="salvarFileVF">
            <div class="row">
              <div class="col s6"></div>
              <div class="col s6"></div>
            </div>
            <table class="responsive-table">
              <thead>
                <tr>
                  <th>Escolha os arquivos</th>
                  <th></th>
                  <th>Possuem relação ?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>Escolha o vídeo</h6>
                    <div class="file-field input-field">
                      <div class="btn">
                        <span>Vídeo</span>
                        <input
                          id="filesVideo"
                          ref="filesVideo"
                          type="file"
                          v-on:change="selecionarArquivosVideo()"
                        />
                      </div>
                      <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" placeholder="<== Clique para adicionar o vídeo"/>
                      </div>
                    </div>
                    <h6>Escolha a Imagem</h6>
                    <div class="file-field input-field">
                      <div class="btn">
                        <span>Imagem</span>
                        <input
                          id="filesImg"
                          ref="filesImg"
                          type="file"
                          v-on:change="selecionarArquivosImg()"
                        />
                      </div>
                      <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" placeholder="<== Clique para adicionar a imagem" />
                      </div>
                    </div>
                  </td>
                  <td class="row">
                    <div class="col s1">

                    </div>
                  </td>
                  <td>
                    <div class="row">
                      <div class="col s5">
                        <p>
                          <label>
                            <input
                              class="with-gap"
                              name="group1"
                              type="radio"
                              value="00123"
                              v-model="codigoTeste"
                            />
                            <span>SIM</span>
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
                              value="00321"
                              v-model="codigoTeste"
                            />
                            <span>NÃO</span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <button class="waves-effect green waves-light btn-small">
              Adicionar outros arquivos
              <i class="material-icons left">add</i>
            </button>
            <button type="reset" class="waves-effect blue waves-light btn-small">
              Finalizar cadastro
              <i class="material-icons left">save</i>
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
      fileVideo: null,
      fileImg: null,
      codigoTeste: "",
      atividadeId: ""
    };
  },
  created: function() {
    this.atividadeId = this.$route.params.id;
  },
  methods: {
    salvarFileVF() {
      const formData = new FormData();
      formData.append("fileVideo", this.fileVideo);
      formData.append("fileImg", this.fileImg);
      formData.append("codigoTeste", this.codigoTeste);
      this.$http
        .post("http://localhost:8090/api/add/" + this.atividadeId, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(() => {
          alert("Arquivo cadastrado com sucesso na atividade!");
        })
        .catch(() => {
          alert("erro: Não foi possível cadastrar o arquivo, tente novamente!");
        });
    },

    selecionarArquivosVideo() {
      this.fileVideo = this.$refs.filesVideo.files[0];
    },
    selecionarArquivosImg() {
      this.fileImg = this.$refs.filesImg.files[0];
    }
  }
};
</script>

<style>
button {
  margin: 1%;
}
</style>