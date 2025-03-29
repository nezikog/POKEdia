fetch("https://pokeapi.co/api/v2/berry/")
.then(res => {
    return res.json()
})
.then(data => {
    console.log(data)
    document.getElementById("1").innerHTML = data.results[2]
})
.catch(err => {
    console.log("ERROR >>> " + err)
})
