<template lang="html">
    <div>
        <h3>Nombre de projets : {{projet}}</h3>
        <h3>Nombre de clients : {{client}}</h3>
        <h3>Nombre de salariés : {{salary}}</h3>
    </div>
</template>

<script>

import cliService from '../services/clientService';
import salService from '../services/salaryService';
import projService from '../services/projetService';

export default {
    data() {
        return {
            clients:0,
            projet:0,
            salary:0
        }
    },
    created() {
        cliService.count()
        .then((data) => {
            this.clients = data;
            console.log(this.clients);
        })
        .catch(error => { console.log(error)});

        salService.count()
        .then((data) => {
            this.clients = data;
            console.log(this.salary);
        })
        .catch(error => { console.log(error)});

        projService.count()
        .then((data) => {
            this.clients = data;
            console.log(this.projet);
        })
        .catch(error => { console.log(error)});
    }
}
</script>

<style lang="css" scoped>
</style>
