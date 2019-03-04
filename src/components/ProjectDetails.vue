<template lang="html">
    <div class="product-list">
        <table>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Date Begin</th>
                <th>Date End</th>
                <th>Money</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>{{projet.nameProj}}</td>
                <td>{{projet.description}}</td>
                <td>{{projet.dateBegin}}</td>
                <td>{{projet.dateEnd}}</td>
                <td>{{projet.money}}</td>
                <td>{{projet.status}}</td>
            </tr>
        </table>
        <!-- en voir un, en modifier un, en supprimer -->
        <input type="number" v-model="id" placeholder="entrez l'index">
        <router-link to="/projet"><button type="button" name="button">Tous les projets</button></router-link>
        <router-link to="/projet/edit/:id"><button type="button" name="button">Editer</button></router-link>
        <!-- <a href=""><button type="button" name="button">Supprimer</button></a> -->
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
    }
}
</script>

<style lang="css" scoped>
</style>
