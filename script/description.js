const mn = document.querySelector("main");

const avatar = document.querySelector(".avatar");
const namer = document.querySelectorAll(".name");
const info = document.querySelectorAll(".kr_info");
const bio = document.querySelectorAll(".bio");
let params = new URLSearchParams(document.location.search);
let value = params.get("name");
let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`).then(
  (res) => {
    return res.json();
  }
  
);

const results = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1").then(
  (res) => res.json()
);
console.log(results);


function interactive(){
  let div = document.createElement("div")

  //Сделать способности через forEach
  //В kr_info занести инфо об ударах и тд. более второстепенную информацию занести в bio

  let abilities = data.abilities.map((item) =>{
    
    return `<h2>${item.ability.name}</h2>`
  })

  let moves = data.moves.map((item) =>{
    return `<p>${item.move.name}</p>`
  })

  div.innerHTML = `<div class="info">

      <div class="avatar">
        <img class="avatar_img" src=${
          data?.sprites?.other?.dream_world?.front_default ?? pokeData?.sprites?.front_default
        }
        </div>
      </div>

      <div class="name">
        <h1 class="name_h3">
          ${data.name}
        </h1>
      </div>

      <div class="kr_info">
        
        ${abilities.join("")}
        
        <h2>
        ${data.base_experience}
        </h2>
        <div class="moves">
          ${moves.join("")}
        </div>
      </div>

      <div class="bio">
        <p>${data.weight}</p>
        <p>${data.height}</p>
      </div>
      `
  
    
    mn.append(div)
}

interactive();

console.log(data);

