<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Sistema rfid</a>
      </div>
    </nav>

    <div class="container">
      <form @submit.prevent="salvar">
        <label>Nome da atividade</label>
        <input type="text" placeholder="Nome" v-model="nome" />

        <p>
          <label>
            <input class="with-gap" name="group1" type="radio" value="ASSOCIACAO" v-model="tipoAtividade" />
            <span>Associação</span>
          </label>
        </p>
        <button class="waves-effect waves-light btn-small">
          Salvar
          <i class="material-icons left">save</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      
        nome: "",
        tipoAtividade: ""
      
    };
  },
  mounted() {
    //this.listar()
  },
  methods: {
    salvar(){
            this.$http.post('http://localhost:8090/api/adicionar',{
                nome: this.nome,
                tipoAtividade: this.tipoAtividade
            })
            .then(() => {
                alert("cadastrado")
            })
            .catch(e =>{
                alert("erro: " + e);
            })
        }
  }
};
</script>

<style>
</style>