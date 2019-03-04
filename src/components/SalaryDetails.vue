<template lang="html">
    <div class="product-list">
        <table>
            <tr>
                <th>Name</th>
                <th>Firtname</th>
                <th>Birthday</th>
                <th>Adress</th>
                <th>Phone</th>
                <th>Mail</th>
                <th>Poste</th>
            </tr>
            <tr>
                <td>{{salary.nameSal}}</td>
                <td>{{salary.firstname}}</td>
                <td>{{salary.birthday}}</td>
                <td>{{salary.adress}}</td>
                <td>{{salary.phone}}</td>
                <td>{{salary.mail}}</td>
                <td>{{salary.poste}}</td>
            </tr>
        </table>
        <!-- en voir un, en modifier un, en supprimer un -->
        <input type="number" v-model="id" placeholder="entrez l'index">
        <router-link to="/salary"><button type="button" name="button">Tous les salariés</button></router-link>
        <router-link to="/salary/edit/:id"><button type="button" name="button">Editer</button></router-link>
        <!-- <a href=""><button type="button" name="button">Supprimer</button></a> -->
    </div>
</template>

<script>

import salService from '../services/salaryService';

export default {
    data() {
        return {
            salary:[]
        }
    },
    created() {
        let myId = this.$route.params.id
        projService.getSalary(myId)
        .then((data) => {
            this.salary = data;
            console.log(this.salary);
        })
        .catch(error => {console.log(error)});
    }
}
</script>

<style lang="css" scoped>
</style>
