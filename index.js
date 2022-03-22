
// create Rick and Morty character cards upon page load

document.addEventListener("DOMContentLoaded", () => {
    fetch('https://rickandmortyapi.com/api/character/1,2')
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        for (const charObj of data) {
            createCharacterCard(charObj);
        }
    })
});


///////////////////////////////---CHARACTERS---//////////////////////////////////////////////

//fetch character info upon click of "Search Characters" button

document.querySelector('.character-search').addEventListener('submit', fetchCharacter);

//create handleSubmit function for character search -- GET character requsted in search bar

function fetchCharacter(event) {
    event.preventDefault();
    deleteAllChildren();
    let characterName = event.target.name.value
    return fetch(`https://rickandmortyapi.com/api/character/?name=${characterName}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        let characterObjArray = data.results;
        characterObjArray.map(obj => createCharacterCard(obj));
    });
};

//create card function

function createCharacterCard(obj) {
    let card = document.createElement('div');
    card.classList.add('card')

    let characterImg = document.createElement('img');
    characterImg.src = obj.image;
    characterImg.classList.add('char-img');

    let characterName = document.createElement('h2');
    characterName.innerText = obj.name;

    let characterStatus = document.createElement('p');
    if (obj.status === 'Alive'){
        characterStatus.innerText = 'Status: ' + '🟢 ' + obj.status;
    } else if (obj.status === 'Dead') {
        characterStatus.innerText = 'Status: ' + '🔴 ' + obj.status; 
    } else {
        characterStatus.innerText = 'Status: ' + '🔘 ' + obj.status;
    };

    let characterSpecies = document.createElement('p');
    characterSpecies.innerText = 'Species: ' + obj.species;

    let characterOrigin = document.createElement('p');
    characterOrigin.innerText = 'Origin location: ' + obj.origin.name;

    let characterLocation = document.createElement('p');
    characterLocation.innerText = 'Last Known Location: ' + obj.location.name;

    let charEpisodeButton = document.createElement('button');
    charEpisodeButton.classList.add('button');
    charEpisodeButton.innerText = "See Episodes";

    let showEpisodes = false;
    charEpisodeButton.addEventListener("click", () =>{
        showEpisodes = !showEpisodes;
        if (showEpisodes) {
            characterEpisodes.style.display = "block";
        } else {
            characterEpisodes.style.display = "none";        
        };
    })

    let characterEpisodes = document.createElement('ul');
    characterEpisodes.style.display = "none";
    characterEpisodes.innerText = 'Seen in Episodes: '
    let episodeArray = obj.episode;
    for (let episode of episodeArray) {
        let newEpisode = document.createElement('li');
        fetch(episode)
        .then(resp => resp.json())
        .then(data => {
            newEpisode.innerText = `${data.episode} - ${data.name}`;
            characterEpisodes.appendChild(newEpisode);
    })
};

    card.appendChild(characterImg);
    card.appendChild(characterName);
    card.appendChild(characterStatus);
    card.appendChild(characterSpecies);
    card.appendChild(characterOrigin);
    card.appendChild(characterLocation);
    card.appendChild(charEpisodeButton);
    card.appendChild(characterEpisodes);

    document.querySelector('#character-card-container').appendChild(card);
}

///////////////////////////////////---LOCATIONS---//////////////////////////////////////////////

//fetch Location info upon click of "Search Locations" button

document.querySelector('.location-search').addEventListener('submit', fetchLocation);

function fetchLocation(event) {
    event.preventDefault();
    deleteAllChildren();
    return fetch(`https://rickandmortyapi.com/api/location/?name=${event.target.location.value}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        let locationObjArray = data.results;
        locationObjArray.map(obj => createLocationCard(obj));
    });
}

function createLocationCard(obj) {
    let card = document.createElement('div');
    card.classList.add('card')

    let locationName = document.createElement('h2');
    locationName.innerText = obj.name;

    let locationType = document.createElement('p');
    locationType.innerText = 'Type: ' + obj.type;

    let locationDimension = document. createElement('p');
    locationDimension.innerText = 'Dimension: ' + obj.dimension;

    let locResButton = document.createElement('button');
    locResButton.classList.add('button');
    locResButton.innerText = "See Residents";

    let showResidents = false;
    locResButton.addEventListener("click", () =>{
        showResidents = !showResidents;
        if (showResidents) {
            locationResidents.style.display = "block";
        } else {
            locationResidents.style.display = "none";        
        };
    })

    let locationResidents = document.createElement('ul');
    locationResidents.style.display = "none";
    locationResidents.innerText = 'Location Residents: ';
    let residentsArray = obj.residents;
    for (let resident of residentsArray) {
        let newRes = document.createElement('li');
        fetch(resident)
        .then(resp => resp.json())
        .then(data => {
            newRes.innerText = `${data.name}`
            return locationResidents.appendChild(newRes);
        });
    };

    card.appendChild(locationName);
    card.appendChild(locationType);
    card.appendChild(locationDimension);
    card.appendChild(locResButton);
    card.appendChild(locationResidents);

    document.querySelector('#location-card-container').appendChild(card);
}

////////////////////////////////---EPISODES---/////////////////////////////////////////////////////

//fetch episode info upon click of "Search Episodes" button

document.querySelector('.episode-search').addEventListener('submit', fetchEpisode);

function fetchEpisode(event) {
    event.preventDefault();
    deleteAllChildren();
    return fetch(`https://rickandmortyapi.com/api/episode/?episode=${event.target.episode.value}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        let episodeObjArray = data.results;
        episodeObjArray.map(obj => createEpisodeCard(obj));
    });
}

function createEpisodeCard(obj) {
    let card = document.createElement('div');
    card.classList.add('card');

    let episodeName = document.createElement('h2');
    episodeName.innerText = obj.name;

    let episodeCode = document.createElement('p');
    episodeCode.innerText = 'Code: ' + obj.episode;

    let episodeAirDate = document.createElement('p');
    episodeAirDate.innerText = 'Air Date: ' + obj.air_date;

    let epCharactersButton = document.createElement('button');
    epCharactersButton.classList.add('button');
    epCharactersButton.innerText = "See Characters";

    let showCharacters = false;
    epCharactersButton.addEventListener("click", () =>{
        showCharacters = !showCharacters;
        if (showCharacters) {
            episodeCharacters.style.display = "block";
        } else {
            episodeCharacters.style.display = "none";        
        };
    })

    let episodeCharacters = document.createElement('ul');
    episodeCharacters.style.display = "none";
    episodeCharacters.innerText = 'Episode Characters: ';
    let charactersArray = obj.characters;
    for (let character of charactersArray) {
        let newChar = document.createElement('li');
        fetch(character)
        .then(resp => resp.json())
        .then(data => {
            newChar.innerText = `${data.name}`
            return episodeCharacters.appendChild(newChar);
        });
    }

    card.appendChild(episodeName);
    card.appendChild(episodeCode);
    card.appendChild(episodeAirDate);
    card.appendChild(epCharactersButton);
    card.appendChild(episodeCharacters);

    document.querySelector('#episode-card-container').appendChild(card);

};

//create deleteChildren function

const characterContainer = document.querySelector('#character-card-container');
const locationContainer = document.querySelector('#location-card-container');
const episodeContainer = document.querySelector('#episode-card-container');

function deleteChildren(parentNode) {
    let parent = parentNode;
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

function deleteAllChildren() {
    deleteChildren(characterContainer);
    deleteChildren(locationContainer);
    deleteChildren(episodeContainer);
};
