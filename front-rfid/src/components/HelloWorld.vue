<template>
  <div class="container">
    <h1>Bem vindo(a) !!!</h1>
    <div class="row">
      <div class="col s3"></div>
    <div class="col s6">
      <button 
      class="waves-effect blue waves-light btn-small" 
      @click="verFiles()"
      >todos os Arquivos Cadastrados no Sistema</button>
    </div>
    <div class="col s3"></div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  
  data () {
    return {}
  },
  methods: {
        verFiles(){
          this.$router.push("/files-cadastrados");
          this.$router.go();
        }
      }
}
</script>


<style scoped>
button{
  margin-left: 30px;
}
h1, h2 {
  font-weight: normal;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>