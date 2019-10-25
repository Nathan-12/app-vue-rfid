<template>
  <div id="app">
    <div class="inputCod">
      <input autofocus v-model="inputCodigo" @keyup="verificarCodigo" type="text" />
    </div>

    <div class="container">
      <div class="row"></div>
      <div class="col s2"></div>
      <div class="col s8">
      <video loop id="tagVideo" width="400px" height="400px">
                  <source src />
      </video>
      </div>
      <div class="col s2"></div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      arquivos: [],
      indice: 0,
      srcSet: "",
      srcSetVideo: "",
      inputCodigo: "",
      erros: 0
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
          //const img = document.querySelector("#tagImagem");
          const video = document.querySelector("#tagVideo");
          this.arquivos = res.data;
          this.srcSet = "00" + res.data[this.indice].codigo;

          video.pause();
          video.setAttribute("src", "/static/arquivos/" + this.srcSet);
          video.load();
          video.play();

        });
    },
    verificarCodigo(event) {
      if (event.which === 13) {
        if (this.srcSet == this.inputCodigo) {
          this.indice++;
          this.initialize();
          //console.log(this.arquivos.length);
          //console.log(this.indice);
          if(this.arquivos.length == this.indice){
            this.$router.push("/atividade-encerrada");
          }
        }
        else {
          alert("Código Errado");
          this.erros ++;
          //console.log(this.srcSet);
          //console.log(this.inputCodigo);
        } 
        this.inputCodigo = "";
      }
    },
    blockSubmit(event) {
      event.preventDefault();
    }
  }
};
</script>

<style>
.inputCod {
  margin-top: -500px;
}
button {
  margin: 1%;
}
img{
  width: 300px;
  height: 300px;
}
video{
  width: 300px;
  height: 300px;
}
</style>