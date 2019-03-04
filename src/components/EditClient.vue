<template lang="html">
    <div class="product-list">
        <form>
            Nom de la compagnie : 
            <input type="text" v-model="company">
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
            <button type="button" name="button" v-on:click="edit(name, adress, contact, activity)">Editer le projet</button>
        </form>
        <!-- en voir un, en modifier un, en supprimer un -->
        <input type="number" v-model="id" placeholder="entrez l'index">
        <router-link to="/client"><button type="button" name="button">Tous les clients</button></router-link>
        <router-link to="/client/:id"><button type="button" name="button">Voir</button></router-link>
        <!-- <router-link to=""><button type="button" name="button">Supprimer</button></router-link> -->
    </div>
</template>

<script>

import cliService from '../services/clientService';

export default {
    data() {
        return {
            clients:[]
        }
    },
    created() {
        let myId = this.$route.params.id
        cliService.getProjet(myId)
        .then((data) => {
            this.clients = data;
            console.log(this.clients);
        })
        .catch(error => {console.log(error)});
    },
    methods: {
        edit: function (name, adress, contact, activity) {
          cliService.editProjet(name, adress, contact, activity)
        }
    }
}
</script>

<style lang="css" scoped>
</style>
