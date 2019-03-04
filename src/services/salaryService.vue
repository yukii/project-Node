<script>
    const myApiUrl = "http://localhost:2000/salary/";

    export default {
        getSalaries () {
            return fetch(myApiUrl + "all")
            .then ((response) => {
                return response.json();
            })
        },
        createSalary(nameSal, firstname, birthday, adress, phone, mail, poste) {
            return fetch(myApiUrl + "created", {
                method:'post',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(
                    {
                      "nameSal":nameSal,
                      "firstName":firstname,
                      "birthday":birthday,
                      "adress":adress,
                      "phone":phone,
                      "mail":mail,
                      "poste":poste,
                    }
                )
                .then((response) => {
                  console.log(response)
                  return response.json()
                })
            })
        },

        deleteSalary(id) {

        },

        editSalary(id, nameSal, firstname, birthday, adress, phone, mail, poste) {
            return fetch(myApiUrl + "update/" + id, {
                method:'put',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'    
                },
                body:JSON.stringify(
                    {
                      "nameSal": nameSal,
                      "firstName": firstname,
                      "birthday": birthday,
                      "adress": adress,
                      "phone": phone,
                      "mail": mail,
                      "poste": poste,
                    }
                )
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
            })
        },

        getSalary(id) {
            return fetch(myApiUrl + id)
            .then((response) => {
                return response.json();
            })
        },

        count(){
            return fetch(myApiUrl + '/count')
            .then((response) => {
                return response.json();
            })
        }
    }
</script>
