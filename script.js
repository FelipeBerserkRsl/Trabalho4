    var myHeaders = new Headers();

    var myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };
    
    
    function fetchData() {
        fetch("https://swapi.dev/api/people/", myInit)
        .then(response => {
            if (!response.ok){
                throw Error('ERROR');
            }
            return response.json();
        })
        .then(data => { 
         console.log(data.results)
            const html = data.results
                .map(user => {
                return `
            <div class = "user">
            <p> Nome: ${user.name}</p>
            <p> Ano de Nascimento: ${user.birth_year}</p>
            </div>
            `;
        })
        .join("");
        document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    }).catch(error => {
        console.log(error);
    });
    }
    
    fetchData();
         