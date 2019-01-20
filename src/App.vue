<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img style="margin-right:10px; display: block;" src="./assets/hi_tech.jpg" alt="Logo image">
      <router-link :to="{ name: 'Home' }" class="navbar-brand">Hi Estabelecimentos</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto" style="border-left:2px solid white">
          <li class="nav-item" style="margin-left: 50px">
            <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item" style="margin-left: 50px">
            <router-link :to="{ name: 'Add' }" class="nav-link">Cadastrar</router-link>
          </li>
          <li class="nav-item" style="margin-left: 50px">
            <router-link :to="{ name: 'Edit' }" class="nav-link">Editar</router-link>
          </li>
          <li class="nav-item" style="margin-left: 50px">
            <router-link :to="{ name: 'List' }" class="nav-link">Estabelecimentos</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="gap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="css">
@import "~@/assets/css/main.scss";

.gap {
  margin-top: 50px;
}

img {
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 15%;
  margin-left: 1%;
}
</style>