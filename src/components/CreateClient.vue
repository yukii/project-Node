<template lang="html">
  <div class="create-products">
      <form class="w-50 mx-auto">
          Nom de la compagnie :
          <input type="text" v-model="name">
          <br>
          Adresse : 
          <input type="text" v-model="adress">
          <br>
          Contact : 
          <input type="text" v-model="contact">
          <br>
          Activité : 
          <input type="text" v-model="activity">
          <br>
          <button class="btn btn-primary" type="button" name="button" v-on:click="formData(name, adress, contact, activity)">Créer</button>
      </form>
  </div>
</template>

<script>

import cliService from '../services/clientService.vue'

export default {
  data () {
    return {
      name: '',
      adress: '',
      contact:'',
      activity:'',
    }
  },
  methods: {
    formData: function (name, adress, contact, activity) {
      cliService.createClient(name, adress, contact, activity)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
