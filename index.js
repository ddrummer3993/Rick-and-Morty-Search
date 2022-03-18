
//fetch character info upon click of "Search Characters" button

document.querySelector('.character-search').addEventListener('submit', fetchCharacter);

//create handleSubmit function for character search -- GET character requsted in search bar

function fetchCharacter(event) {
    event.preventDefault();
    let characterName = event.target.name.value
    return fetch(`https://rickandmortyapi.com/api/character/?name=${characterName}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        characterObjArray = data.results;
        characterObjArray.map(obj => createCard(obj));
    });
};

//create card function

function createCard(obj) {
    let card = document.createElement('div');
    card.classList.add('card')

    let characterImg = document.createElement('img');
    characterImg.src = obj.image;
    characterImg.classList.add('char-img');

    let characterName = document.createElement('h2');
    characterName.innerText = 'Name: ' + obj.name;

    let characterStatus = document.createElement('p');
    characterStatus.innerText = 'Status: ' + obj.status;

    let characterSpecies = document.createElement('p');
    characterSpecies.innerText = 'Species: ' + obj.species;

    let characterOrigin = document.createElement('p');
    characterOrigin.innerText = 'Origin location: ' + obj.origin.name;

    let characterLocation = document.createElement('p');
    characterLocation.innerText = 'Last Known Location: ' + obj.location.name;

    let characterEpisodes = document.createElement('ul');
    characterEpisodes.innerText = 'Seen in Episodes: '
    let episodeArray = obj.episode;
    for (let episode of episodeArray) {
        let newEpisode = document.createElement('li');
        newEpisode.innerText = `${episode}`;
        characterEpisodes.appendChild(newEpisode);
    };

    card.appendChild(characterImg);
    card.appendChild(characterName);
    card.appendChild(characterStatus);
    card.appendChild(characterSpecies);
    card.appendChild(characterOrigin);
    card.appendChild(characterLocation);
    card.appendChild(characterEpisodes);

    document.querySelector('#character-card-container').appendChild(card);
}

////////////////////////////////////////////////////////////////////////////

//fetch Location info upon click of "Search Locations" button

document.querySelector('.location-search').addEventListener('submit', fetchLocation);

function fetchLocation(event) {}



//fetch episode info upon click of "Search Episodes" button

document.querySelector('.episode-search').addEventListener('submit', fetchEpisode);

function fetchEpisode (event) {}
