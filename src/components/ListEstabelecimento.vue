<template>
  <div>
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

    <h1>Lista de Estabelecimentos</h1>
    
    <hr>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Endereco</th>
          <th>Telefone</th>
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="estabelecimento of estabelecimentos" :key="estabelecimento['.key']">
          <td>{{ estabelecimento.nome }}</td>
          <td>{{ estabelecimento.endereco }}</td>
          <td>{{ estabelecimento.telefone }}</td>
          <td>
            <router-link
              :to="{ name: 'Edit', params: {id: estabelecimento['.key']} }"
              class="btn btn-warning"
            >Edit
            </router-link>
          </td>
          <td>
            <button
              @click="deleteEstabelecimento(estabelecimento['.key'])"
              class="btn btn-danger"
            >Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from "../config/db";

export default {
  components: {
    name: "ListEstabelecimento"
  },
  data() {
    return {
      estabelecimentos: [],
      search: ""
    };
  },
  firebase: {
    estabelecimentos: db.ref("estabelecimentos")
  },
  methods: {
    deleteEstabelecimento(key) {
      this.$firebaseRefs.estabelecimentos.child(key).remove();
    }
  },
  computed: {
    filteredEnderecos: function() {
      return this.estabelecimentos.filter(estabelecimento => {
        return estabelecimento.endereco.match(this.search);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/main.scss";
</style>