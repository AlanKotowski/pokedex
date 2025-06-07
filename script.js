
const pokefinder = document.getElementById('pokefinder');
const searchButton = document.getElementById('searchButton');
const next = document.getElementById('nextPokemon');
const prev = document.getElementById('previousPokemon');
const deleteBtn = document.getElementById('clear');
const pokePhoto = document.getElementById('pokePhoto');
const types = document.getElementById('types');
const abilities = document.getElementById('pokeAttacks');
const poke = new Image();
const pokeName =  document.getElementById('pokeName');
const pokemonName =  document.getElementById('pokemonName');
const pokeNumber = document.getElementById('pokeNumber');
const pokemonId = document.getElementById('pokemonID')
const pokeHeight = document.getElementById('pokemonWeight')
const pokeWeight = document.getElementById('pokemonHeight')


function finder(){
    let url = `https://pokeapi.co/api/v2/pokemon/` + pokefinder.value;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        pokeImage(data);
        pokeName.innerHTML = data.name;
        pokemonName.innerHTML = data.name;
        pokeNumber.innerHTML = '#' + data.id; 
        pokemonId.innerHTML = '#' + data.id;
        abilityTable(data);
        typeTable(data);
        pokeAppearance(data);
    })
    .catch(console.log('weird, lol'))
}

searchButton.addEventListener('click', () => {   
    finder()
})

document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' ){
       finder() 
    }
})

next.addEventListener('click', () => {
    pokefinder.value++
    finder()
})

prev.addEventListener('click', () => {
    if(pokefinder.value <= 1){
        return;
    } else {
    pokefinder.value--
    finder()
    }
})

deleteBtn.addEventListener('click', () => {
    pokefinder.value = '';
    poke.src = '';
    pokeName.innerHTML = '-';
    pokemonName.innerHTML = '-';
    pokeNumber.innerHTML = '-';
    pokemonId.innerHTML = '-';
    abilities.innerHTML = '-';
    types.innerHTML = '-';
    pokeHeight.innerHTML = '-'
    pokeWeight.innerHTML = '-'
})                     

function abilityTable(data){
    if(data.abilities.length == 1){
     abilities.innerHTML = data.abilities[0].ability.name
    } else if (data.abilities.length == 2){
     abilities.innerHTML = data.abilities[0].ability.name + '</br>' + data.abilities[1].ability.name
    } else if (data.abilities.length == 3){
     abilities.innerHTML = data.abilities[0].ability.name + '</br>' + data.abilities[1].ability.name + '</br>' + data.abilities[2].ability.name
    }
 }


 function typeTable(data){
     if(data.types.length == 1){
         types.innerHTML = data.types[0].type.name
        } else if (data.types.length == 2){
            types.innerHTML = data.types[0].type.name + '</br>' + data.types[1].type.name
        } else if (data.types.length == 3){
            types.innerHTML = data.types[0].type.name + '</br>' + data.types[1].type.name + '</br>' + data.types[2].type.name
        }
    }

function pokeAppearance(data){
        pokeHeight.innerHTML = data.weight + ' lbs';
        pokeWeight.innerHTML = data.height + ' inch';
    }
    
function pokeImage(data){
        poke.src = data.sprites.front_default;
        pokePhoto.appendChild(poke)
    }
    

    