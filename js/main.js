const links = {
    youtube: 'lucascsleite',
    instagram: 'lucascsleite',
    facebook: 'lucascsleite',
    twitter: 'lucascsleite',
    gitHub: 'leitecsleite'
}


function changeName() {
    //document.getElementById('userName').textContent = 'Lucas Leite'
    // userName.textContent = 'Lucas Leite'
    for (let div of midiaSocial.children) {
        const social = div.getAttribute('id')

        div.children[0].href = `https://${social}.com/${links[social]}`

        //console.log(div.children[0].href)
    }




}

const url = `https://api.github.com/users/${links.gitHub}`;

fetch(url, {
    method: 'get' // Opicional
})
    .then(response => {
        response.json()
            .then(result => {
                const data = result;

                const { avatar_url, name, login,} = data

                userName.textContent = name;
                nameLogin.textContent = login;
                fotoPerfil.src = avatar_url
            })
    })
    .catch(error => { 
        return console.log(error)
    })

changeName(); 