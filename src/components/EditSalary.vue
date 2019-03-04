<template lang="html">
    <div class="product-list">
        <form>
            Nom : 
            <input type="text" v-model="name">
            <br>
            Prénom : 
            <input type="text" v-model="description">
            <br>
            Date de naissance : 
            <input type="text" v-model="dateBegin">
            <br>
            Adresse : 
            <input type="text" v-model="dateEnd">
            <br>
            Téléphone : 
            <input type="number" v-model="money">
            <br>
            Mail : 
            <input type="text" v-model="status">
            <br>
            Poste : 
            <input type="text" v-model="status">
            <br>
            <button type="button" name="button" v-on:click="edit(name, firstname, birthday, adress, phone, mail, poste)">Editer le projet</button>
        </form>
        <!-- en voir un, en modifier un, en supprimer un -->
        <input type="number" v-model="id" placeholder="entrez l'index">
        <router-link to="/salary"><button type="button" name="button">Tous les salariés</button></router-link>
        <router-link to="/salary/:id"><button type="button" name="button">Voir</button></router-link>
    </div>
</template>

<script>

import projService from '../services/projetService';

export default {
    data() {
        return {
            projets:[]
        }
    },
    created() {
        let myId = this.$route.params.id
        projService.getProjet(myId)
        .then((data) => {
            this.projets = data;
            console.log(this.projets);
        })
        .catch(error => {console.log(error)});
    },
    methods: {
        edit: function (name, firstname, birthday, adress, phone, mail, poste) {
          projService.editProjet(name, firstname, birthday, adress, phone, mail, poste)
        }
    }
}
</script>

<style lang="css" scoped>
</style>
