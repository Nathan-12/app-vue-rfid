<template>
  <div id="app">
    <div class="containerfiles">
      <h6>Passe o cartão sobre o leitor</h6>
      <input autofocus v-model="codigoCard" @keyup="verificarTecla" type="text" placeholder="insira o código do cartão" />
    </div>
    
    <div class="container">
      <video class="videoFilesCadastrados" loop id="tagVideo" width="400px" height="400px">
        <source src type="mp4" />
      </video>
    </div>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      arquivos: [],
      codigoCard: ""
    };
  },

  created: function() {
    this.atividadeId = this.$route.params.id;
  },

  methods: {
    blockSubmit(event) {
      event.preventDefault();
    },
    verificarTecla(event){
      if(event.which == 13){
        let video = document.querySelector("#tagVideo");

        video.pause();
        video.setAttribute("src", "/static/arquivos/" + this.codigoCard);
        video.load();
        video.play();

        this.codigoCard = ""
      }
    }
  }
};
</script>

<style>
button {
  margin: 1%;
}
video.videoFilesCadastrados {
  width: 500px;
  height: 500px;
}
div.containerfiles{
  margin-left: 400px;
  margin-right: 400px;
  margin-top: -50px;
}
</style>