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
    
    return `<span>${item.ability.name}</span>`
  })

  let moves = data.moves.map((item) =>{
    return `<span>${item.move.name}</span>`
  })

  let stats = data.stats.map((item) => {
    return `<span>${item.base_stat}</span>
            <span>${item.stat.name}; </span>
    `
  })

  div.innerHTML = `<div class="info">

      <div class="avatar">
        <img class="avatar_img" src=${
          data?.sprites?.other?.dream_world?.front_default ?? pokeData?.sprites?.front_default
        }
        </div>
      </div>

      <div class="moves">
        <b>Имя: </b>
        <span>
          ${data.name}
        </span>
      </div>

      <div class="kr_info">
        <div class="moves">
        <b>Способности: </b>
        ${abilities.join(", ")}
        </div>
        <div class="moves">
        <b>Базовый опыт: </b>
        <span>${data.base_experience}</span>
        </div>

        <div class="moves">
          <b>Приемы: </b>
          ${moves.join(", ")}
        </div>
        <div class="moves">
        <b>Вес: </b>
        <span>${data.weight}</span>
        </div>
        <div class="moves">
        <b>Высота: </b>
        <span>${data.height}</span>
       </div>
        <div class="moves">
        <b>Статистика: </b>
        ${stats.join("")}
        </div>
      </div>
      `
  
    
    mn.append(div)
}

interactive();

console.log(data);

