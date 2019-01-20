<template>
  <div>
    
    <h1 style="margin-top:-50">Home</h1>

    <hr style="margin-top:50px">

    <form class="form-inline my-2 my-lg-5" style="margin-left:100px">
      <h2 >Digite o endereço do estabelecimento para localizá-lo</h2>
      <input
        class="form-control mr-sm-5"
        type="text"
        style="text-align:left; width: 400px; margin-left:50px"
        v-model="search"
        placeholder="ex: rua exemplo"
      >
    </form>

    <hr style="margin-bottom:50px">

<!-- CARD ESTABELECIMENTO -->
          <div  v-for="estabelecimento of estabelecimentos" :key="estabelecimento['.key']" 
          class="card border-dark mb-3" 
          style="max-width: 20rem;">
            <div class="card-header">{{ estabelecimento.nome }}</div>

            <div class="card-body">
              <ul
                class="card-text"
              >{{ estabelecimento.endereco }}</ul>
              <ul
                class="card-text"
              >{{ estabelecimento.telefone }}</ul>
            </div>
          </div>
<!-- CARD ESTABELECIMENTO -->

  </div>
</template>

<script>
export default {
  // components: {
  //     name: 'Home'
  // }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/main.scss";

img {
  width: 100%;
  height:150px;
  border-radius: 0px;
}
</style>