

// async function pokemonData() {
    let params = new URLSearchParams(document.location.search);
    let value = params.get('name');
     fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then(res => {
        console.log(res.json())
        
        // return res.json()
      })
      
//   }

// pokemonData();