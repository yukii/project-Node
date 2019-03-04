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
            <tr v-for="projet in projets">
                <td>{{projet.nameProj}}</td>
                <td>{{projet.description}}</td>
                <td>{{projet.dateBegin}}</td>
                <td>{{projet.dateEnd}}</td>
                <td>{{projet.money}}</td>
                <td>{{projet.status}}</td>
            </tr>
        </table>
        <!-- en voir un, en modifier un, en supprimer un -->
        <input type="number" name="id" id="id" v-model="id" placeholder="entrez l'index">
        <router-link to="/projet"><button type="button" name="button">Voir</button></router-link>
        <router-link to="/projet/edit/:id"><button type="button" name="button">Edit</button></router-link>
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
        projService.getProjets()
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
