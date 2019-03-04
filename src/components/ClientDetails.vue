<template lang="html">
    <div class="product-list">
        <table>
            <tr>
                <th>Company</th>
                <th>Adress</th>
                <th>Contact</th>
                <th>Activity</th>
            </tr>
            <tr>
                <td>{{clients.company}}</td>
                <td>{{clients.adress}}</td>
                <td>{{clients.contact}}</td>
                <td>{{clients.activity}}</td>
            </tr>
        </table>
        <!-- en voir un, en modifier un, en supprimer un -->
        <router-link to="/client"><button type="button" name="button">Tout les clients</button></router-link>
        <router-link to="/client/edit"><button type="button" name="button">Editer</button></router-link>
        <!-- <button type="button" name="button">Supprimer</button> -->
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
        cliService.getClient(myId)
        .then((data) => {
            this.projets = data;
            console.log(this.clients);
        })
        .catch(error => {console.log(error)});
    }
}
</script>

<style lang="css" scoped>
</style>
