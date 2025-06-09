const pokefinder = document.getElementById("pokefinder");
const searchButton = document.getElementById("searchButton");
const next = document.getElementById("nextPokemon");
const prev = document.getElementById("previousPokemon");
const deleteBtn = document.getElementById("clear");
const pokePhoto = document.getElementById("pokePhoto");
const types = document.getElementById("types");
const abilities = document.getElementById("pokeAttacks");
const poke = new Image();
const pokeName = document.getElementById("pokeName");
const pokemonName = document.getElementById("pokemonName");
const pokeNumber = document.getElementById("pokeNumber");
const pokemonId = document.getElementById("pokemonID");
const pokeHeight = document.getElementById("pokemonWeight");
const pokeWeight = document.getElementById("pokemonHeight");
const flag = document.querySelector(".flag");

// fetching all data from pokeapi
function finder() {
  url = `https://pokeapi.co/api/v2/pokemon/` + pokefinder.value;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      pokeImage(data);
      pokeName.innerHTML = data.name;
      pokemonName.innerHTML = data.name;
      flag.innerHTML = data.id;
      pokeNumber.innerHTML = "#" + data.id;
      pokemonId.innerHTML = "#" + data.id;
      abilityTable(data);
      typeTable(data);
      pokeAppearance(data);
      pokefinder.value = pokeName.innerHTML;
    })
    .catch((error) => console.log(error));
}

// buttons event handlers
// searching pokemon
searchButton.addEventListener("click", () => {
  finder();
});

searchButton.addEventListener("touchend", () => {
  finder();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    finder();
  }
});

// display next pokemon
next.addEventListener("click", () => {
  flag.innerHTML++;
  pokefinder.value = flag.innerHTML;
  finder();
});

next.addEventListener("touchend", () => {
  flag.innerHTML++;
  pokefinder.value = flag.innerHTML;
  finder();
});

// display previous pokemon
prev.addEventListener("click", () => {
  if (flag.innerHTML <= 1) {
    return;
  } else {
    flag.innerHTML--;
    pokefinder.value = flag.innerHTML;
    finder();
  }
});

prev.addEventListener("touchend", () => {
  if (flag.innerHTML <= 1) {
    return;
  } else {
    flag.innerHTML--;
    pokefinder.value = flag.innerHTML;
    finder();
  }
});

// reset display
deleteBtn.addEventListener("click", () => {
  flag.innerHTML = 0;
  pokefinder.value = "";
  poke.src = "";
  pokeName.innerHTML = "-";
  pokemonName.innerHTML = "-";
  pokeNumber.innerHTML = "-";
  pokemonId.innerHTML = "-";
  abilities.innerHTML = "-";
  types.innerHTML = "-";
  pokeHeight.innerHTML = "-";
  pokeWeight.innerHTML = "-";
});

deleteBtn.addEventListener("touchend", () => {
  flag.innerHTML = 0;
  pokefinder.value = "";
  poke.src = "";
  pokeName.innerHTML = "-";
  pokemonName.innerHTML = "-";
  pokeNumber.innerHTML = "-";
  pokemonId.innerHTML = "-";
  abilities.innerHTML = "-";
  types.innerHTML = "-";
  pokeHeight.innerHTML = "-";
  pokeWeight.innerHTML = "-";
});

// display pokemon's abilities
function abilityTable(data) {
  if (data.abilities.length == 1) {
    abilities.innerHTML = data.abilities[0].ability.name;
  } else if (data.abilities.length == 2) {
    abilities.innerHTML =
      data.abilities[0].ability.name + "</br>" + data.abilities[1].ability.name;
  } else if (data.abilities.length == 3) {
    abilities.innerHTML =
      data.abilities[0].ability.name +
      "</br>" +
      data.abilities[1].ability.name +
      "</br>" +
      data.abilities[2].ability.name;
  }
}

// display pokemon's types
function typeTable(data) {
  if (data.types.length == 1) {
    types.innerHTML = data.types[0].type.name;
  } else if (data.types.length == 2) {
    types.innerHTML =
      data.types[0].type.name + "</br>" + data.types[1].type.name;
  } else if (data.types.length == 3) {
    types.innerHTML =
      data.types[0].type.name +
      "</br>" +
      data.types[1].type.name +
      "</br>" +
      data.types[2].type.name;
  }
}

// decorative units
function pokeAppearance(data) {
  pokeHeight.innerHTML = data.weight + " lbs";
  pokeWeight.innerHTML = data.height + " inch";
}

// display pokemon's image
function pokeImage(data) {
  poke.src = data.sprites.front_default;
  pokePhoto.appendChild(poke);
}
