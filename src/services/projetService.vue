<script>
    const myApiUrl = "http://localhost:2000/projet/";

    export default {
        getProjets () {
            return fetch(myApiUrl + "all")
            .then ((response) => {
                return response.json();
            })
        },
        createProjet(nameProj, description, dateBegin, dateEnd, money, status) {
            return fetch(myApiUrl + "created", {
                method:'post',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(
                    {
                        "nameProj": nameProj,
                        "description": description,
                        "dateBegin": dateBegin,
                        "dateEnd": dateEnd,
                        "money": money,
                        "status": status,
                    }
                )
              .then((response) => {
                console.log(response)
                return response.json()
            })
        })
    },
        // deleteProjet(id) {

        // },
        editProjet(nameProj, description, dateBegin, dateEnd, money, status) {
            //let myURL = myApiUrl + "update/" + id;
            return fetch(myApiUrl + "update/" + id, {
                method:'put',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'    
                },
                body:JSON.stringify(
                    {
                        "nameProj": nameProj,
                        "description": description,
                        "dateBegin": dateBegin,
                        "dateEnd": dateEnd,
                        "money": money,
                        "status": status,
                    }
                )
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
            })
        },

        getProjet(id) {
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
