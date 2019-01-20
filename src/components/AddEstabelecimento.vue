<template>

  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3 style="text-align:center">Cadastre seu Estabelecimento</h3>
      </div>
      <hr>
      <div class="card-body">
        <form v-on:submit.prevent="addEstabelecimento">
          <div class="form-group">
            <label>Nome:</label>
            <input
              type="text"
              class="form-control"
              placeholder="ex: estabelecimento123exemplo"
              v-model="newEstabelecimento.nome"
            >
          </div>

          <!-- <div class="search">
      <input type="text" v-model="searchAddressInput" v-on:change="searchLocation()"/>
          </div>-->
          <div class="form-group">
            <label>Endereco:</label>
            <input
              type="text"
              class="form-control"
              placeholder="ex: rua estabelecimento exemplo, 123"
              v-model="newEstabelecimento.endereco"
            >
          </div>

          <div class="form-group">
            <label>Telefone:</label>
            <input
              type="text"
              class="form-control"
              placeholder="ex: 12345"
              v-model="newEstabelecimento.telefone"
            >
          </div>

          <div class="form-group">
            <button
              type="submit"
              class="btn btn-success"
              @click="addEstabelecimento"
              value="Cadastrar"
            >Cadastrar</button>
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
        name: 'AddEstabelecimento',
    },
  firebase: {
    estabelecimentos: db.ref("estabelecimentos")
  },
  data() {
    return {
      newEstabelecimento: {
        nome: "",
        endereco: "",
        telefone: "",
        currentLocation: { lat: 0, lng: 0 },
        searchAddressInput: ""
      }
    };
  },

  // mounted: function() {
  //   this.geolocation();
  // },

  methods: {
    addEstabelecimento() {
      this.$firebaseRefs.estabelecimentos.push({
        nome: this.newEstabelecimento.nome,
        endereco: this.newEstabelecimento.endereco,
        telefone: this.newEstabelecimento.telefone,
      });
      this.newEstabelecimento.nome = "";
      this.newEstabelecimento.endereco = "";
       this.newEstabelecimento.telefone = "";
      this.$router.push("/index");
    }

    //   geolocation : function() {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     this.currentLocation = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };
    //   });
    // },

    // searchLocation: function() {
    //   var geocoder = new google.maps.Geocoder();
    //   geocoder.geocode({'address': this.searchAddressInput}, (results, status) => {
    //     if (status === 'OK') {
    //       this.currentLocation.lat = results[0].geometry.location.lat();
    //       this.currentLocation.lng = results[0].geometry.location.lng();
    //     }
    //   });
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/main.scss";

</style>