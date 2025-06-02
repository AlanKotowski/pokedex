
const pokefinder = document.getElementById('pokefinder')
const searchButton = document.getElementById('searchButton')
const pokePhoto = document.getElementById('pokePhoto')
const types = document.getElementById('types')
const abilities = document.getElementById('pokeAttacks');
const poke = new Image();
        
searchButton.addEventListener('click', () => {   
    let url = `https://pokeapi.co/api/v2/pokemon/` + pokefinder.value;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        pokeImage(data);
        document.getElementById('pokeName').innerHTML = data.name;
        document.getElementById('pokemonName').innerHTML = data.name;
        document.getElementById('pokeNumber').innerHTML = '#' + data.id; 
        document.getElementById('pokemonID').innerHTML = '#' + data.id;
        abilityTable(data);
        typeTable(data);
        pokeAppearance(data);
        typeArts(data)
    })
    .catch(console.log('weird, lol'))
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



function typeArts(data){
    if(data.types[0].type.name == 'grass'){
        types.style.color = 'green'
        console.log('zielony')
    } else if(data.types[0].type.name == 'fire'){
        types.style.color = 'red'
        console.log('red')
    }else if(data.types[1].type.name == 'poison'){
        types.style.color = 'purple'
        console.log('fiolet')
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
        document.getElementById('pokemonWeight').innerHTML = data.weight + ' lbs';
        document.getElementById('pokemonHeight').innerHTML = data.height + ' inch';
    }
        
function pokeImage(data){
    poke.src = data.sprites.front_default;
    pokePhoto.appendChild(poke)
    console.log('test')
}


   