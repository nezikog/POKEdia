
// .then(res => {
//     console.log(res.body)
//     return res.results
// })

async function pokemonData(result) {
    return await fetch(result.url)
        .then(res => {
            // console.log(res)
            return res.json()
        })
}

async function f() {

    const mn = document.querySelector("main")

    const results = await fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)

            return data.results.map(result => {
                fetch(result.url)
                    .then(res => {
                        console.log(res)
                        let div = document.createElement('div');
                        div.innerHTML = `<div class="body body1">
                                    <div class="image-win image-win1"><img src=${res?.sprites?.other?.dream_world?.front_default}></div>
                                    <h1 class="name name1">${result.name}</h1>
                                </div>`

                        mn.append(div)
                        console.log(mn)
                        // document.body.append(html)
                        return res.json()
                    
                    })
            })

        })

    


    // const data = Promise.all(
    //     results.map(result => {
    //         return pokemonData(result)
    //         // console.log(pkData)
    //         //     let html = `<div class="body body1">
    //         //     <div class="image-win image-win1"><img src=${pkData.sprites.other.dream_world.front_default}></div>
    //         //     <h1 class="name name1">${result.name}</h1>
    //         // </div>`



    //         // console.log(html)
    //     }))


    return results


}

async function test() {
    fetch("https://pokeapi.co/api/v2/pokemon/")

    for (let i = 0; i < 10; i++) {

    }
}

console.log(f())




let form = document.querySelector("form")

let but = document.querySelector(".sign-in-button");

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

but.addEventListener("click", ()=>{
    let login = "Kirill";
    let addres = "Kirill@mail.ru";
    let password = 1234567890;    

    let log = document.getElementById("login");
    let addr = document.getElementById("addres");
    let pass = document.getElementById("password");

    if(login === log.value && addres === addr.value && password == pass.value){
        window.location = 'index.html';
        console.log("verify")
    }
    console.log({
        login: log.value,
        address: addr.value,
        password: pass.value,
    })
    
})
