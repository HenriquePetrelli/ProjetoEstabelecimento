<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Editar Estabelecimento</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateEstabelecimento">
          <div class="form-group">
            <label>Nome:</label>
            <input type="text" class="form-control" v-model="newEstabelecimento.nome">
          </div>
          <div class="form-group">
            <label>Endereco:</label>
            <input type="text" class="form-control" v-model="newEstabelecimento.endereco">
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Editar">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import { db } from "../config/db";

export default {
  components: {
    name: "EditEstabelecimento"
  },
  firebase: {
    estabelecimentos: db.ref("estabelecimentos"),
    estabelecimentosObj: {
      source: db.ref("estabelecimentos"),
      asObject: true
    }
  },
  data() {
    return {
      newEstabelecimento: {}
    }
  },
  created() {
    let estabelecimento = this.estabelecimentosObj[this.$route.params.id];
    this.newEstabelecimento = {
      nome: estabelecimento.nome,
      endereco: estabelecimento.endereco
    }
  },
  methods: {
    updateEstabelecimento() {
      this.$firebaseRefs.estabelecimentos
        .child(this.$route.params.id)
        .set(this.newEstabelecimento);
      this.$router.push("/index");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/main.scss";
</style>