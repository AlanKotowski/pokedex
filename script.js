
const pokefinder = document.getElementById('pokefinder')
const searchButton = document.getElementById('searchButton')
const testt = document.querySelector('.test')
const poke = new Image();
        
searchButton.addEventListener('click', () => {   
    let url = `https://pokeapi.co/api/v2/pokemon/` + pokefinder.value;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        abilityTable(data);
        basicData(data);
        typeTable(data);
        pokeImage(data);
        pokeAppearance(data)
    })
})
                            
function abilityTable(data){
    for (let i = 0; i < data.abilities.length; i++){
        console.log(data.abilities[i].ability.name)
    }
}
function typeTable(data){
    for (let i = 0; i < data.types.length; i++){
        console.log(data.types[i].type.name)
    }
}

function pokeImage(data){
    poke.src = data.sprites.front_default
    document.body.appendChild(poke)
}

function basicData(data){
    console.log(data.id);
}

function pokeAppearance(data){
    console.log(data.height + ' inch');
    console.log(data.weight + ' lbs');
}
    
    
    