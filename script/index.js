

async function pokemonData(result) {
  return await fetch(result.url)
    .then(res => {
      // console.log(res)
      return res.json()
    })
}

async function f() {

  const mn = document.querySelector("main")

  const results = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10").then(
    (res) => res.json()
  );

  const data = await Promise.all(
    results.results.map(async (result) => {
      setTimeout(() => { }, 3000);
      const pokeData = await fetch(result.url).then((pokeData) =>
        pokeData.json()
      );
      let div = document.createElement("div");
      div.innerHTML = `<a href="descripton.html?name=${result.name}"><div class="body body1">
                      <div class="image-win image-win1"><img src=${pokeData?.sprites?.other?.dream_world?.front_default ?? pokeData?.sprites?.front_default}></div>
                      <h1 class="name name1">${result.name}</h1>
                  </div></a>`;

      mn.append(div);

    })
  );
  
  return results


}

async function test() {
  fetch("https://pokeapi.co/api/v2/pokemon/")

  for (let i = 0; i < 10; i++) {

  }
}

f();

console.log(f())

let form = document.querySelector("form")

let but = document.querySelector(".sign-in-button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
})

but.addEventListener("click", () => {
  let login = "Kirill";
  let addres = "Kirill@mail.ru";
  let password = 1234567890;

  let log = document.getElementById("login");
  let addr = document.getElementById("addres");
  let pass = document.getElementById("password");

  if (login === log.value && addres === addr.value && password == pass.value) {
    window.location = 'index.html';
    console.log("verify")
  }
  console.log({
    login: log.value,
    address: addr.value,
    password: pass.value,
  })

})
