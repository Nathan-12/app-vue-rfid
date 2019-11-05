<template>
  <div id="app">
    <div class="inputCod">
      <input autofocus v-model="inputCodigo" @keyup="verificarCodigo" type="text" />
    </div>
    <div id="snackbar">Resposta Errada</div>
    <div id="snackbar2">Resposta Certa</div>

    <div class="row">
      <div class="col s6">
        
      </div>
      <div class="col s6">
        
      </div>
    </div>

    <div class="row">
      <div class="col s6"><img class="vf" id="tagImagem" src /></div>
      <div class="col s6"><video class="videovf" loop id="tagVideo" width="400px" height="400px">
          <source src type="mp4" />
        </video></div>
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
      codigoTeste: "",
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
        .get("http://localhost:8090/arquivo/exibirvf/" + this.atividadeId)
        .then(res => {
          const img = document.querySelector("#tagImagem");
          const video = document.querySelector("#tagVideo");
          this.arquivos = res.data;
          console.log(this.arquivos);
          this.srcSet = res.data[this.indice].nomeImg;
          this.srcSetVideo = res.data[this.indice].nomeVideo;
          this.codigoTeste = res.data[this.indice].codigoTeste;
          img.setAttribute("src", "/static/arquivos/" + this.srcSet);
          video.pause();
          video.setAttribute("src", "/static/arquivos/" + this.srcSetVideo);
          video.load();
          video.play();
        });
    },
    verificarCodigo(event) {
      if (event.which === 13) {
        if (this.codigoTeste == this.inputCodigo) {
          var y = document.getElementById("snackbar2");

          y.className = "show2";

          setTimeout(function() {
            y.className = y.className.replace("show2", "");
          }, 3000);
          this.indice++;
          this.initialize();
          console.log(this.codigoTeste);
          //console.log(this.arquivos.length);
          //console.log(this.indice);
          if (this.arquivos.length == this.indice) {
            this.$router.push("/atividade-encerrada");
          }
        } else {
          var x = document.getElementById("snackbar");

          x.className = "show";

          setTimeout(function() {
            x.className = x.className.replace("show", "");
          }, 3000);
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
div.container2 {
  margin-top: 30px;
}
.inputCod {
  margin-top: -500px;
}
button {
  margin: 1%;
}
img.vf {
  width: 300px;
  height: 300px;
  margin-top: 40px; 
}
video.videovf {
  width: 450px;
  height: 450px;
  margin-top: -30px;
}

#snackbar {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #e84e52; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  top: 70px; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    top: 30px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    top: 30px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}

#snackbar2 {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #5daf50; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  top: 70px; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar2.show2 {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}
</style>