<template lang="html">
    <div class="product-list">
        <form>
            Nom du projet : 
            <input type="text" v-model="name">
            <br>
            Description : 
            <input type="text" v-model="description">
            <br>
            Date de début : 
            <input type="text" v-model="dateBegin">
            <br>
            Date de fin : 
            <input type="text" v-model="dateEnd">
            <br>
            Fond disponible : 
            <input type="number" v-model="money">
            <br>
            Status : 
            <input type="text" v-model="status">
            <br>
            <button type="button" name="button" v-on:click:"edit(name, description, dateBegin, dateEnd, money, status)">Editer le projet</button>
        </form>
        <!-- en voir un, en modifier un, en supprimer un -->
        <input type="number" v-model="id" placeholder="entrez l'index">
        <router-link to="/projet"><button type="button" name="button">Tous les projets</button></router-link>
        <router-link to="/projet/:id"><button type="button" name="button">Voir</button></router-link>
        <!-- <router-link to=""><button type="button" name="button">Supprimer</button></router-link> -->
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
        edit: function (name, description, dateBegin, dateEnd, money, status) {
          projService.editProjet(name, description, dateBegin, dateEnd, money, status)
        }
    }
}
</script>

<style lang="css" scoped>
</style>
