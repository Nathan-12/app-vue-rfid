<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col s2"></div>
        <div id="formulario" class="col s8">
          <form @submit.prevent="salvar">
            <h5>Nome da Atividade</h5>
            <input type="text" placeholder="Nome da Atividade" v-model="nome" />
            
            <h5>Tipo da Atividade</h5>
            <div class="row">
              <div class="col s6">
                <p>
                  <label>
                    <input
                      class="with-gap"
                      name="group1"
                      type="radio"
                      value="ASSOCIACAO"
                      v-model="tipoAtividade"
                    />
                    <span>Associação</span>
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
                      value="V_OU_F"
                      v-model="tipoAtividade"
                    />
                    <span>V ou F</span>
                  </label>
                </p>
              </div>
              
            </div>

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
      nome: "",
      tipoAtividade: "",
    };
  },
  mounted() {
    //this.listar()
  },
  methods: {
    salvar() {
      this.$http
        .post("http://localhost:8090/api/adicionar", {
          nome: this.nome,
          tipoAtividade: this.tipoAtividade,
        })
        .then(() => {
          this.$router.push("/listar-atividades");
        })
        .catch(e => {
          alert("erro: " + e);
        });
    }
  }
};
</script>

<style>
button {
  margin: 1%;
}
#formulario{
  
}
</style>