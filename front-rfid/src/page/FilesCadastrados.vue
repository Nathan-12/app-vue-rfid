<template>
  <div id="app">
    <div class="containerr">
      <input autofocus id="codigoCartao" type="text" placeholder="insira o código do cartão" />
    </div>
    
    <div class="container">
      <video class="videoFilesCadastrados" loop id="tagVideo" width="400px" height="400px">
        <source src type="mp4" />
      </video>
    </div>
  </div>
</template>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const inputCodigo = document.querySelector("#codigoCartao");
  const video = document.querySelector("#tagVideo");

  inputCodigo.addEventListener("keyup", function(event) {
    if (event.which === 13) {
      video.pause();
      video.setAttribute("src", "/static/arquivos/" + inputCodigo.value);
      video.load();
      video.play();

      inputCodigo.value = "";
    }
  });
});

export default {
  name: "app",
  data() {
    return {
      arquivos: []
    };
  },

  created: function() {
    this.atividadeId = this.$route.params.id;
  },

  methods: {
    blockSubmit(event) {
      event.preventDefault();
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
</style>