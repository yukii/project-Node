<template lang="html">
  <div class="create-products">
      <form class="w-50 mx-auto">
          Nom du projet
          <input type="text" v-model="name">
          <br>
          Description
          <input type="text" v-model="description">
          <br>
          Date de début
          <input type="text" v-model="dateBegin">
          <br>
          Date de fin
          <input type="text" v-model="dateEnd">
          <br>
          Argent pour le projet
          <input type="number" v-model="money">
          <br>
          Status
          <input type="text" v-model="status">
          <br>
          <button class="btn btn-primary" type="button" name="button" v-on:click="create(name, description, dateBegin, dateEnd, money, status)">Créer</button>
      </form>
  </div>
</template>

<script>

import projService from '../services/projetService.vue'

export default {
  data () {
    return {
      name: '',
      description: '',
      dateBegin:'',
      dateEnd:'',
      money:'',
      status:''
    }
  },
  methods: {
    create: function (name, description, dateBegin, dateEnd, money, status) {
      projService.createProjet(name, description, dateBegin, dateEnd, money, status)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
