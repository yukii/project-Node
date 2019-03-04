<template lang="html">
  <div class="create-products">
      <form class="w-50 mx-auto">
          Nom du projet
          <input type="text" v-model="name">
          <br>
          Firstname
          <input type="text" v-model="firstname">
          <br>
          Birthday
          <input type="text" v-model="birthday">
          <br>
          Adress
          <input type="text" v-model="adress">
          <br>
          Phone
          <input type="number" v-model="phone">
          <br>
          Mail
          <input type="text" v-model="mail">
          <br>
          Poste
          <input type="text" v-model="poste">
          <br>
          <button type="button" name="button" v-on:click="create(name, firstname, birthday, adress, phone, mail, poste)">Créer</button>
      </form>
  </div>
</template>

<script>

import salService from '../services/salaryService.vue'

export default {
  data () {
    return {
      name: '',
      firstname: '',
      birthday: '',
      adress:'',
      phone:'',
      mail:'',
      poste:''
    }
  },
  methods: {
    create: function (name, firstname, birthday, adress, phone, mail, poste) {
      salService.createSalary(name, firstname, birthday, adress, phone, mail, poste)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
