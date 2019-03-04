<script>
    const myApiUrl = "http://localhost:2000/client/";

    export  default {
        getClients () {
            return fetch(myApiUrl + "all")
            .then ((response) => {
                return response.json();
            })
        },
        createClient(company, adress, contact, activity) {
            return fetch(myApiUrl + "created", {
                method:'post',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(
                    {
                      "company":company,
                      "adress":adress,
                      "contact":contact,
                      "activity":activity
                    }
                )
                .then((response) => {
                    console.log(response)
                    return response.json()
                })
            })
        },
        deleteClient(id) {

        },
        editClient(id, company, adress, contact, activity) {
            return fetch(myApiUrl + "update/" + id, {
                method:'put',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'    
                },
                body:JSON.stringify(
                    {
                      "company":company,
                      "adress":adress,
                      "contact":contact,
                      "activity":activity
                    }
                )
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
            })
        },

        getClient(id) {
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
