<template lang="html">
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Firstname</th>
            </tr>
            <tr v-for="salary in salaries">
                <td>{{salary.nameSal}}</td>
                <td>{{salary.firtname}}</td>
            </tr>
        </table>
        <!-- en voir un, en modifier un, en supprimer un -->
        <input type="number" v-model="id" placeholder="entrez l'index">
        <router-link to="/salary/:id"><button type="button" name="button">Voir</button></router-link>
        <router-link to="/salary/edit/:id"><button type="button" name="button">Editer</button></router-link>
        <!-- <a href=""><button type="button" name="button">Supprimer</button></a> -->
    </div>
</template>

<script>

import salService from '../services/salaryService';

export default {
    data() {
        return {
            salaries:[]
        }
    },
    created() {
        salaryService.getsalarys()
        .then((data) => {
            this.salaries = data;
            console.log(this.salaries);
        })
        .catch(error => { console.log(error)});
    }
}
</script>

<style lang="css" scoped>
</style>
