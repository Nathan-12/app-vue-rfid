<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col s1"></div>
        <div class="col s10">
        <input autofocus id="codigoCartao" type="text" />  
          <div class="container">
            <div class="row">
              <div class="col-sm"></div>

              <div class="col-sm">
                <!--<video loop id="tagVideo" width="400px" height="400px">
                  <source src="/assets/arquivos/" type="mp4" />
                </video>-->
                <img id="tagImagem" src=""/>
                
              </div>
              <div class="col-sm"></div>
            </div>
          </div>
        </div>
        <div class="col s1"></div>
      </div>
    </div>
  </div>
</template>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const inputCodigo = document.querySelector("#codigoCartao");
  const img = document.querySelector("#tagImagem");

  inputCodigo.addEventListener("keyup", function(event) {
    if (event.which === 13) {
      //video.pause();
      //video.setAttribute("src", "arquivos/" + inputCodigo.value);
      //video.load();
      //video.play();
      img.setAttribute("src", "/static/arquivos/" + inputCodigo.value);
      
      inputCodigo.value = '';
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
</style>