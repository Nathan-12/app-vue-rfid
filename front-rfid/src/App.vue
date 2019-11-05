<template>
  <div>
    <nav>
      <div class="nav-wrapper blue">
        <a href="#" class="brand-logo center">Sistema RFID LIBRAS</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <router-link to="/">Página Inicial</router-link>
          </li>
          <li>
            <router-link to="/cadastro">Cadastrar Atividade</router-link>
          </li>
          <!--
          <li>
            <router-link to="/adicionar-arquivo">Adicionar arquivos</router-link>
          </li> -->
          <li>
            <router-link to="/listar-atividades">Lista de Atividades</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1,
h2 {
  font-weight: normal;
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