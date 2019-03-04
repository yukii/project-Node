<template lang="html">
    <div>
        <table>
            <tr>
                <th>Compagnie</th>
                <th>Contact</th>
            </tr>
            <tr v-for="client in clients">
                <td>{{client.company}}</td>
                <td>{{client.contact}}</td>
            </tr>
        </table>
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
        cliService.getClients()
        .then((data) => {
            this.clients = data;
            console.log(this.clients);
        })
        .catch(error => { console.log(error)});
    }
}
</script>

<style lang="css" scoped>
</style>
